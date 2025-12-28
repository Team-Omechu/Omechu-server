import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { PrismaClient } from "../generated/prisma/index.js";
import { UserNotFoundError } from "../errors.js";

const prisma = new PrismaClient();

export const updateUserPasswordByEmail = async (email, newPassword) => {
  try {
    return await prisma.user.update({
      where: { email },
      data: { password: newPassword },
    });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      throw new UserNotFoundError("해당 사용자를 찾을 수 없습니다.");
    }
    throw err;
  }
};

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const findUserById = async (userId) => {
  return await prisma.user.findUnique({
    where: { id: Number(userId) },
    include: {
      prefer: true,
      allergy: true,
    },
  });
};


export const updateUserPasswordById = async (id, newPassword) => {
  return prisma.user.update({
    where: { id: Number(id) },
    data: { password: newPassword },
  });
};
