import { OpenAI } from "openai";
import dotenv from "dotenv";
import { prisma } from "../db.config.js";
import {
	getUserInfoForMenu,
	getUserAllergies,
	getUserExceptedMenus,
	getUserPreferences,
} from "../repositories/user.repository.js";

dotenv.config();

const key = process.env.OPENAI_API_KEY;

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

export const recommendMenu = async (choice, userId) => {
	try {
		console.log("Received request for GPT processing");

		const openai = new OpenAI({
			apiKey: key,
		});
		console.log("OpenAI client initialized successfully");
		if (userId != undefined && userId != "") {
			choice.exceptions2 = await getUserExceptedMenus(userId);
			choice.allergy = await getUserAllergies(userId);
			choice.prefer = await getUserPreferences(userId);
			const userInfo = await getUserInfoForMenu(userId);

			choice.gender = userInfo.gender;
			choice.exercise = userInfo.exercise;
			choice.body_type = userInfo.body_type;
		} else {
			choice.exceptions2 = [];
			choice.allergy = [];
			choice.prefer = [];
			choice.gender = 3;
			choice.exercise = 3;
			choice.body_type = 5;
		}
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
				2: "지치고 피곤해요 : 따뜻하거나 국물이 있는 음식, 속 편한 식사",
				3: "슬프고 울적해요 : 부드럽고 달달하고, 자극적인 음식",
				4: "화나고 답답해요 : 매운 음식, 자극적인 음식",
			}[mood] || "상관 없음";

		const withText =
			{
				1: "혼자 : 1인분으로 즐기기 쉬운 음식, 단일메뉴",
				2: "연인 : 비주얼 좋고 나눠먹기 좋은 메뉴",
				3: "친구들 : 공유 가능한 양 많거나 취향 다양한 메뉴",
				4: "가족들 : 따뜻하고 밥반찬 구성",
			}[withWhom] || "상관 없음";

		const budgetText =
			{
				1: "0원 이상 1만원 미만",
				2: "1만원 이상 3만원 이하",
				3: "가격 제한 없음",
			}[budget] || "상관 없음";
		console.log("gender: ", gender);
		console.log("exercise: ", exercise);
		console.log("body_type: ", body_type);
		const genderText =
			{
				female: "여성",
				male: "남성",
			}[gender] || "정보 없음";

		const exerciseText =
			{
				dieting: "다이어트 중",
				bulking: "벌크업 중",
				maintaining: "상관 없음",
			}[exercise] || "정보 없음";

		const bodyTypeText =
			{
				cold: "감기에 잘 걸리는 편",
				indigestion: "소화가 잘 안 되는 편",
				heat_sensitive: "열이 많아서 더위를 잘 타는 편",
				cold_sensitive: "추위를 잘 타고 몸이 쉽게 차가워지는 편",
			}[body_type] || "정보 없음";

		console.log("Meal Time:", mealTimeText);
		console.log("Purpose:", purposeText);
		console.log("Mood:", moodText);
		console.log("With:", withText);
		console.log("Budget:", budgetText);
		console.log("Gender:", genderText);
		console.log("Exercise:", exerciseText);
		console.log("Body Type:", bodyTypeText);
		console.log("Exceptions:", exceptions);
		const exceptionsString =
			exceptions && exceptions.length > 0 ? exceptions.join(", ") : "없음";
		console.log("exceptionsString:", exceptionsString);
		const preferencesString =
			prefer && prefer.length > 0 ? prefer.join(", ") : "없음";
		console.log("preferencesString: ", preferencesString);
		const allergyString =
			allergy && allergy.length > 0 ? allergy.join(", ") : "없음";
		console.log("allergyString:", allergyString);

		const exceptedMenus2String =
			exceptions2 && exceptions2.length > 0
				? exceptions2.map((item) => item.name || item).join(", ")
				: "없음";
		console.log("exceptedMenus2String:", exceptedMenus2String);

		const completion = await openai.responses.create({
			model: "gpt-4.1",
			store: true,
			prompt: {
				id: "pmpt_689b3e9906e88196a3e8ebd71fbd9a9f0d5b975c1f5335da",
				version: "1",
			},
			input: `
			먹는 시간: ${mealTimeText}
목적: ${purposeText}
기분: ${moodText}
함께하는 사람: ${withText}
예산: ${budgetText}
제외하는 음식 종류: ${exceptionsString}
성별: ${genderText}
체중 증량, 감량 여부: ${exerciseText}
선호하는 음식 종류: ${preferencesString}
체질: ${bodyTypeText}
사용자의 알레르기: ${allergyString}
최근에 먹지 않을 메뉴: ${exceptedMenus2String}
현재 날씨: ${choice.weather}
메뉴 리스트: ${menuList}`,
		});
		console.log("GPT response received:", completion);
		const rawText =
			completion.output_text || completion.response || completion.content;

		const parsedArray = JSON.parse(rawText);
		const menuWithImages = await Promise.all(
			parsedArray.map(async (menuItem) => {
				try {
					const menuData = await prisma.menu.findFirst({
						where: { name: menuItem.menu },
						select: { image_link: true },
					});

					return {
						...menuItem,
						image_link: menuData?.image_link || null,
					};
				} catch (error) {
					console.error(
						`Error fetching image for menu ${menuItem.menu}:`,
						error
					);
					return {
						...menuItem,
						image_link: null,
					};
				}
			})
		);
		console.log("Menu with images:", menuWithImages);
		return menuWithImages;
	} catch (error) {
		console.error("Error handling GPT request:", error);
		throw error;
	}
};
