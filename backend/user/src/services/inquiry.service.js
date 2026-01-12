import { createInquiry, findAllInquiries } from "../repositories/inquiry.repository.js";
import { sendInquiryMailToAdmin } from "../utils/mailSender.js";

export const submitInquiryService = async (userId, title, content) => {
  const inquiry = await createInquiry(userId, title, content);

  await sendInquiryMailToAdmin({
    userId,
    title,
    content,
  });

  return {
    message: "문의가 접수되었습니다.",
  };
};

export const getAllInquiriesService = async () => {
  return await findAllInquiries();
};
