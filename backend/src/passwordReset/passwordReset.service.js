import {
  deletePasswordResetToken,
  updateUserPasswordByEmail,
} from "./passwordReset.repository";
import bcrypt from "bcrypt";


export const resetUserPasswordService = async (email, newPassword, token) => {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await updateUserPasswordByEmail(email, hashedPassword);
  await deletePasswordResetToken(token);
};