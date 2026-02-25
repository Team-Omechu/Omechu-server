import { prisma } from "../db.config.js";

/**
 * 사용자의 추천 제외 menuId 목록 조회
 */
export const findUserExceptedMenuIds = async (userId) => {
  const rows = await prisma.recommend_except.findMany({
    where: {
      user_id: BigInt(userId),
    },
    orderBy: {
      id: "desc",
    },
  });

  return rows.map((row) => ({
    id: row.id.toString(),
    menuId: row.menu_id.toString(),
  }));
};

/**
 * 메뉴를 제외 목록에 추가
 */
export const addMenuToExceptList = async (userId, menuId) => {
  const existing = await prisma.recommend_except.findFirst({
    where: {
      user_id: BigInt(userId),
      menu_id: BigInt(menuId),
    },
  });

  if (existing) {
    return { isNew: false };
  }

  const created = await prisma.recommend_except.create({
    data: {
      user_id: BigInt(userId),
      menu_id: BigInt(menuId),
      bit: true,
    },
  });

  return {
    id: created.id.toString(),
    isNew: true,
  };
};

/**
 * 제외 목록에서 메뉴 제거
 */
export const removeMenuFromExceptList = async (userId, menuId) => {
  const deleted = await prisma.recommend_except.deleteMany({
    where: {
      user_id: BigInt(userId),
      menu_id: BigInt(menuId),
    },
  });

  return {
    success: deleted.count > 0,
  };
};
