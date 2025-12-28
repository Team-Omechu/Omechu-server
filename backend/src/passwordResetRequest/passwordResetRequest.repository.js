import { PrismaClient } from "../generated/prisma/index.js";


const prisma = new PrismaClient();

export const upsertPasswordResetToken = async (email, token, expiresAt) => {
  return prisma.password_reset_token.upsert({
    where: { email },
    update: { token, expires_at: expiresAt },
    create: { email, token, expires_at: expiresAt },
  });
};

export const findPasswordResetToken = async (token) => {
  return prisma.password_reset_token.findUnique({ where: { token } });
};

export const deletePasswordResetToken = async (token) => {
  return prisma.password_reset_token.delete({ where: { token } });
};


export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};
