import { prisma } from "../db.config.js";

export const findUserProfile = async (userId) => {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      prefer: true,
      user_allergy: {
        include: { allergy_min: true },
      },
    },
  });
};

// 프로필 수정
export const updateUserProfile = async (userId, data) => {
  console.log(data);
  const { prefer, allergy, ...userData } = data;
  return prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: userId },
      data: {
        ...(userData.nickname !== undefined && { nickname: userData.nickname }),
        ...(userData.exercise !== undefined && { exercise: userData.exercise }),
      },
    });

    if (prefer !== undefined) {
      await tx.prefer.deleteMany({ where: { user_id: userId } });
      if (prefer.length) {
        await tx.prefer.createMany({
          data: prefer.map((p) => ({ user_id: userId, prefer: p })),
        });
      }
    }

    if (allergy !== undefined) {
      await tx.user_allergy.deleteMany({ where: { user_id: userId } });

      if (allergy.length) {
        const allergyIds = await tx.allergy_min.findMany({
          where: { allergy: { in: allergy } },
          select: { id: true },
        });

        if (allergyIds.length !== allergy.length) {
          throw new Error("존재하지 않는 알레르기 값 포함");
        }

        await tx.user_allergy.createMany({
          data: allergyIds.map((a) => ({
            user_id: userId,
            allergy_id: a.id,
          })),
        });
      }
    }

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
