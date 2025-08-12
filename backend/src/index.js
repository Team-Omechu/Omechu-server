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
  handleFindRelatedMenu,
} from "./controllers/menu.controller.js";
import { testDatabaseConnection } from "./repositories/menu.repository.js";
import { handleFetchKakaoPlaces } from "./controllers/restaurant.controller.js";
import { handleFetchGooglePlaces } from "./controllers/restaurant.controller.js";
import { generatePresignedUrl } from "./controllers/image.uploader.js";
import { handleUserLoginJWT } from "./controllers/login.controller.js";
import { handleRenewToken } from "./controllers/renewToken.controller.js";
import { handleUpdateUserInfo } from "./controllers/user.controller.js";
import { handleAddReview } from "./controllers/addReview.controller.js";
import { handleUserLogoutJWT } from "./controllers/logout.controller.js";
import { handleLike } from "./controllers/like.controller.js";
import { handleGetReview } from "./controllers/getReview.controller.js";
import { handleSendEmailCode } from "./controllers/email.controller.js";
import { handleVerifyEmailCode } from "./controllers/email.controller.js";
import { handleGetPlaceDetail } from "./controllers/restaurant.controller.js";
import {
  handleResetRequest,
  handleResetPassword,
} from "./controllers/passwordReset.controller.js";
import {
  handleGetMenu,
  handleGetMenuInfo,
} from "./controllers/menu.controller.js";
import {
  handleGetMenuRandom,
  handleInsertMenuViewTime,
  handleGetMenuRecent,
  handleGetMenuFiltered,
} from "./controllers/sortMenu.controller.js";
import {
  handleGetUserProfile,
  handleUpdateUserProfile,
  handleGetMyRestaurants,
  handleAddZzim,
  handleRemoveZzim,
  handleGetZzimList,
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
import { handleAddRestaurant } from "./controllers/addRestaurant.controller.js";
import { handleEditRestaurant } from "./controllers/editRestaurant.controller.js";
import { handleGetRestaurant } from "./controllers/getRestaurant.controller.js";
import { handleReportReview } from "./controllers/reportReveiw.controller.js";
import { handleGetCoordinates } from "./controllers/getCoordinates.controller.js";
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

// 토큰 검증 미들웨어 (에러 처리만 개선)
export const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new NoBearerToken("인증 토큰이 없습니다.");
  }
  const accessToken = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = { id: decoded.payload };
    console.log(`토큰 검증 성공: userId=${decoded.payload}`);
    next();
  } catch (err) {
    console.error("토큰 검증 오류:", err.message);
    if (err.name === "TokenExpiredError") {
      throw new ExpireToken("액세스 토큰이 만료되었습니다.");
    } else if (err.name === "JsonWebTokenError") {
      throw new BearerTokenError("액세스 토큰이 만료되었습니다.");
    } else {
      throw new BearerTokenServerError("토큰 검증 중 서버 오류");
    }
  }
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
app.post("/recommend", handleRecommendMenu);
app.get("/fetch-places", handleFetchKakaoPlaces);
app.post("/fetch-google-places", handleFetchGooglePlaces);
app.post("/find-related-menu", handleFindRelatedMenu);
app.get("/menu", handleGetMenu);
app.get("/menu/random", handleGetMenuRandom);
app.get("/menu/recent", isLoggedIn, handleGetMenuRecent);
app.get("/menu/filtered", handleGetMenuFiltered);
app.post("/menu-info", handleGetMenuInfo);
app.post("/menu/view", isLoggedIn, handleInsertMenuViewTime); // 메뉴 조회 시간 기록
// Mukburim 기본 기능
app.post("/mukburim", isLoggedIn, handleInsertMukburim);

// Mukburim 통계 기능 - JWT 형식으로 변경 (userId 제거)
app.get("/mukburim/statistics", isLoggedIn, handleGetMukburimStatistics);
app.get("/mukburim/calendar", isLoggedIn, handleGetMukburimCalendar);
app.get("/mukburim/date", isLoggedIn, handleGetMukburimByDate);

// Restaurant & Review
app.post("/place/review/:restId", isLoggedIn, handleAddReview);
app.get("/place/review/:restId", isLoggedIn, handleGetReview);
app.patch("/place/:restId/like/:reviewId", isLoggedIn, handleLike);
app.post("/place", isLoggedIn, handleAddRestaurant);
app.get("/place", isLoggedIn, handleGetRestaurant);
app.get("/place/detail/:restId", isLoggedIn, handleGetPlaceDetail);
app.patch("/place/detail/:restId/edit", isLoggedIn, handleEditRestaurant);
app.post("/place/:reviewId/report", isLoggedIn, handleReportReview);
app.post("/place/coordinates", isLoggedIn, handleGetCoordinates);
app.get("/place/search", isLoggedIn, handleSearchRestaurant);
app.get("/place/suggestions", isLoggedIn, handleSuggestion);
// ImageUpload
app.post("/image/upload", generatePresignedUrl);

// MyPage
app.get("/profile", isLoggedIn, handleGetUserProfile);
app.patch("/profile", isLoggedIn, handleUpdateUserProfile);
app.get("/profile/myPlace", isLoggedIn, handleGetMyRestaurants);

// Heart (찜 기능) - JWT 형식으로 변경 (userId 제거)
app.get("/hearts", isLoggedIn, handleGetZzimList);
app.post("/heart", isLoggedIn, handleAddZzim);
app.delete("/heart", isLoggedIn, handleRemoveZzim);

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
