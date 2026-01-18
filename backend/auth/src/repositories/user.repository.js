import { prisma } from "../db.config.js";

export const findUserByEmail = async (email) => {
  return prisma.auth_user.findFirst({ where: { email } });
};

export const createUser = async ({ email, password }) => {
  const data = {
    email,
  };
  if (password) {
    // 이미 상위 서비스에서 해시했다면 그대로 대입, 아니라면 여기서 해시
    data.password = password;
  }
  return prisma.auth_user.create({ data });
};

export const findUserById = async (userId) => {
  return await prisma.auth_user.findUnique({
    where: { id: Number(userId) },
  });
};

export const updateUserInfo = async (userId, data) => {
  try {
    console.log("Prisma update data:", data);
    return await prisma.auth_user.update({
      where: { id: Number(userId) },
      data,
    });
  } catch (error) {
    console.error("Prisma update 실패!");
    console.error("message:", error.message);
    console.error("meta:", error.meta); // 핵심 정보
    console.error("code:", error.code);
    throw error;
  }
};

export const findUserByProvider = async (provider, providerId) => {
  return prisma.auth_user.findFirst({
    where: {
      provider,
      provider_id: providerId,
    },
  });
};

export const createOAuthUser = async ({
  email,
  provider,
  providerId,
}) => {
  return prisma.auth_user.create({
    data: {
      email: email ?? null,
      provider,
      provider_id: providerId,
    },
  });
};