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
  return {
    restData: sliceRestData,
    hasNextPage: hasNextPage,
    nextCursor: nextCursor,
  };
};
