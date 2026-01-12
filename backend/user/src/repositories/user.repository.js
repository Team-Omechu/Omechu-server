import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const findUserById = async (userId) => {
  return prisma.user.findFirst({
    where: { id: BigInt(userId) },
    include: {
      prefer: true,
      user_allergy: {
        include: { allergy_min: true },
      },
    },
  });
};

export const updateUserInfo = async (userId, data) => {
  return prisma.user.update({
    where: { id: BigInt(userId) },
    data,
  });
};

export const createUserPreferences = async (userId, preferEnums) => {
  await prisma.prefer.deleteMany({
    where: { user_id: BigInt(userId) },
  });

  if (!preferEnums.length) return;

  await prisma.prefer.createMany({
    data: preferEnums.map(p => ({
      user_id: BigInt(userId),
      prefer: p,
    })),
  });
};

const findAllergyIds = async (allergyEnums) => {
  const rows = await prisma.allergy_min.findMany({
    where: { allergy: { in: allergyEnums } },
    select: { id: true },
  });
  return rows.map(r => r.id);
};

export const createUserAllergies = async (userId, allergyEnums) => {
  await prisma.user_allergy.deleteMany({
    where: { user_id: BigInt(userId) },
  });

  if (!allergyEnums.length) return;

  const allergyIds = await findAllergyIds(allergyEnums);

  await prisma.user_allergy.createMany({
    data: allergyIds.map(allergyId => ({
      user_id: BigInt(userId),
      allergy_id: allergyId,
    })),
  });
};
