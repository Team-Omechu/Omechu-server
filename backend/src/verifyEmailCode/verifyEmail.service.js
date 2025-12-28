import {
  findEmailVerification,
  deleteEmailVerification,
} from "./verifyEmail.repository.js";
import nodemailer from "nodemailer";
import {
  InvalidVerificationCodeError,
  VerificationCodeExpiredError,
} from "../errors.js";

// Nodemailer transporter 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const verifyCodeService = async (email, code) => {
  const record = await findEmailVerification(email);

  if (!record || record.code !== code) {
    throw new InvalidVerificationCodeError("인증번호가 일치하지 않습니다.");
  }

  if (record.expires_at < new Date()) {
    throw new VerificationCodeExpiredError(
      "인증번호가 만료되었습니다. 다시 요청해 주세요."
    );
  }

  await deleteEmailVerification(email);
};
