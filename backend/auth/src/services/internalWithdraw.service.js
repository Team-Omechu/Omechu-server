import { prisma } from "../db.config.js";

export const internalWithdrawService = async (userId) => {
  if (!userId) {
    throw new Error("userId is required");
  }

  await prisma.auth_user.update({
    where: {
      id: BigInt(userId),
    },
    data: {
      is_deleted: true,
      deleted_at: new Date(),
    },
  });
};

export const internalHardDeleteService = async (userId) => {
  if (!userId) throw new Error("userId is required");

  await prisma.auth_user.delete({
    where: { id: BigInt(userId) },
  });
};