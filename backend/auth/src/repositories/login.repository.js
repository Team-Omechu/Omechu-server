import { prisma } from "../db.config.js";
import bcrypt from "bcrypt";

export const userLogin = async (data) => {
  // auth_user 모델로 변경
  const user = await prisma.auth_user.findFirst({ where: { email: data.email } });
  if (user === null) {
    return { error: "NO_USER" };
  }
  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    return { error: "IN_CORRECT_PASSWORD" };
  } else {
    return user;
  }
};
