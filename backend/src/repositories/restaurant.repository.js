import dotenv from "dotenv";
import { prisma } from "../db.config.js";
dotenv.config();
import { OpenAI } from "openai";
import { error } from "console";

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
      "X-Goog-FieldMask":
        "places.displayName,places.formattedAddress,places.id,places.rating,places.userRatingCount",
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
};

