import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import jwt from "jsonwebtoken";
import cron from "node-cron";

import { cleanupDeletedUsers } from "./utils/cleanupDeletedUsers.js";

import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";

import { 
  handleUpdateUserInfo,
  handleCreateUserInternal 
} from "./controllers/user.controller.js";

import {
  handleAgreementConsent,
  getAgreementConsent,
} from "./controllers/agreement.controller.js";

import {
  handleGetUserProfile,
  handleUpdateUserProfile,
} from "./controllers/profile.controller.js";

import {
  NoBearerToken,
  ExpireToken,
  BearerTokenError,
  BearerTokenServerError,
} from "./errors.js";
import {
  handleGetRecommendManagement,
  handleAddMenuToExcept,
  handleRemoveMenuExcept,
} from "./controllers/recommend.management.controller.js";
import { handleWithdraw } from "./controllers/withdraw.controller.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// 요청 로깅(원하면 제거 가능)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// 공통 응답 포맷
app.use((req, res, next) => {
  res.success = (success) =>
    res.json({ resultType: "SUCCESS", error: null, success });

  res.error = ({ errorCode = "unknown", reason = null, data = null }) =>
    res.json({
      resultType: "FAIL",
      error: { errorCode, reason, data },
      success: null,
    });

  next();
});

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
      "https://omechu.log8.kr",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "X-Requested-With",
      "Origin",
    ],
  })
);

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 세션 저장소 (MySQL)
const MySQLSession = MySQLStore(session);
const sessionStore = new MySQLSession({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // 필요하면 port도 추가 가능
  // port: Number(process.env.DB_PORT || 3306),
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || "replace_me",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      httpOnly: true,
      secure: false, // HTTPS면 true로
      sameSite: "lax",
    },
  })
);

// Swagger (auth 서비스 전용)
// ... (상단 import 및 app 설정들)

// 1. 전역 변수 선언 (함수 밖에서도 쓸 수 있게)
let swaggerSpec = null;

// 2. 함수 정의 (이 안에 모든 로직이 들어감)
const startSwagger = async () => {
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };

  const doc = {
    openapi: "3.0.0",
    info: {
      title: "Omechu User API",
      version: "1.0.0",
      description: "Omechu User 정보 API",
    },
    servers: [{ url: "https://omechu-api.log8.kr/user" }],
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
    },
    security: [{ bearerAuth: [] }],
  };

  /** ===========================
 * 탈퇴 사용자 30일 후 Hard Delete
 * 매일 새벽 4시 실행
 * =========================== */
cron.schedule("0 4 * * *", async () => {
  console.log("🧹 [CRON] 탈퇴 사용자 정리 작업 시작");
  try {
    await cleanupDeletedUsers();
    console.log("✅ [CRON] 탈퇴 사용자 정리 완료");
  } catch (err) {
    console.error("❌ [CRON] 탈퇴 사용자 정리 실패", err);
  }
});

  const routes = ["./index.js", "./controllers/*.js"];

  try {
    // [A] 데이터를 생성할 때까지 기다림
    const result = await swaggerAutogen(options)("/dev/null", routes, doc);
    swaggerSpec = result.data || doc;

    // [B] 데이터가 준비된 후 Swagger UI를 앱에 등록
    app.use(
      ["/docs", "/user/docs"],
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(swaggerSpec, {
        swaggerOptions: {
          url: null,
          configUrl: null,
          withCredentials: true,
        },
      })
    );

    // [C] 어떤 경로로 찔러도 준비된 JSON을 뱉도록 라우터 등록
    const forceJsonResponse = (req, res) => res.json(swaggerSpec);
    app.get("/openapi.json", forceJsonResponse);
    app.get("/docs/openapi.json", forceJsonResponse);
    app.get("/user/openapi.json", forceJsonResponse);
    app.get("/user/docs/openapi.json", forceJsonResponse);

    console.log("✅ Swagger UI 및 JSON 라우터가 완벽하게 준비되었습니다.");
  } catch (err) {
    console.error("❌ Swagger 생성 실패:", err);
  }
};

// 3. 함수 실행 (잊지 말고 호출!)
startSwagger();

// --- Auth 미들웨어(기존 로직 유지) ---
function verifyTokenOrThrow(accessToken) {
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    const id = decoded.payload ?? decoded.userId ?? decoded.sub;
    if (!id) throw new BearerTokenError("유효하지 않은 토큰 페이로드입니다.");
    const role = decoded.role ?? "member";
    return { id, role };
  } catch (err) {
    if (err.name === "TokenExpiredError")
      throw new ExpireToken("액세스 토큰이 만료되었습니다.");
    if (err.name === "JsonWebTokenError")
      throw new BearerTokenError("유효하지 않은 액세스 토큰입니다.");
    throw new BearerTokenServerError("토큰 검증 중 서버 오류");
  }
}

export const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new NoBearerToken("인증 토큰이 없습니다.");
  }
  const accessToken = authHeader.split(" ")[1];
  const { id, role } = verifyTokenOrThrow(accessToken);
  req.user = { id, role };
  return next();
};

// 기본 라우터
app.get("/", (req, res) => {
  res.send("User API is running");
});

// --- User routes만 남김 ---
// 회원 가입 완료 API (회원 정보 넣는 API)
app.patch("/user/complete", isLoggedIn, handleUpdateUserInfo);
app.post("/user/internal", handleCreateUserInternal);

app.post("/user/withdraw", isLoggedIn, handleWithdraw);


// 약관 관련 API
app.post("/user/agreements/consent", isLoggedIn, handleAgreementConsent);
app.get("/user/agreements/consent", isLoggedIn, getAgreementConsent);

app.get("/user/profile", isLoggedIn, handleGetUserProfile);
app.patch("/user/profile", isLoggedIn, handleUpdateUserProfile);

app.get("/user/recommend/management", isLoggedIn, handleGetRecommendManagement);
app.post("/user/recommend/except", isLoggedIn, handleAddMenuToExcept);
app.post("/user/recommend/except/remove", isLoggedIn, handleRemoveMenuExcept);

// 에러 처리 미들웨어 (유지)
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  console.error("에러 발생:", {
    error: err.message,
    url: req.url,
    method: req.method,
    userId: req.user?.id,
    errorCode: err.errorCode,
  });

  const getStatusCode = (errorCode) => {
    const statusMap = {
      T001: 401,
      T002: 401,
      T003: 401,
      P001: 400,
    };
    return statusMap[errorCode] || 500;
  };

  const statusCode = err.statusCode || getStatusCode(err.errorCode) || 500;

  res.status(statusCode).error({
    errorCode: err.errorCode || "C001",
    reason: err.reason || err.message || "서버가 응답하지 못했습니다",
    data: err.data || null,
  });
});

app.listen(port, () => {
  console.log(`Auth API listening on port ${port}`);
});
