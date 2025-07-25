/**
 * 마이페이지 관련 DTO 함수들
 */

// 프로필 수정 요청 데이터 변환
export const bodyToProfileUpdate = (body, userId) => {
  return {
    userId: userId,
    email: body.email,
    phone_num: body.phone_num || body.phoneNumber,
    nickname: body.nickname,
    body_type: convertBodyTypeToInt(body.body_type), // 🔥 문자열을 숫자로 변환
    gender: convertGenderToInt(body.gender),        // 🔥 문자열을 숫자로 변환
    exercise: convertExerciseToInt(body.exercise || body.state), // 🔥 문자열을 숫자로 변환
    prefer: body.prefer,
    allergic: body.allergic || body.allergy,
    profileImageUrl: body.profileImageUrl
  };
};

// 프로필 응답 데이터 변환
export const responseFromProfile = (user) => {
  return {
    id: user.id.toString(),
    email: user.email,
    phone_num: user.phone_num,
    nickname: user.nickname,
    body_type: convertBodyType(user.body_type),
    gender: convertGender(user.gender),
    exercise: convertExercise(user.exercise),
    prefer: user.prefer,
    allergic: user.allergic,
    profileImageUrl: user.profileImageUrl,
    created_at: user.created_at,
    updated_at: user.updated_at
  };
};

// 맛집 정보 수정 요청 데이터 변환
export const bodyToRestaurantUpdate = (body, restaurantId, userId) => {
  return {
    restaurantId: restaurantId,
    userId: userId,
    name: body.name,
    location: body.location,
    address: body.address,
    rest_image: body.rest_image,
    // 요일별 영업시간
    monday: body.monday,
    tuesday: body.tuesday,
    wednesday: body.wednesday,
    thursday: body.thursday,
    friday: body.friday,
    saturday: body.saturday,
    sunday: body.sunday
  };
};

// 맛집 응답 데이터 변환
export const responseFromRestaurant = (restaurant) => {
  return {
    id: restaurant.id.toString(),
    name: restaurant.name,
    location: restaurant.location,
    address: restaurant.address,
    rest_image: restaurant.rest_image,
    rating: restaurant.rating,
    // 요일별 영업시간
    monday: restaurant.monday,
    tuesday: restaurant.tuesday,
    wednesday: restaurant.wednesday,
    thursday: restaurant.thursday,
    friday: restaurant.friday,
    saturday: restaurant.saturday,
    sunday: restaurant.sunday,
    google_place_id: restaurant.google_place_id
  };
};

// 찜 요청 데이터 변환
export const bodyToZzimRequest = (body) => {
  return {
    userId: body.userId,
    restaurantId: body.restaurantId || body.restId
  };
};

// 찜 응답 데이터 변환
export const responseFromZzim = (zzim) => {
  return {
    id: zzim.id.toString(),
    userId: zzim.user_id.toString(),
    restaurantId: zzim.rest_id.toString(),
    created_at: zzim.created_at,
    restaurant: zzim.restaurant ? responseFromRestaurant(zzim.restaurant) : null
  };
};

// 찜 목록 응답 데이터 변환
export const responseFromZzimList = (zzimList, hasNextPage, nextCursor) => {
  const transformedList = zzimList.map(zzim => responseFromZzim(zzim));
  
  return {
    data: transformedList,
    hasNextPage: hasNextPage,
    nextCursor: nextCursor
  };
};

// 맛집 목록 응답 데이터 변환
export const responseFromRestaurantList = (restaurants, hasNextPage, nextCursor) => {
  const transformedList = restaurants.map(restaurant => responseFromRestaurant(restaurant));
  
  return {
    data: transformedList,
    hasNextPage: hasNextPage,
    nextCursor: nextCursor
  };
};

// 🔥 새로 추가: 문자열을 숫자로 변환하는 함수들
function convertGenderToInt(gender) {
  if (typeof gender === 'number') return gender;
  const map = {
    "남성": 1,
    "여성": 2,
    "male": 1,
    "female": 2
  };
  return map[gender] ?? gender;
}

function convertExerciseToInt(exercise) {
  if (typeof exercise === 'number') return exercise;
  const map = {
    "다이어트 중": 1,
    "중량 중": 2,
    "유지 중": 3,
    "diet": 1,
    "bulk": 2,
    "maintain": 3
  };
  return map[exercise] ?? exercise;
}

function convertBodyTypeToInt(bodyType) {
  if (typeof bodyType === 'number') return bodyType;
  const map = {
    "감기": 1,
    "소화불량": 2,
    "더위잘탐": 3,
    "추위잘탐": 4,
    "cold": 1,
    "indigestion": 2,
    "heat_type": 3,
    "cold_type": 4
  };
  return map[bodyType] ?? bodyType;
}

// 기존 변환 함수들 (숫자를 문자열로)
function convertGender(gender) {
  const map = {
    1: "남성",
    2: "여성",
    "male": "남성",
    "female": "여성",
    "남성": "남성",
    "여성": "여성"
  };
  return map[gender] ?? gender;
}

function convertExercise(exercise) {
  const map = {
    1: "다이어트 중",
    2: "중량 중",
    3: "유지 중",
    "diet": "다이어트 중",
    "bulk": "중량 중",
    "maintain": "유지 중",
    "다이어트 중": "다이어트 중",
    "중량 중": "중량 중",
    "유지 중": "유지 중"
  };
  return map[exercise] ?? exercise;
}

function convertBodyType(bodyType) {
  const map = {
    1: "감기",
    2: "소화불량",
    3: "더위잘탐",
    4: "추위잘탐",
    "cold": "감기",
    "indigestion": "소화불량",
    "heat_type": "더위잘탐",
    "cold_type": "추위잘탐",
    "감기": "감기",
    "소화불량": "소화불량",
    "더위잘탐": "더위잘탐",
    "추위잘탐": "추위잘탐"
  };
  return map[bodyType] ?? bodyType;
}