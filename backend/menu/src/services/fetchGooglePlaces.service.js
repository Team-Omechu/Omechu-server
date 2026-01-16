import { fetchGooglePlaces } from "../repositories/fetchGooglePlaces.repository.js";

// priceLevel을 가격대 범위로 변환
const convertPriceLevelToRange = (priceLevel) => {
  const priceLevelMap = {
    PRICE_LEVEL_FREE: "무료",
    PRICE_LEVEL_INEXPENSIVE: "5,000~10,000",
    PRICE_LEVEL_MODERATE: "10,000~20,000",
    PRICE_LEVEL_EXPENSIVE: "20,000~40,000",
    PRICE_LEVEL_VERY_EXPENSIVE: "40,000~",
  };
  
  return priceLevelMap[priceLevel] || "가격대 정보 없음";
};

// primaryType을 한국어로 변환
const convertPrimaryTypeToKorean = (primaryType) => {
  const primaryTypeMap = {
    // 한식
    korean_restaurant: "한식",
    
    // 중식
    chinese_restaurant: "중식",
    
    // 일식
    japanese_restaurant: "일식",
    sushi_restaurant: "초밥",
    ramen_restaurant: "라멘",
    
    // 양식
    italian_restaurant: "이탈리안",
    french_restaurant: "프렌치",
    spanish_restaurant: "스페인",
    greek_restaurant: "그릭",
    turkish_restaurant: "터키",
    mediterranean_restaurant: "지중해",
    
    // 미식
    american_restaurant: "아메리칸",
    hamburger_restaurant: "버거",
    steak_house: "스테이크 하우스",
    
    // 아시아 요리
    thai_restaurant: "태국 요리",
    vietnamese_restaurant: "베트남 요리",
    indian_restaurant: "인도 요리",
    indonesian_restaurant: "인도네시아 요리",
    lebanese_restaurant: "레바논 요리",
    middle_eastern_restaurant: "중동 요리",
    
    // 멕시코/라틴 요리
    mexican_restaurant: "멕시칸",
    brazilian_restaurant: "브라질 요리",
    
    // 특식
    seafood_restaurant: "해산물 요리",
    african_restaurant: "아프리카 요리",
    asian_restaurant: "아시안 요리",
    bangladeshi_restaurant: "방글라데시 요리",
    
    // 카페/베이커리
    cafe: "카페",
    coffee_shop: "커피숍",
    bakery: "베이커리",
    bagel_shop: "베이글 카페",
    donut_shop: "도넛 가게",
    
    // 식사 관련
    restaurant: "음식점",
    fast_food_restaurant: "패스트푸드",
    deli: "델리",
    diner: "다이너",
    food_court: "푸드코트",
    bar_and_grill: "바 앤 그릴",
    brunch_restaurant: "브런치 카페",
    breakfast_restaurant: "아침식사",
    buffet_restaurant: "뷔페",
    dessert_restaurant: "디저트",
    pizza_restaurant: "피자",
    sandwich_shop: "샌드위치",
    ice_cream_shop: "아이스크림",
    tea_house: "찻집",
    pub: "펍",
    bar: "술집",
    
    // 기타 식음료
    chocolate_shop: "초콜릿 가게",
    candy_store: "사탕 가게",
    juice_shop: "주스바",
    meal_takeaway: "포장음식점",
    meal_delivery: "배달음식",
  };
  
  return primaryTypeMap[primaryType] || primaryType;
};

// 두 좌표 간의 거리를 미터로 계산 (Haversine 공식)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371000; // 지구의 반지름 (미터)
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c); // 미터 단위로 반올림
};

export const fetchGooglePlacesService = async (info) => {
  console.log("Service called with info:", info);
  const response = await fetchGooglePlaces({ info });
  console.log("Fetched places from service:", response.places);
  if (!response || !response.places || response.places.length === 0) {
    return {
      page: 1,
      pageSize: 3,
      totalCount: 0,
      totalPages: 0,
      items: [],
    };
  }

  // 각 장소의 사진 배열에서 첫 번째 사진만 반환하고 priceLevel과 primaryType을 변환
  const placesWithFirstPhoto = response.places.map(place => {
    const { photos, ...placeWithoutPhotos } = place;
    const result = {
      ...placeWithoutPhotos,
      primaryType: convertPrimaryTypeToKorean(place.primaryType),
      priceLevel: convertPriceLevelToRange(place.priceLevel),
      photo: photos && photos.length > 0 ? photos[0] : null
    };

    // 요청에 latitude, longitude가 있으면 거리 계산
    if (info.latitude && info.longitude && place.location) {
      result.distance = calculateDistance(
        info.latitude,
        info.longitude,
        place.location.latitude,
        place.location.longitude
      );
    }

    return result;
  });

  // 거리순으로 정렬 (거리가 없는 경우 맨 뒤로)
  placesWithFirstPhoto.sort((a, b) => {
    if (a.distance === undefined && b.distance === undefined) return 0;
    if (a.distance === undefined) return 1;
    if (b.distance === undefined) return -1;
    return a.distance - b.distance;
  });

  // --- 3개 단위 페이지네이션 적용 ---
  const FIXED_PAGE_SIZE = 3;
  const requestedPage = parseInt(info.page, 10) || 1;

  const totalCount = placesWithFirstPhoto.length;
  const totalPages = totalCount === 0 ? 0 : Math.ceil(totalCount / FIXED_PAGE_SIZE);

  // 범위를 벗어난 페이지는 빈 배열을 반환하되 메타 정보는 유지
  if (requestedPage < 1 || requestedPage > totalPages) {
    return {
      page: requestedPage,
      pageSize: FIXED_PAGE_SIZE,
      totalCount,
      totalPages,
      items: [],
    };
  }

  const startIndex = (requestedPage - 1) * FIXED_PAGE_SIZE;
  const endIndex = startIndex + FIXED_PAGE_SIZE;
  const paginatedItems = placesWithFirstPhoto.slice(startIndex, endIndex);

  return {
    page: requestedPage,
    pageSize: FIXED_PAGE_SIZE,
    totalCount,
    totalPages,
    items: paginatedItems,
  };
};
