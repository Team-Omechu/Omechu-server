// profile/profile.repository.js

import { prisma } from "../db.config.js";

/**
 * 사용자 프로필 조회
 * @param {number} userId - 사용자 ID
 * @returns {Promise<Object>} 사용자 프로필 정보 (prefer, allergy 포함)
 */
export const findUserProfile = async (userId) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: {
      prefer: true,
      allergy: true,
    },
  });
};

/**
 * 사용자 프로필 수정
 * @param {number} userId - 사용자 ID
 * @param {Object} data - 수정할 데이터
 * @returns {Promise<Object>} 수정된 사용자 프로필
 */
export const updateUserProfile = async (userId, data) => {
  const { prefer, allergy, ...userData } = data;

  const updatedUser = await prisma.$transaction(async (tx) => {
    const user = await tx.user.update({
      where: { id: userId },
      data: {
        email: userData.email,
        nickname: userData.nickname,
        body_type: userData.body_type,
        gender: userData.gender,
        exercise: userData.exercise,
        profileImageUrl: userData.profileImageUrl,
      },
    });

    if (prefer && Array.isArray(prefer)) {
      await tx.prefer.deleteMany({
        where: { user_id: userId },
      });

      if (prefer.length > 0) {
        await tx.prefer.createMany({
          data: prefer.map((p) => ({
            user_id: userId,
            prefer: p,
          })),
        });
      }
    }

    if (allergy && Array.isArray(allergy)) {
      await tx.allergy.deleteMany({
        where: { user_id: userId },
      });

      if (allergy.length > 0) {
        await tx.allergy.createMany({
          data: allergy.map((a) => ({
            user_id: userId,
            allergy: a,
          })),
        });
      }
    }

    return await tx.user.findUnique({
      where: { id: userId },
      include: {
        prefer: true,
        allergy: true,
      },
    });
  });

  return updatedUser;
};