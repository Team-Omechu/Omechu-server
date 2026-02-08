import { StatusCodes } from "http-status-codes";
import {
  submitInquiryService,
} from "../services/inquiry.service.js";

export const handleSubmitInquiry = async (req, res, next) => {
  /*
    #swagger.summary = '이메일 문의 접수'
    #swagger.description = '로그인한 사용자가 이메일 문의를 등록한다. 문의 내용은 DB에 저장되며, 관리자에게 이메일로 전송된다.'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.tags = ['Inquiry']

    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["title", "content"],
            properties: {
              title: {
                type: "string",
                example: "서비스 이용 문의"
              },
              content: {
                type: "string",
                example: "회원 탈퇴는 어디서 할 수 있나요?"
              }
            }
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "문의 접수 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: {
                type: "string",
                example: "SUCCESS"
              },
              data: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "문의가 접수되었습니다."
                  }
                }
              }
            }
          }
        }
      }
    }

    #swagger.responses[401] = {
      description: "인증 실패"
    }

    #swagger.responses[500] = {
      description: "서버 오류"
    }
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
