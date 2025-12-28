import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import jwt from "jsonwebtoken";
import { handleUserSignUp } from "./controllers/auth.controller.js";
import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";
import {
  handleRecommendMenu,
  handleRecommendRandom,
} from "./controllers/menu.controller.js";
import { handleFetchKakaoPlaces } from "./controllers/restaurant.controller.js";
import { handleFetchGooglePlaces } from "./controllers/restaurant.controller.js";
import { generatePresignedUrl } from "./controllers/image.uploader.js";
import { handleUserLoginJWT } from "./controllers/login.controller.js";
import { handleRenewToken } from "./controllers/renewToken.controller.js";
import { handleUpdateUserInfo } from "./controllers/user.controller.js";
import { handleUserLogoutJWT } from "./controllers/logout.controller.js";
import { handleSendEmailCode } from "./controllers/email.controller.js";
import { handleVerifyEmailCode } from "./controllers/email.controller.js";
import {
  handleResetRequest,
  handleResetPassword,
} from "./controllers/passwordReset.controller.js";
import {
  handleGetMenu,
  handleGetMenuInfo,
} from "./controllers/menu.controller.js";
import {
  handleGetMenuSearch,
} from "./controllers/sortMenu.controller.js";
import {
  handleGetUserProfile,
  handleUpdateUserProfile,
  handleGetMyRestaurants,
  handleGetUserReviews,
  handleDeleteReview,
} from "./controllers/mypage.controller.js";

//마이페이지의 먹부림 조회
import {
  handleGetMukburimStatistics,
  handleGetMukburimCalendar,
  handleGetMukburimByDate,
} from "./controllers/mukburim.statistics.controller.js";
//마이페이지의 추천 목록 관리
import {
  handleGetRecommendManagement,
  handleAddMenuToExcept,
  handleRemoveMenuExcept,
} from "./controllers/recommend.management.controller.js";
import { handleInsertMukburim } from "./controllers/mukburim.controller.js";
import { handleChangePassword } from "./controllers/passwordChange.controller.js";
import {
  handleKakaoRedirect,
  handleKakaoCallback,
} from "./controllers/kakao.controller.js";
import { handleSearchRestaurant } from "./controllers/getSearchRestaurant.controller.js";
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
import { handleSuggestion } from "./controllers/suggestions.controller.js";
import { pool } from "./db.config.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// 요청 로깅 미들웨어 (간단하게)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  res.success = (success) => {
    return res.json({ resultType: "SUCCESS", error: null, success });
  };

  res.error = ({ errorCode = "unknown", reason = null, data = null }) => {
    return res.json({
      resultType: "FAIL",
      error: { errorCode, reason, data },
      success: null,
    });
  };
  next();
});

// MySQL 세션 저장소 설정
const MySQLSession = MySQLStore(session);
const sessionStore = new MySQLSession({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// CORS 설정 개선 (기존 설정에 추가)
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

// swagger 미들웨어 등록
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(
    {},
    {
      swaggerOptions: { url: "/openapi.json", withCredentials: true },
    }
  )
);

app.get("/openapi.json", async (req, res, next) => {
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };
  const outputFile = "/dev/null";
  const routes = ["./src/index.js", "./src/controllers/*.js"];
  const doc = {
    info: {
      title: "Omechu",
      description: "Umc 8th Omechu 데모데이 프로젝트",
    },
    servers: [
      {
        url: "https://omechu-api.log8.kr",
        description: "배포 서버",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  };
  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

function verifyTokenOrThrow(accessToken) {
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    // 네 코드가 decoded.payload를 쓰고 있어서 우선 그걸 우선시
    const id = decoded.payload ?? decoded.userId ?? decoded.sub;
    if (!id) throw new BearerTokenError("유효하지 않은 토큰 페이로드입니다.");
    const role = decoded.role ?? "member";
    return { id, role };
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      throw new ExpireToken("액세스 토큰이 만료되었습니다.");
    } else if (err.name === "JsonWebTokenError") {
      throw new BearerTokenError("유효하지 않은 액세스 토큰입니다.");
    } else {
      throw new BearerTokenServerError("토큰 검증 중 서버 오류");
    }
  }
}

// 토큰 검증 미들웨어 (에러 처리만 개선)
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

export const isLoggedInforRecommend = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next();
  }
  const accessToken = authHeader.split(" ")[1];
  const { id, role } = verifyTokenOrThrow(accessToken);
  req.user = { id, role };
  return next();
};

// 로그인 / 비로그인 검증 미들웨어
export const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    req.user = { id: null, role: "guest" };
    return next();
  }
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new NoBearerToken("인증 토큰이 없습니다.");
  }
  const accessToken = authHeader.split(" ")[1];
  const { id, role } = verifyTokenOrThrow(accessToken);
  req.user = { id, role };
  return next();
};

// 기타 미들웨어
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 라우터
app.get("/", (req, res) => {
  res.send("Hello Omechu!");
});

// Auth
app.post("/auth/signup", handleUserSignUp);
app.patch("/auth/complete", isLoggedIn, handleUpdateUserInfo);
app.post("/auth/reset-request", handleResetRequest);
app.patch("/reset-passwd", handleResetPassword);
app.post("/auth/login", handleUserLoginJWT);
app.post("/auth/reissue", handleRenewToken);
app.post("/auth/logout", isLoggedIn, handleUserLogoutJWT);
app.post("/auth/send", handleSendEmailCode);
app.post("/auth/verify", handleVerifyEmailCode);
app.patch("/auth/change-passwd", isLoggedIn, handleChangePassword);
app.post("/agreements/consent", isLoggedIn, handleAgreementConsent);
app.get("/agreements/consent", isLoggedIn, getAgreementConsent);

// 카카오 로그인
app.get("/auth/kakao", handleKakaoRedirect);
app.get("/auth/kakao/callback", handleKakaoCallback);

//메인페이지 관련
app.post("/recommend", isLoggedInforRecommend, handleRecommendMenu);
app.post("/recommend/random", handleRecommendRandom);
app.get("/fetch-places", handleFetchKakaoPlaces);
app.post("/fetch-google-places", handleFetchGooglePlaces);
app.get("/menu/search", handleGetMenuSearch);
app.post("/menu-info", handleGetMenuInfo);
// Mukburim 기본 기능
app.post("/mukburim", isLoggedIn, handleInsertMukburim);

// Mukburim 통계 기능 - JWT 형식으로 변경 (userId 제거)
app.get("/mukburim/statistics", isLoggedIn, handleGetMukburimStatistics);
app.get("/mukburim/calendar", isLoggedIn, handleGetMukburimCalendar);
app.get("/mukburim/date", isLoggedIn, handleGetMukburimByDate);
// Restaurant & Review

app.get("/place/search", optionalAuth, handleSearchRestaurant);
app.get("/place/suggestions", isLoggedIn, handleSuggestion);
// ImageUpload
app.post("/image/upload", generatePresignedUrl);

// MyPage
app.get("/profile", isLoggedIn, handleGetUserProfile);
app.patch("/profile", isLoggedIn, handleUpdateUserProfile);
app.get("/profile/myPlace", isLoggedIn, handleGetMyRestaurants);

// Recommend (추천 관리) - JWT 형식으로 변경 (userId 제거)
app.get("/recommend/management", isLoggedIn, handleGetRecommendManagement);
app.post("/recommend/except", isLoggedIn, handleAddMenuToExcept);
app.post("/recommend/except/remove", isLoggedIn, handleRemoveMenuExcept);

// 내 활동 내역 - JWT 형식으로 변경 (userId 제거)
app.get("/reviews", isLoggedIn, handleGetUserReviews);
app.delete("/reviews/:reviewId", isLoggedIn, handleDeleteReview);

// 에러 처리 미들웨어 개선 ( 미들웨어 중 가장 아래에 배치 )
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  // 에러 로깅 추가
  console.error("에러 발생:", {
    error: err.message,
    url: req.url,
    method: req.method,
    userId: req.user?.id,
    errorCode: err.errorCode,
  });

  // HTTP 상태 코드 매핑
  const getStatusCode = (errorCode) => {
    const statusMap = {
      T001: 401,
      T002: 401,
      T003: 401, // 토큰 관련
      MK001: 404,
      MK002: 400,
      MK003: 400,
      MK004: 400,
      MK005: 500, // 먹부림
      P001: 400, // 파라미터
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
// 데이터베이스 연결 테스트
export const testDatabaseConnection = async () => {
  try {
    console.log("Testing database connection...");
    const [rows] = await pool.execute("SELECT 1 as test");
    console.log("Database connection successful!");
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
};
// 데이터베이스 연결
async function initializeDatabase() {
  try {
    console.log("Initializing database...");
    const connectionTest = await testDatabaseConnection();

    if (connectionTest) {
      console.log("Database initialization completed successfully");
    } else {
      console.error(
        "Database connection failed. Please check your AWS RDS settings."
      );
    }
  } catch (error) {
    console.error("Error initializing database:", error);
    console.error(
      "Server will continue running, but database operations may fail."
    );
  }
}

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  await initializeDatabase();
});
