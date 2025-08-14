import { prisma } from "../db.config.js";
export const searchRestaurant = async (
  menu,
  location,
  tag,
  userId,
  role,
  cursor,
  limit
) => {
  //메뉴가 빈배열이면 null로 변경
  if (Array.isArray(menu) && menu.length === 0) {
    menu = null;
  }
  const isFirstPage = cursor == 0;
  let restData;
  let hasNextPage;
  let lastData;
  let nextCursor;
  let sliceRestData;
  const locationFilters = Array.isArray(location)
    ? location?.map((loc) => ({
        location: { contains: loc },
      }))
    : [
        {
          location: { contains: location },
        },
      ];
  const tagFilters = Array.isArray(tag)
    ? tag.map((cat) => ({
        tag: { contains: cat },
      }))
    : [
        {
          tag: { contains: tag },
        },
      ];
  if (role === "guest") {
    restData = await prisma.restaurant.findMany({
      select: {
        id: true,
        rest_image: true,
        name: true,
        address: true,
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
      where: {
        AND: [
          tagFilters.length > 1
            ? {
                rest_tag: {
                  some: {
                    OR: tagFilters,
                  },
                },
              }
            : tagFilters.length > 0
            ? {
                rest_tag: {
                  some: {
                    tag: tagFilters[0].tag,
                  },
                },
              }
            : {},
          menu
            ? {
                repre_menu: {
                  some: {
                    menu: {
                      contains: menu,
                    },
                  },
                },
              }
            : {},
          location.length > 0 ? { OR: locationFilters } : {},
        ],
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
      where: {
        AND: [
          tagFilters.length > 1
            ? {
                rest_tag: {
                  some: {
                    OR: tagFilters,
                  },
                },
              }
            : tagFilters.length > 0
            ? {
                rest_tag: {
                  some: {
                    tag: tagFilters[0].tag,
                  },
                },
              }
            : {},
          menu
            ? {
                repre_menu: {
                  some: {
                    menu: {
                      contains: menu,
                    },
                  },
                },
              }
            : {},
          location.length > 0 ? { OR: locationFilters } : {},
        ],
      },
      take: limit + 1,
      ...(isFirstPage ? {} : { cursor: { id: BigInt(cursor) }, skip: 1 }),
    });
  }
  console.log("newRestData", restData);
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
