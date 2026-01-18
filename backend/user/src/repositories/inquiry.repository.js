import { prisma } from "../db.config.js";

export const createInquiry = async (userId, title, content) => {
  return prisma.inquiry.create({
    data: {
      user_id: BigInt(userId),
      title,
      content,
    },
  });
};

export const findAllInquiries = async () => {
  return prisma.inquiry.findMany({
    orderBy: { created_at: "desc" },
  });
};
