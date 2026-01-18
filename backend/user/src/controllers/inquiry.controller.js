import { StatusCodes } from "http-status-codes";
import {
  submitInquiryService,
} from "../services/inquiry.service.js";

/**
 * 이메일 문의 접수 API (사용자)
 */
export const handleSubmitInquiry = async (req, res, next) => {
  /*
    #swagger.summary = '이메일 문의 접수 API'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.tags = ['Inquiry']
  */
  try {
    const userId = req.user.id;
    const { title, content } = req.body;

    const result = await submitInquiryService(userId, title, content);
    res.status(StatusCodes.OK).success(result);
  } catch (err) {
    next(err);
  }
};

