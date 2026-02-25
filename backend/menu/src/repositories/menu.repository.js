import { OpenAI } from "openai";
import dotenv from "dotenv";
import { pool } from "../db.config.js";
import { prisma } from "../db.config.js";
// import {
//   getUserInfoForMenu,
//   getUserAllergies,
//   getUserExceptedMenus,
//   getUserPreferences,
// } from "./user.repository.js"; // 이거를 못씀
dotenv.config();
const key = process.env.OPENAI_API_KEY;

// 메뉴가 데이터베이스에 존재하는지 확인
export const checkMenuExists = async (menuName) => {
  if (menuName === undefined || menuName === null) {
    console.error("Menu name is undefined or null");
    return true;
  }
  try {
    const [rows] = await pool.execute("SELECT * FROM menu WHERE name = ?", [
      menuName,
    ]);
    return rows.length > 0;
  } catch (error) {
    console.error("Error checking menu existence:", error);
    throw error;
  }
};

// 새로운 메뉴를 데이터베이스에 추가
export const addMenuToDatabase = async (menuData) => {
  try {
    console.log("Adding menu to database:", menuData);
    const {
      menuName,
      description,
      calories,
      carbs,
      protein,
      fat,
      sodium,
      vitamins,
      allergyInfo,
    } = menuData;

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
        sodium,
      ]
    );

    console.log("Menu added to database:", menuName);
    return result;
  } catch (error) {
    console.error("Error adding menu to database:", error);
    throw error;
  }
};

const menuList = `메뉴 리스트 : 
불고기
리조또
라면
라멘
김치볶음밥
콩나물국밥
마카롱
햄버거
비빔국수
냉면
우동
야끼소바
떡볶이
순대국
제육볶음
김치찌개
된장찌개
부대찌개
순두부찌개
갈비탕
삼계탕
해물찜
카레
김밥
잡채밥
새우튀김
칼국수
삼겹살
닭갈비
파전
김치전
감자탕
설렁탕
닭도리탕
닭강정
막국수
오므라이스
비빔밥
낙지볶음
닭발
만두
샤브샤브
스테이크
함박스테이크
감바스
초밥
오코노미야키
텐동
사케동
규동
마제소바
냉모밀
카이센동
사시미
짜장면
짬뽕
마라탕
딤섬
탕수육
훠궈
치킨
돈까스
장어덮밥
회
족발
보쌈
피자
쌀국수
팟타이
타코
똠얌꿍
나시고랭
케밥
분짜
커리
포케
훈제오리
샌드위치
팬케이크
티라미수
베이글
그릭요거트
팥빙수
샐러드
브런치
`;

export const recommendMenu = async (choice, userId) => {
  try {
    console.log("Received request for GPT processing");

    const openai = new OpenAI({
      apiKey: key,
    });
    console.log("OpenAI client initialized successfully");

    const {
      meal_time,
      purpose,
      mood,
      with: withWhom,
      budget,
      exceptions,
      exceptions2,
      gender,
      exercise,
      prefer,
      body_type,
      allergy,
    } = choice;
    console.log("Received choice data:", choice);

    const mealTimeText =
      {
        1: "아침 식사: 속이 편한 음식, 자극적이지 않고 간단한 조리 가능",
        2: "점심 식사: 활동을 위한 에너지를 줄 수 있는 먹을거",
        3: "저녁 식사: 포만감 높은 먹을거",
        4: "야식: 부담이 적고 간편하거나 입맛 당기는 음식",
      }[meal_time] || "상관 없음";

    const purposeText =
      {
        1: "든든한 한끼 식사: 국, 찌개 혹은 단일 고열량 식사 ",
        2: "술 안주 겸: 짭조름하거나 자극적인 음식, 소스가 강하거나 튀김류",
        3: "간식: 양이 적거나 간편식, 디저트류 ",
        4: "기념일 식사: 예쁘거나 고급진 느낌, 공유하기 좋은 메뉴 ",
      }[purpose] || "상관 없음";

    const moodText =
      {
        1: "들뜨고 신나요 : 새롭거나 특이한 메뉴, 강한 자극을 줄 수 있는 음식",
        2: "지치고 피곤해요 : 따뜻하거나 국물이 있는 음식, 속 편한 음식",
        3: "그냥 그래요 : 무난하고 익숙한 음식",
        4: "우울하거나 스트레스받아요 : 달거나 자극적인 음식, 기분 전환이 되는 메뉴",
      }[mood] || "상관 없음";

    const withText =
      {
        1: "혼자: 1인분, 간편한 음식",
        2: "친구와 함께: 공유하기 좋은 음식, 다양한 메뉴",
        3: "연인과 함께: 분위기 좋은 음식, 고급진 메뉴",
        4: "가족과 함께: 다양한 연령대가 즐길 수 있는 음식",
      }[withWhom] || "상관 없음";

    const budgetText =
      {
        1: "1만원 이하: 저렴한 음식",
        2: "1만원 ~ 2만원: 중간 가격대",
        3: "2만원 ~ 3만원: 약간 고급진 음식",
        4: "3만원 이상: 고급 음식",
      }[budget] || "상관 없음";

    const exceptionsText =
      exceptions && exceptions.length > 0
        ? exceptions.join(", ")
        : "없음";

    const exceptions2Text =
      exceptions2 && exceptions2.length > 0
        ? exceptions2.join(", ")
        : "없음";

    const genderText =
      {
        1: "남성",
        2: "여성",
        3: "상관 없음",
      }[gender] || "상관 없음";

    const exerciseText =
      {
        1: "다이어트 중: 저칼로리, 저지방 음식 선호",
        2: "증량 중: 고칼로리, 고단백 음식 선호",
        3: "유지 중: 균형 잡힌 음식",
      }[exercise] || "상관 없음";

    const preferText =
      prefer && prefer.length > 0 ? prefer.join(", ") : "없음";

    const bodyTypeText =
      {
        1: "마름",
        2: "보통",
        3: "통통",
        4: "뚱뚱",
        5: "상관 없음",
      }[body_type] || "상관 없음";

    const allergyText =
      allergy && allergy.length > 0 ? allergy.join(", ") : "없음";

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      store: true,
      messages: [
        {
          role: "user",
          content: `다음 조건에 맞는 메뉴를 추천해줘.
                    식사 시간: ${mealTimeText}
                    식사 목적: ${purposeText}
                    현재 기분: ${moodText}
                    함께하는 사람: ${withText}
                    예산: ${budgetText}
                    제외할 카테고리: ${exceptionsText}
                    제외할 메뉴: ${exceptions2Text}
                    성별: ${genderText}
                    운동 상태: ${exerciseText}
                    선호 음식: ${preferText}
                    체형: ${bodyTypeText}
                    알레르기: ${allergyText}

                    (중요)추천은 다음 목록 안에서 이루어져야해.
                    (중요)다음 리스트의 메뉴 이름을 그대로 사용해줘.
                    ${menuList}
                    추천할 때 아래 형식의 JSON으로 3개의 메뉴를 배열로 답해줘(마크다운 없이):
                    [
                      {"menu": "짜장면"},
                      {"menu": "김치찌개"},
                      {"menu": "비빔밥"}
                    ]`,
        },
      ],
    });

    const rawText = completion.choices[0].message.content.trim();
    const menus = JSON.parse(rawText);
    console.log("menus in repository : ", menus);

    const menusWithImages = await Promise.all(
      menus.map(async (item) => {
        const menuData = await prisma.menu.findFirst({
          where: { name: item.menu },
          select: { image_link: true },
        });
        return {
          menu: item.menu,
          image_link: menuData?.image_link || null,
        };
      })
    );

    console.log("Menus with images:", menusWithImages);
    return menusWithImages;
  } catch (error) {
    console.error("Error handling GPT request:", error);
    throw error;
  }
};

export const recommendRandom = async (addition) => {
  try {
    const openai = new OpenAI({
      apiKey: key,
    });
    console.log("OpenAI client initialized successfully");

    const additionString =
      addition && addition.length > 0 ? addition.join(", ") : "없음";
    console.log("additionString:", additionString);

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      store: true,
      messages: [
        {
          role: "user",
          content: `이전 질문과 전전 질문에서 나온거 제외하고 다음 104개의 메뉴 중 하나를 랜덤으로 추천해줘.
                        (중요)현재 사용자가 원하는 키워드와 연관된 메뉴를 랜덤적으로! 추천해줘 : 
                        [${additionString}]

                        (중요)추천은 다음 목록 안에서 이루어져야해.
                        (중요)다음 리스트의 메뉴 이름을 그대로 사용해줘.
                        ${menuList}
                        추천할 때 아래 형식의 JSON으로 1개의 메뉴를 1개의 json 으로 답해줘(마크다운 없이):
                        {
                            "menu": "짜장면"
                        }`,
        },
      ],
    });

    const rawText = completion.choices[0].message.content.trim();
    const menu = JSON.parse(rawText);
    console.log("menu in repository : ", menu);

    const menuData = await prisma.menu.findFirst({
      where: { name: menu.menu },
      select: { image_link: true },
    });

    const menuWithImage = {
      name: menu.menu,
      image_link: menuData?.image_link || null,
    };

    console.log("Menu with image:", menuWithImage);
    return menuWithImage;
  } catch (error) {
    console.error("Error handling GPT request:", error);
    throw error;
  }
};

export const getMenuInfo = async (menuName) => {
  try {
    console.log("Fetching menu info for:", menuName);
    const menuInfo = await prisma.menu.findFirst({
      where: { name: menuName },
      select: {
        name: true,
        description: true,
        calory: true,
        carbo: true,
        protein: true,
        fat: true,
        sodium: true,
        image_link: true,
      },
    });

    if (!menuInfo) {
      console.error(`No menu info found for: ${menuName}`);
      return null;
    }

    // BigInt → Number 변환
    for (const key of ["calory", "carbo", "protein", "fat", "sodium"]) {
      if (menuInfo[key] !== null && menuInfo[key] !== undefined) {
        menuInfo[key] = Number(menuInfo[key]);
      }
    }

    console.log("Menu info fetched successfully:", menuInfo);
    return menuInfo;
  } catch (error) {
    console.error(`Error fetching menu info for ${menuName}:`, error);
    throw error;
  }
};

export const getMenu = async () => {
  try {
    const menus = await prisma.menu.findMany({
      select: {
        id: true,          // ← 수정: id 추가
        name: true,
        image_link: true,
      },
    });
    if (!menus || menus.length === 0) {
      console.error("No menus found");
      return [];
    }
    // ← 수정: BigInt id → String 직렬화
    return menus.map((m) => ({
      id: m.id.toString(),
      name: m.name,
      image_link: m.image_link,
    }));
  } catch (error) {
    console.error("Error fetching menus:", error);
    throw error;
  }
};