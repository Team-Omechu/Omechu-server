import bcrypt from "bcrypt";
import {
  createUser,
  findUserByEmail,
} from "../repositories/user.repository.js";
import { responseFromUser } from "../dtos/auth.dto.js";

export const userSignUp = async ({ email, password }) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("이미 가입된 이메일입니다.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await createUser({ email, password: hashedPassword });
};

export const userSignIn = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("존재하지 않는 이메일입니다.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  return user;
};
