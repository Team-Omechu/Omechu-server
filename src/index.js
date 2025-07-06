import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { handleRecommendMenu } from "./controllers/menu.controller.js";
import { testDatabaseConnection} from "./repositories/menu.repository.js";
import { handleFetchKakaoPlaces } from "./controllers/restaurant.controller.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

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

app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.get("/recommend", handleRecommendMenu);
app.get("/fetch-places", handleFetchKakaoPlaces);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  await initializeDatabase();
});