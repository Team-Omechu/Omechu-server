import { prisma } from "../db.config.js";

export const getRestData = async (userId, role, cursor, limit) => {
  const isFirstPage = cursor == 0;
  let restData;
  let hasNextPage;
  let lastData;
  let nextCursor;
  let sliceRestData;
  if (role === "guest") {
    restData = await prisma.restaurant.findMany({
      select: {
        id: true,
        rest_image: true,
        name: true,
        address: true,
        address_jibeon: true,
        rating: true,
        google_place_id: true,
        rest_tag: {
          select: { tag: true, count: true },
          take: 3,
          orderBy: { count: "desc" },
        },
        repre_menu: {
          select: { menu: true },
        },
        _count: {
          select: { review: true },
        },
      },
      take: limit + 1,
      ...(isFirstPage ? {} : { cursor: { id: BigInt(cursor) }, skip: 1 }),
    });
  } else {
    restData = await prisma.restaurant.findMany({
      select: {
        id: true,
        rest_image: true,
        name: true,
        address: true,
        address_jibeon: true,
        rating: true,
        google_place_id: true,
        rest_tag: {
          select: { tag: true, count: true },
          take: 3,
          orderBy: { count: "desc" },
        },
        repre_menu: {
          select: { menu: true },
        },
        zzim: {
          select: { id: true, rest_id: true },
          where: { user_id: userId },
        },
        _count: {
          select: { review: true },
        },
      },
      take: limit + 1,
      ...(isFirstPage ? {} : { cursor: { id: BigInt(cursor) }, skip: 1 }),
    });
  }
  if (restData.length == 0) {
    return { error: "NO_DATA" };
  }
  if (role === "guest") {
    hasNextPage = restData.length > limit;
    lastData = hasNextPage
      ? restData[limit - 1].id.toString()
      : restData[restData.length - 1]?.id.toString();
    nextCursor = hasNextPage ? lastData : null;
    sliceRestData = restData.slice(0, limit).map((rest) => ({
      ...rest,
      id: rest.id.toString(),
    }));
  } else {
    const newRestData = restData.map((data) => {
      return { ...data, zzim: data.zzim.length > 0 };
    });

    hasNextPage = newRestData.length > limit;
    lastData = hasNextPage
      ? newRestData[limit - 1].id.toString()
      : newRestData[newRestData.length - 1]?.id.toString();
    nextCursor = hasNextPage ? lastData : null;
    sliceRestData = newRestData.slice(0, limit).map((rest) => ({
      ...rest,
      id: rest.id.toString(),
    }));
  }
  console.log(sliceRestData);

  const finalRestData = await Promise.all(
    sliceRestData.map(async (data) => {
      // place id 없으면 그대로 반환
      if (data.google_place_id === null) return data;

      const url = `https://places.googleapis.com/v1/places/${data.google_place_id}?languageCode=ko`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
          "X-Goog-FieldMask":
            "rating,formattedAddress,displayName,addressComponents,location,postalAddress",
        },
      });

      if (!response.ok) {
        console.error("Google Places API 요청 실패:", response.statusText);
        // 실패해도 원본 data 유지
        return data;
      }

      const json = await response.json();
      const newUrl = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${json.location.longitude}&y=${json.location.latitude}`;

      const responseData = await fetch(newUrl, {
        method: "GET",
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
        },
      });
      const roadData = await responseData.json();
      console.log("road_address", roadData.documents[0]);
      const merged = {
        ...data,
        ...(json.rating !== undefined ? { rating: json.rating } : {}),
        ...(roadData.documents[0].road_address
          ? {
              address: roadData.documents[0].road_address.address_name,
            }
          : {}),
        ...(roadData.documents[0].address
          ? { address_jibeon: roadData.documents[0].address.address_name }
          : {}),
        ...(json.displayName.text ? { name: json.displayName.text } : {}),
      };
      return merged;
    })
  );
  console.log("finalRestData", finalRestData);
  return {
    restData: finalRestData,
    hasNextPage: hasNextPage,
    nextCursor: nextCursor,
  };
};
