import { OpenAI } from 'openai';
import dotenv from "dotenv";
import { pool } from "../db.config.js";

dotenv.config();
const key = process.env.OPENAI_API_KEY;

// 데이터베이스 연결 테스트
export const testDatabaseConnection = async () => {
    try {
        console.log("Testing database connection...");
        const [rows] = await pool.execute('SELECT 1 as test');
        console.log("Database connection successful!");
        return true;
    } catch (error) {
        console.error("Database connection failed:", error);
        return false;
    }
};


// 메뉴가 데이터베이스에 존재하는지 확인
export const checkMenuExists = async (menuName) => {
    try {
        const [rows] = await pool.execute(
            'SELECT * FROM menu WHERE name = ?',
            [menuName]
        );
        return rows.length > 0;
    } catch (error) {
        console.error("Error checking menu existence:", error);
        throw error;
    }
};

// 새로운 메뉴를 데이터베이스에 추가
export const addMenuToDatabase = async (menuData) => {
    try {
        const { menuName, description, calories, carbs, protein, fat, sodium, vitamins, allergyInfo } = menuData;
        
        const [result] = await pool.execute(
            `INSERT INTO menu (name, description, calory, carbo, protein, fat, vitamin, allergic, sodium) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                menuName,
                description,
                calories,
                carbs,
                protein,
                fat,
                JSON.stringify(vitamins),
                JSON.stringify(allergyInfo),
                sodium
            ]
        );
        
        console.log("Menu added to database:", menuName);
        return result;
    } catch (error) {
        console.error("Error adding menu to database:", error);
        throw error;
    }
};

//req.body.choice
export const recommendMenu = async (choice) => {
    try {
        console.log("Received request for GPT processing");

        const openai = new OpenAI({
            apiKey: key
        });
        console.log("OpenAI client initialized successfully");

        const { meal_time, purpose, mood, with: withWhom, budget } = choice;

        // bigint -> 자연어 매핑
        const mealTimeText = {
            1: "아침 식사: 속이 편한 음식, 자극적이지 않고 간단한 조리 가능",
            2: "점심 식사: 활동을 위한 에너지를 줄 수 있는 한 끼 식사",
            3: "저녁 식사: 가족이나 친구와 함께 먹기 좋은 따뜻한 요리, 포만감 높은 식사",
            4: "야식: 부담이 적고 간편하거나 입맛 당기는 음식"
        }[meal_time] || "식사";

        const purposeText = {
            1: "든든한 한끼 식사: 국, 찌개 혹은 단일 고열량 식사 ",
            2: "술 안주 겸: 짭조름하거나 자극적인 음식, 소스가 강하거나 튀김류",
            3: "간식: 양이 적거나 간편식, 디저트류 ",
            4: "기념일 식사: 예쁘거나 고급진 느낌, 공유하기 좋은 메뉴 ",
        }[purpose] || "";

        const moodText = {
            1: "들뜨고 신나요 : 새롭거나 특이한 메뉴, 강한 자극을 줄 수 있는 음식",
            2: "지치고 피곤해요 : 따뜻하거나 국물이 있는 음식, 속 편한 식사",
            3: "슬프고 울적해요 : 부드럽고 달달하고, 자극적인 음식",
            4: "화나고 답답해요 : 매운 음식, 자극적인 음식",
        }[mood] || "";


        const withText = {
            1: "혼자 : 1인분으로 즐기기 쉬운 음식, 단일메뉴",
            2: "연인 : 비주얼 좋고 나눠먹기 좋은 메뉴",
            3: "친구들 : 공유 가능한 양 많거나 취향 다양한 메뉴",
            4: "가족들 : 따뜻하고 밥반찬 구성"
        }[withWhom] || "";
        

        const budgetText = {
            1 : "1만원 미만 : 분식, 편의점, 간단한 한 끼",
            2 : "1만 원 ~ 3만 원 : 보통 외식 1~2인 기준",
            3 : "3만 원 초과 : 다인용 세트, 고급 메뉴",
        }[budget] || "";
        console.log("Meal Time:", mealTimeText);
        console.log("Purpose:", purposeText);  
        console.log("Mood:", moodText);
        console.log("With:", withText);
        console.log("Budget:", budgetText);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [
                {
                    role: "user",
                    content: `그 동안 나온거 제외하고 한 끼 식사 메뉴 하나를 추천해줘.
                        다음은 메뉴 추천을 할 때 참고할 정보들이야.
                        식사 시간: ${mealTimeText}
                        목적: ${purposeText}
                        기분: ${moodText}
                        함께하는 사람: ${withText}
                        예산: ${budgetText}
                        각각의 정보들에 딱 들어 맞을 필요까지는 없지만, 최대한 참고해줘.
                        그리고 추천해 줄 때 메뉴명을 띄어쓰기 없는 간결한 단어로 말해줘야해.
                        ex) 한우 숙성 꽃등심 스테이크는 적절하지 않고, 스테이크는 맞아.
                        ex) 비리아 타코는 적절하지 않고, 타코는 맞아.
                        또, 카카오 맵에 검색했을 때 나오는 메뉴 이름이면 가산점이야.
                        추천할 때 아래 형식의 JSON으로 답해줘(마크다운 없이):
                        {
                            "menu": "짜장면",
                            "description": "간장 소스로 볶은 중화풍 면 요리",
                            "calories": 800,
                            "carbohydrates": 90,
                            "protein": 20,
                            "fat": 30,
                            "sodium": 1200,
                            "vitamins": ["A", "B1", "B2", "C"],
                            "allergies": ["밀", "대두"]
                        }
                            `
                },
            ],
        });

        const rawText = completion.choices[0].message.content;

        const parsed = JSON.parse(rawText);
        const menuName = parsed.menu;
        const description = parsed.description;
        const calories = parsed.calories;
        const carbs = parsed.carbohydrates;
        const protein = parsed.protein;
        const fat = parsed.fat;
        const sodium = parsed.sodium;
        const vitamins = parsed.vitamins;
        const allergyInfo = parsed.allergies;


        // 데이터베이스에 메뉴가 존재하는지 확인
        const menuExists = await checkMenuExists(menuName);

        // 메뉴가 존재하지 않으면 데이터베이스에 추가
        if (!menuExists) {
            await addMenuToDatabase({
                menuName,
                description,
                calories,
                carbs,
                protein,
                fat,
                sodium,
                vitamins,
                allergyInfo
            });
        } else {
            console.log(`Menu already exists in the database: ${menuName}`);
        }

        return {
            menuName,
            description,
            calories,
            carbs,
            protein,
            fat,
            sodium,
            vitamins,
            allergyInfo
        };
    } catch (error) {
        console.error("Error handling GPT request:", error);
        throw error;
    }
}