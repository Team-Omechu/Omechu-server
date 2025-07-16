// index.js
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import { handleUserSignUp } from "./controllers/auth.controller.js";
import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";
import { handleRecommendMenu, handleFindRelatedMenu } from "./controllers/menu.controller.js";
import { testDatabaseConnection} from "./repositories/menu.repository.js";
import { handleFetchKakaoPlaces } from "./controllers/restaurant.controller.js";
import { handleFetchGooglePlaces } from "./controllers/restaurant.controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use((req, res, next) => {
  res.success = (success) => {
    return res.json({ resultType: "SUCCESS", error: null, success });
  };

  res.error = ({ errorCode = "unknown", reason = null, data = null }) => {
    return res.json({
      resultType: "FAIL",
      error: { errorCode, reason, data },
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

// 세션 미들웨어 등록
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore, // 세션을 DB에 저장
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 1시간
    },
  })
);

// swagger 미들웨어 등록
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(
    {},
    {
      swaggerOptions: {
        url: "/openapi.json",
      },
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
  const routes = ["./src/index.js"];
  const doc = {
    info: {
      title: "Omechu",
      description: "Umc 8th Omech 데모데이 프로젝트",
    },
    host: "localhost:3000",
  };
  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

// 기타 미들웨어
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// 기본 라우터
app.get("/", (req, res) => {
  res.send("Hello Omechu!");
});

// 회원가입 라우터 (POST /auth/signup)
app.post("/auth/signup", handleUserSignUp);
app.get("/recommend", handleRecommendMenu);
app.get("/fetch-places", handleFetchKakaoPlaces);
app.get("/fetch-google-places", handleFetchGooglePlaces);
app.get("/find-related-menu", handleFindRelatedMenu);

// 에러 처리 미들웨어 ( 미들웨어 중 가장 아래에 배치 )
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  res.status(res.statusCode || 500).error({
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
            console.error("Database connection failed. Please check your AWS RDS settings.");
        }
    } catch (error) {
        console.error("Error initializing database:", error);
        console.error("Server will continue running, but database operations may fail.");
    }
}
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  await initializeDatabase();
});
