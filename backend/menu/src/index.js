import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import jwt from "jsonwebtoken";

import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";

import {
  handleRecommendRandom,
  handleGetMenuInfo,
  handleGetMenu,
} from "./controllers/menu.controller.js";
import { handleFetchGooglePlaces } from "./controllers/fetchGooglePlaces.controller.js";
import { handleGetMenuSearch } from "./controllers/menuSearch.controller.js";
import {
  handleGetMukburimStatistics,
  handleGetMukburimCalendar,
  handleGetMukburimByDate,
  handleInsertMukburim,
} from "./controllers/mukburim.controller.js";
import { handleSearchRestaurant } from "./controllers/getSearchRestaurant.controller.js";
import { handleSuggestion } from "./controllers/suggestions.controller.js";


import { createServer } from "http";
import { Server } from "socket.io";
import battleRoutes from "./routes/battle.routes.js";
import { setupBattleSocket } from "./websocket/battle.socket.js";
import { startBattleCleanupCron } from "./utils/battle.cron.js";
// ========================================

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
  }),
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
  }),
);

// Swagger 전역 변수
let swaggerSpec = null;

// Swagger 설정
const startSwagger = async () => {
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };

  const doc = {
    openapi: "3.0.0",
    info: {
      title: "Omechu Menu API",
      version: "1.0.0",
      description: "Omechu 메뉴 관련 API",
    },
    servers: [
  { url: "http://localhost:3000", description: "Local Development" },
  { url: "https://omechu-api.log8.kr", description: "Production" }
    ],
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
    },
    security: [{ bearerAuth: [] }],
  };

  const routes = ["./index.js", "./controllers/*.js"];

  try {
    const result = await swaggerAutogen(options)("/dev/null", routes, doc);
    swaggerSpec = result.data || doc;

    app.use(
      ["/docs", "/menu/docs"],
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(swaggerSpec, {
        swaggerOptions: {
          url: null,
          configUrl: null,
          withCredentials: true,
        },
      }),
    );

    const forceJsonResponse = (req, res) => res.json(swaggerSpec);
    app.get("/menu/openapi.json", forceJsonResponse);

    console.log("✅ Swagger UI 및 JSON 라우터가 완벽하게 준비되었습니다.");
  } catch (err) {
    console.error("❌ Swagger 생성 실패:", err);
  }
};

startSwagger();

// Auth 미들웨어
function verifyTokenOrThrow(accessToken) {
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    const id = decoded.payload ?? decoded.userId ?? decoded.sub;
    if (!id) throw new Error("유효하지 않은 토큰 페이로드입니다.");
    const role = decoded.role ?? "member";
    return { id, role };
  } catch (err) {
    if (err.name === "TokenExpiredError")
      throw new Error("액세스 토큰이 만료되었습니다.");
    if (err.name === "JsonWebTokenError")
      throw new Error("유효하지 않은 액세스 토큰입니다.");
    throw new Error("토큰 검증 중 서버 오류");
  }
}

export const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("인증 토큰이 없습니다.");
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

export const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    req.user = { id: null, role: "guest" };
    return next();
  }
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("인증 토큰이 없습니다.");
  }
  const accessToken = authHeader.split(" ")[1];
  const { id, role } = verifyTokenOrThrow(accessToken);
  req.user = { id, role };
  return next();
};

// 기본 라우터
app.get("/", (req, res) => {
  res.send("Menu API is running");
});
app.use("/api/battles", battleRoutes);
// --- menu routes만 남김 ---
app.post("/menu/recommend/random", handleRecommendRandom);
app.get("/menu", handleGetMenu);
app.post("/menu/fetch-google-places", handleFetchGooglePlaces);
app.get("/menu/search", handleGetMenuSearch);
app.post("/menu/menu-info", handleGetMenuInfo);

// Mukburim routes
app.post("/menu/mukburim", isLoggedIn, handleInsertMukburim);
app.get("/menu/mukburim/statistics", isLoggedIn, handleGetMukburimStatistics);
app.get("/menu/mukburim/calendar", isLoggedIn, handleGetMukburimCalendar);
app.get("/menu/mukburim/date", isLoggedIn, handleGetMukburimByDate);

// Restaurant & Review routes
app.get("/menu/place/search", optionalAuth, handleSearchRestaurant);
app.get("/menu/place/suggestions", isLoggedIn, handleSuggestion);

// 에러 처리 미들웨어
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


const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
      "https://omechu.log8.kr",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  },
});

// WebSocket 핸들러 설정
setupBattleSocket(io);
console.log("✅ Socket.io initialized for battle system");

// Cron Job 시작
startBattleCleanupCron(io);
console.log("✅ Battle cleanup cron started");

// HTTP Server 시작
httpServer.listen(port, () => {
  console.log(`✅ Menu service (with Socket.io) listening on port ${port}`);
});
// ========================================
