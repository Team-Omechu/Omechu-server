import { StatusCodes } from "http-status-codes";
import { withdrawService } from "../services/withdraw.service.js";

export const handleWithdraw = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { confirmed, reason } = req.body;

    const result = await withdrawService(userId, confirmed, reason);

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }

  /**
  #swagger.tags = ["Auth"]
  #swagger.summary = "회원 탈퇴"
  #swagger.description = "사용자가 안내사항을 확인하고 탈퇴 사유를 입력하면 회원 탈퇴를 처리합니다. 탈퇴 시 계정은 즉시 비활성화되며, 일정 기간 후 완전 삭제됩니다."
 
  #swagger.security = [{
    "bearerAuth": []
  }]
 
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["confirmed", "reason"],
          properties: {
            confirmed: {
              type: "boolean",
              example: true,
              description: "안내사항 확인 여부 (true여야 탈퇴 가능)"
            },
            reason: {
              type: "string",
              example: "자주 사용하지 않아요.",
              description: "회원 탈퇴 사유 (자유 입력 텍스트)"
            }
          }
        }
      }
    }
  }
 
  #swagger.responses[200] = {
    description: "회원 탈퇴 성공",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                success: { type: "boolean", example: true },
                message: {
                  type: "string",
                  example: "탈퇴가 정상적으로 처리되었습니다."
                }
              }
            }
          }
        }
      }
    }
  }
 
  #swagger.responses[400] = {
    description: "잘못된 요청 (안내사항 미확인 또는 사유 누락)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "P001" },
                reason: { type: "string", example: "탈퇴 사유를 입력해주세요." },
                data: { type: "object", example: null }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
 
  #swagger.responses[401] = {
    description: "인증 실패",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "T001" },
                reason: { type: "string", example: "인증 토큰이 없습니다." }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
 
  #swagger.responses[500] = {
    description: "서버 내부 오류 (탈퇴 처리 실패)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C004" },
                reason: {
                  type: "string",
                  example: "회원 탈퇴 처리 중 오류가 발생했습니다."
                }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
 */

};
