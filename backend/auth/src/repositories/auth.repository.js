import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const addUser = async (data) => {
  try {
    const existingUser = await prisma.auth_user.findFirst({
      where: { email: data.email },
    });

    if (existingUser) {
      return null;
    }

    const user = await prisma.auth_user.create({
      data: {
        email: data.email,
        password: data.password,
      },
    });

    return user.id;
  } catch (err) {
    throw new Error(`오류가 발생했어요. (${err.message})`);
  }
};

export const getUser = async (userId) => {
  try {
    const user = await prisma.auth_user.findFirst({
      where: { id: userId },
    });

    return user;
  } catch (err) {
    throw new Error(`오류가 발생했어요. (${err.message})`);
  }
};
