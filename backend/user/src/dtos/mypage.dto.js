import { InvalidProfileData } from "../errors.js";

// ===== 요청 DTO =====
export const bodyToProfileUpdate = (body, userId) => {
  const dto = { userId };

  if (body.nickname !== undefined) {
    dto.nickname = body.nickname;
  }

  if (body.exercise !== undefined) {
    const exerciseEnum = convertExerciseToEnum(body.exercise);
    if (!exerciseEnum) {
      throw new InvalidProfileData(
        "잘못된 운동 상태 값입니다.",
        body.exercise
      );
    }
    dto.exercise = exerciseEnum;
  }

  if (Array.isArray(body.prefer)) {
    dto.prefer = body.prefer
      .map(convertPreferToEnum)
      .filter(Boolean);
  }

  if (Array.isArray(body.allergy)) {
    dto.allergy = body.allergy
      .map(convertAllergyToEnum)
      .filter(Boolean);
  }

  return dto;
};

// ===== 응답 DTO =====
export const responseFromProfile = (user) => ({
  id: user.id.toString(),
  email: user.email,
  nickname: user.nickname,
  exercise: convertExercise(user.exercise),
  prefer: user.prefer?.map(p => convertPrefer(p.prefer)) ?? [],
  allergy: user.user_allergy
    ?.filter(ua => ua.allergy_min)
    .map(ua => convertAllergy(ua.allergy_min.allergy)) ?? [],
});

// ===== Enum 변환 =====
function convertExerciseToEnum(v) {
  return {
    "다이어트 중": "cutting",
    "증량 중": "bulking",
    "유지 중": "maintenance",
  }[v] ?? null;
}

function convertExercise(v) {
  return {
    cutting: "다이어트 중",
    bulking: "증량 중",
    maintenance: "유지 중",
  }[v] ?? v;
}


function convertPreferToEnum(prefer) {
  const map = {
    한식: "korean",
    양식: "western",
    중식: "chinese",
    일식: "japanese",
    다른나라: "other",
  };
  return map[prefer] ?? null;
}

function convertPrefer(prefer) {
  const map = {
    korean: "한식",
    western: "양식",
    chinese: "중식",
    japanese: "일식",
    other: "다른나라",
  };
  return map[prefer] ?? prefer;
}

function convertAllergyToEnum(allergy) {
  const map = {
    달걀: "egg",
    우유: "milk",
    메밀: "buckwheat",
    대두: "soy",
    밀: "wheat",
    땅콩: "peanut",
    호두: "walnut",
    잣: "pine_nut",
    돼지고기: "pork",
    소고기: "beef",
    닭고기: "chicken",
    고등어: "mackerel",
    새우: "shrimp",
    게: "crab",
    오징어: "squid",
    조개류: "shellfish",
    복숭아: "peach",
    토마토: "tomato",
    아황산류: "sulfite",
    그외: "other",
    "그 외": "other",
  };
  return map[allergy] ?? null;
}

function convertAllergy(allergy) {
  const map = {
    egg: "달걀",
    milk: "우유",
    buckwheat: "메밀",
    soy: "대두",
    wheat: "밀",
    peanut: "땅콩",
    walnut: "호두",
    pine_nut: "잣",
    pork: "돼지고기",
    beef: "소고기",
    chicken: "닭고기",
    mackerel: "고등어",
    shrimp: "새우",
    crab: "게",
    squid: "오징어",
    shellfish: "조개류",
    peach: "복숭아",
    tomato: "토마토",
    sulfite: "아황산류",
    other: "그 외",
  };
  return map[allergy] ?? allergy;
}
