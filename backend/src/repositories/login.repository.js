import { prisma } from "../db.config.js";
import bcrypt from "bcrypt";
export const userLogin = async (data) => {
  const user = await prisma.user.findFirst({ where: { email: data.email } });
  if (user === null) {
    return { error: "NO_USER" };
  }
  const isMatch = bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    return { error: "IN_CORRECT_PASSWORD" };
  } else {
    return user;
  }
};
