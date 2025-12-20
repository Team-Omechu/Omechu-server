import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import jwt from "jsonwebtoken";

import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";

import { handleUserSignUp } from "./controllers/auth.controller.js";
import { handleUserLoginJWT } from "./controllers/login.controller.js";
import { handleRenewToken } from "./controllers/renewToken.controller.js";
import { handleUpdateUserInfo } from "./controllers/user.controller.js";
import { handleUserLogoutJWT } from "./controllers/logout.controller.js";

import {
  handleSendEmailCode,
  handleVerifyEmailCode,
} from "./controllers/email.controller.js";
import {
  handleResetRequest,
  handleResetPassword,
} from "./controllers/passwordReset.controller.js";
import { handleChangePassword } from "./controllers/passwordChange.controller.js";

import {
  handleKakaoRedirect,
  handleKakaoCallback,
} from "./controllers/kakao.controller.js";
import {
  handleAgreementConsent,
  getAgreementConsent,
} from "./controllers/agreement.controller.js";

import {
  NoBearerToken,
  ExpireToken,
  BearerTokenError,
  BearerTokenServerError,
} from "./errors.js";

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
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(
    {},
    {
      swaggerOptions: { url: "/auth/openapi.json", withCredentials: true },
    }
  )
);

app.get("/auth/openapi.json", async (req, res) => {
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };

  const outputFile = "/dev/null";
  const routes = ["./src/index.js", "./src/controllers/*.js"];

  const doc = {
    info: {
      title: "Omechu Auth API",
      description: "Omechu 인증/인가 서비스 API",
    },
    servers: [
      // 배포 시 auth API가 노출되는 주소로 바꾸는 게 맞음
      // 예: https://omechu-api.log8.kr/auth 또는 https://auth-api.omechu.com
      {
        url: "https://omechu-api.log8.kr",
        description: "Gateway",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
    },
    security: [{ bearerAuth: [] }],
  };

  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

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
  res.send("Auth API is running");
});

// --- Auth routes만 남김 ---
app.post("/auth/signup", handleUserSignUp);
app.patch("/auth/complete", isLoggedIn, handleUpdateUserInfo);

app.post("/auth/login", handleUserLoginJWT);
app.post("/auth/reissue", handleRenewToken);
app.post("/auth/logout", isLoggedIn, handleUserLogoutJWT);

app.post("/auth/send", handleSendEmailCode);
app.post("/auth/verify", handleVerifyEmailCode);

app.post("/auth/reset-request", handleResetRequest);
app.patch("/reset-passwd", handleResetPassword);

app.patch("/auth/change-passwd", isLoggedIn, handleChangePassword);

// 약관
app.post("/agreements/consent", isLoggedIn, handleAgreementConsent);
app.get("/agreements/consent", isLoggedIn, getAgreementConsent);

// 카카오 로그인
app.get("/auth/kakao", handleKakaoRedirect);
app.get("/auth/kakao/callback", handleKakaoCallback);

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
