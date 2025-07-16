import dotenv from "dotenv";
import { prisma } from "../db.config.js";
dotenv.config();




// {
// "y" : "37.4895246",
// "x" : "126.986331",
// "radius" : "3000",
// "keyword" : "아메리카노"
// }
export const fetchKakaoPlaces = async (info) => {
    console.log("Fetching places with info:", info);
    const url = new URL("https://dapi.kakao.com/v2/local/search/keyword.json");

    // GET 파라미터 설정
    url.searchParams.append("y", info.y);
    url.searchParams.append("x", info.x);
    url.searchParams.append("radius", info.radius);
    url.searchParams.append("query", info.keyword);
    console.log("Request URL:", url.toString());
    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
        },
    });
    console.log("Response status:", response.status);
    if (!response.ok) {
        console.error("API 요청 실패:", response.statusText);
        return;
    }
    const data = await response.json();
    return data;
};




export const fetchGooglePlaces = async ({ info }) => {
  const url = "https://places.googleapis.com/v1/places:searchText";

  const body = {
    textQuery: info.keyword,
    openNow: true,
    pageSize: info.pageSize,
    languageCode: "ko",
    locationBias: {
      circle: {
        center: { latitude: info.latitude, longitude: info.longitude },
        radius: info.radius,
      },
    },
  };

  const KEY = process.env.GOOGLE_MAPS_API_KEY;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": KEY,
      "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.regularOpeningHours",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.error(`API 요청 실패: ${response.status} ${response.statusText}`);
    const error = await response.text();
    console.error(error);
    return null;
  }

  const data = await response.json();
  console.log(data);
  return data;
}


export const addRestaurantToDatabase = async (restaurantData, keyword) => {
    try {
        const address = restaurantData.formattedAddress || "";
        const name = restaurantData.displayName.text || "";
        const repreMenu = keyword || "";
      //address 맨 앞에 "대한민국"이 붙어 있다면 제거
        const cleanedAddress = address.startsWith("대한민국") ? address.slice(5).trim() : address;

        const result = await prisma.restaurant.create({
            data: {
                name: name,
                address: cleanedAddress,
                repre_menu: repreMenu,
            },
        });

        console.log("Restaurant added to database:", name);
        return result;
    } catch (error) {
        console.error("Error adding restaurant to database:", error);
        throw error;
    }
}

// 레스토랑 이름이 존재하는 지 확인하는 함수
export const checkRestaurantExists = async (restaurantName) => {
    if (!restaurantName) {
        console.error("Restaurant name is undefined or null");
        return true;
    }
    try {
        const restaurant = await prisma.restaurant.findUnique({
            where: { name: restaurantName },
        });
        return !!restaurant; // 존재하면 true, 아니면 false
    } catch (error) {
        console.error("Error checking restaurant existence:", error);
        throw error;
    }
}