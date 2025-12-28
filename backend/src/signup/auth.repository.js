import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

export const createUser = async ({ email, password }) => {
    const data = {
      email: email ?? null,
      created_at: new Date(),
      updated_at: new Date(),
    };
    if (password) {
      // 이미 상위 서비스에서 해시했다면 그대로 대입, 아니라면 여기서 해시
      data.password = password;
    }
    return prisma.user.create({ data });
  };