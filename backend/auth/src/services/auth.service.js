import bcrypt from "bcrypt";
import {
  createUser,
  findUserByEmail,
} from "../repositories/user.repository.js";
import {
  DuplicatedUserData,
  InvalidRequestError,
} from "../errors.js";

export const userSignUp = async ({ email, password }) => {
  if (!email || !password) {
    throw new InvalidRequestError("email, password는 필수입니다.", {
      email,
    });
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new DuplicatedUserData("이미 가입된 이메일입니다.", { email });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await createUser({ email, password: hashedPassword });
};