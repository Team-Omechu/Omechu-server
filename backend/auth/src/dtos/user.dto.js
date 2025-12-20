export const bodyToUserInfo = (body, userId) => {
  const user = {
    nickname: body.nickname,
    profileImageUrl: body.profileImageUrl,
    body_type: convertBodyTypeToEnum(body.body_type),
    exercise: convertExerciseToEnum(body.exercise),
    gender: convertGenderToEnum(body.gender),
  };

  return user;
};

export const responseFromUser = (user) => {
  const prefer = user.prefer || [];
  const allergy = user.allergy || [];

  const preferCategories = prefer.map((p) => convertPrefer(p.prefer));
  const allergyTypes = allergy.map((a) => convertAllergy(a.allergy));

  return {
    email: user.email,
    nickname: user.nickname,
    profileImageUrl: user.profileImageUrl,
    gender: convertGender(user.gender),
    body_type: convertBodyType(user.body_type),
    exercise: convertExercise(user.exercise),
    prefer: preferCategories,
    allergy: allergyTypes,
  };
};

// 프론트에서 한국어 라벨을 보낼 때, Prisma enum 값으로 변환
export function convertPreferToEnum(preferKo) {
  const map = {
    한식: "korean",
    양식: "western",
    중식: "chinese",
    일식: "japanese",
    다른나라: "other",
    "다른나라 음식": "other",
  };
  return map[preferKo] ?? null;
}

export function convertAllergyToEnum(allergyKo) {
  const map = {
    "달걀(난류) 알레르기": "egg",
    "우유 알레르기": "milk",
    "갑각류 알레르기": "shellfish",
    "해산물 알레르기": "seafood",
    "견과류 알레르기": "nuts",
  };
  return map[allergyKo] ?? null;
}

function convertGenderToEnum(gender) {
  const map = {
    남성: "male",
    여성: "female",
  };
  return map[gender] ?? null;
}

function convertExerciseToEnum(exercise) {
  const map = {
    "다이어트 중": "dieting",
    "증량 중": "bulking",
    "유지 중": "maintaining",
  };
  return map[exercise] ?? null;
}

function convertBodyTypeToEnum(type) {
  const map = {
    감기: "cold",
    소화불량: "indigestion",
    더위잘탐: "heat_sensitive",
    추위잘탐: "cold_sensitive",
  };
  return map[type] ?? null;
}

function convertGender(gender) {
  const map = {
    male: "남성",
    female: "여성",
  };
  return map[gender] ?? gender;
}

function convertExercise(ex) {
  const map = {
    dieting: "다이어트 중",
    bulking: "증량 중",
    maintaining: "유지 중",
  };
  return map[ex] ?? ex;
}

function convertBodyType(type) {
  const map = {
    cold: "감기",
    indigestion: "소화불량",
    heat_sensitive: "더위잘탐",
    cold_sensitive: "추위잘탐",
  };
  return map[type] ?? type;
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

function convertAllergy(allergy) {
  const map = {
    egg: "달걀(난류) 알레르기",
    milk: "우유 알레르기",
    shellfish: "갑각류 알레르기",
    seafood: "해산물 알레르기",
    nuts: "견과류 알레르기",
  };
  return map[allergy] ?? allergy;
}
