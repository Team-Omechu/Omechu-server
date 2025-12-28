import {
  createPasswordResetTokenService
} from "./passwordResetRequest.service.js";
import {
  bodyToResetRequestDto,
} from "./passwordResetRequest.dto.js";

export const handleResetRequest = async (req, res, next) => {
  /*
#swagger.tags = ["Auth"]
#swagger.summary = "비밀번호 재설정 요청"
#swagger.description = "사용자가 이메일을 입력하면 비밀번호 재설정 링크를 이메일로 발송합니다."

#swagger.requestBody = {
  required: true,
  content: {
    'application/json': {
      schema: {
        type: "object",
        required: ["email"],
        properties: {
          email: { type: "string", example: "user@example.com" }
        }
      }
    }
  }
}

#swagger.responses[200] = {
  description: "비밀번호 재설정 링크 발송 성공",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "SUCCESS" },
          error: { type: "object", example: null },
          success: {
            type: "object",
            properties: {
              message: { type: "string", example: "비밀번호 재설정 링크를 이메일로 보냈습니다" },
              token: { type: "string", example: "예시용 테스트 토큰" }
            }
          }
        }
      }
    }
  }
}

#swagger.responses[400] = {
  description: "잘못된 입력값 (예: email 누락/형식 오류)",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string", example: "INVALID_INPUT" },
              reason: { type: "string", example: "email이 필요합니다." },
              data: { type: "object", nullable: true, example: null }
            }
          },
          success: { nullable: true, example: null }
        }
      }
    }
  }
}

#swagger.responses[404] = {
  description: "존재하지 않는 이메일",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string", example: "E002" },
              reason: { type: "string", example: "해당 이메일의 사용자가 존재하지 않습니다." },
              data: { type: "object", nullable: true, example: null }
            }
          },
          success: { nullable: true, example: null }
        }
      }
    }
  }
}

#swagger.responses[500] = {
  description: "서버 내부 오류",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string", example: "SERVER_ERROR" },
              reason: { type: "string", example: "서버 내부 오류가 발생했습니다." }
            }
          },
          success: { nullable: true, example: null }
        }
      }
    }
  }
}
*/

  try {
    const { email } = bodyToResetRequestDto(req.body);
    const token = await createPasswordResetTokenService(email);
    res.success({
      message: "비밀번호 재설정 링크를 이메일로 보냈습니다",
      token,
    });
  } catch (err) {
    next(err);
  }
};

