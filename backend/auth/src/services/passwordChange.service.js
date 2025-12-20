import { findUserById } from "../repositories/user.repository.js";
import { updateUserPasswordById } from "../repositories/passwordReset.repository.js";
import { InvalidPasswordError } from "../errors.js";
import bcrypt from "bcrypt";

export const changeUserPasswordService = async (
  userId,
  currentPassword,
  newPassword
) => {
  const user = await findUserById(userId);

  // 현재 비밀번호 비교
  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) {
    throw new InvalidPasswordError("현재 비밀번호가 일치하지 않습니다.");
  }

  // 새 비밀번호 해시
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await updateUserPasswordById(userId, hashedPassword);
};

