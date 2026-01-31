import { PrismaClient } from "../generated/prisma/index.js";
import { UserNotFoundError } from "../errors.js";

const prisma = new PrismaClient();

export const findUserByEmail = async (email) => {
  return prisma.auth_user.findFirst({ where: { email } });
};

export const createUser = async ({ email, password }) => {
  try {
    return await prisma.auth_user.create({
      data: { email, password },
    });
  } catch (err) {
    throw err; 
  }
};

export const getUser = async (userId) => {
  const user = await prisma.auth_user.findFirst({
    where: { id: userId },
  });

  if (!user) {
    throw new UserNotFoundError("사용자를 찾을 수 없습니다.", { userId });
  }

  return user;
};
