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
      ],
    );

    console.log("Menu added to database:", menuName);
    return result;
  } catch (error) {
    console.error("Error adding menu to database:", error);
    throw error;
  }
};

//req.body.choice

//request body 예시
// {
// "meal_time" : 3,
// "purpose" : 3,
// "mood" : 3,
// "with" : 1,
// "budget" : 1,
// "exceptions" : ["중식", "면"],
// "gender" : 1,
// "exercise" : 3,
// "prefer" : ["한식","양식"],
// "body_type" : 4,
// "allergy" : ["갑각류"]
// "weather" : "맑음"
// }
const menuList = `메뉴 리스트 : 
초코무스
불고기
리조토
라면
라멘
토마토 파스타
까르보나라 파스타
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
카레라이스
김밥
잡채
새우튀김
칼국수
삼겹살
닭갈비
해물파전
김치전
감자탕
동태찌개
설렁탕
청국장
닭도리탕
닭강정
참치마요덮밥
크림떡볶이
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
LA 갈비
바베큐 폭립
초밥
오코노미야끼
텐동
후토마끼
사케동
규동
마제소바
냉모밀
카이센동
사시미
짜장면
짬뽕
마라탕
칠리새우
딤섬
탕수육
팔보채
유산슬
훠궈
치킨
돈까스
장어
회
족발
보쌈
수육
랍스터구이
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
연어 샐러드
훈제오리
닭가슴살 샐러드
샌드위치
오트밀죽
프렌치토스트
고로케
팬케이크
치즈케이크
티라미수
베이글
그릭요거트
팥빙수`;

export const findRelatedMenu = async (menuName) => {
  const openai = new OpenAI({
    apiKey: key,
  });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "user",
        content: `다음 메뉴와 관련된 메뉴를 추천해줘. 
                        메뉴 이름: ${menuName}
                        해당 메뉴 이름은 현재 구글 맵에서 관련된 음식점을 찾을 수 없는 메뉴 이름이야.
                        따라서 구글맵에 검색했을 때 음식점이 나올만한 메뉴 중 일반적인 메뉴 한개를 응답해주면 돼.
                        그냥 단어 한개만 응답하면돼.
                        `,
      },
    ],
  });
  const rawText = completion.choices[0].message.content.trim();
  console.log("Raw response from GPT:", rawText);
  return rawText;
};

export const recommendRandom = async (addition) => {
  try {
    const openai = new OpenAI({
      apiKey: key,
    });
    console.log("OpenAI client initialized successfully");
    // 사용자 정보 가져오기

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
                            "menu": "짜장면",
                        }
                         
                            `,
        },
      ],
    });

    const rawText = completion.choices[0].message.content.trim();

    // JSON 배열로 파싱
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

export const getMenu = async ({ menuId, limit }) => {
  const pageSize = Number.parseInt(limit, 10);
  const take = Number.isFinite(pageSize) ? pageSize + 1 : 16;

  const cursorId = Number.parseInt(menuId, 10);

  const isFirstPage =
    !menuId || menuId === "0" || !Number.isFinite(cursorId) || cursorId === 0;

  const query = {
    select: { id: true, name: true, image_link: true },
    take,
    ...(isFirstPage
      ? {}
      : {
          cursor: { id: cursorId },
          skip: 1,
        }),
  };

  const menus = await prisma.menu.findMany(query);

  return menus.map((menu) => ({
    id: menu.id.toString(),
    name: menu.name,
    image_link: menu.image_link,
  }));
};
