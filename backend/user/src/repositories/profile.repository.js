import { prisma } from "../db.config.js";

// ===== 조회 =====
export const findUserProfile = async (userId) => {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      prefer: true,
      user_allergy: {
        include: {
          allergy_min: true,
        },
      },
    },
  });
};

// ===== 수정 =====
export const updateUserProfile = async (userId, data) => {
  const { prefer, allergy, ...userData } = data;

  return prisma.$transaction(async (tx) => {
    // 1. user 테이블 업데이트
    await tx.user.update({
      where: { id: userId },
      data: {
        nickname: userData.nickname,
        exercise: userData.exercise,
      },
    });

    // 2. prefer
    if (prefer !== undefined) {
      await tx.prefer.deleteMany({ where: { user_id: userId } });

      if (prefer.length > 0) {
        await tx.prefer.createMany({
          data: prefer.map(p => ({
            user_id: userId,
            prefer: p,
          })),
        });
      }
    }

    // 3. allergy
    if (allergy !== undefined) {
      await tx.user_allergy.deleteMany({ where: { user_id: userId } });

      if (allergy.length > 0) {
        const allergyIds = await tx.allergy_min.findMany({
          where: { allergy: { in: allergy } },
          select: { id: true },
        });

        await tx.user_allergy.createMany({
          data: allergyIds.map(a => ({
            user_id: userId,
            allergy_id: a.id,
          })),
        });
      }
    }

    // 4. 최신 상태 반환
    return tx.user.findUnique({
      where: { id: userId },
      include: {
        prefer: true,
        user_allergy: {
          include: { allergy_min: true },
        },
      },
    });
  });
};
