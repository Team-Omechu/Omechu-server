import {
  sendVerificationCodeService,
  verifyCodeService,
} from "../services/email.service.js";
import { StatusCodes } from "http-status-codes";

export const handleSendEmailCode = async (req, res, next) => {
  /*
    #swagger.tags = ["Auth"]
    #swagger.summary = "이메일 인증번호 전송 API"
    #swagger.description = "사용자가 입력한 이메일로 인증번호를 전송하는 API입니다. (테스트용으로 응답에 인증번호 포함)"

    #swagger.requestBody = {
    required: true,
    content: {
        'application/json': {
        schema: {
            type: 'object',
            properties: {
            email: { type: 'string', example: 'testuser@example.com' }
            }
        }
        }
    }
    }

    #swagger.responses[200] = {
    description: "인증번호 전송 성공",
    content: {
        'application/json': {
        schema: {
            type: 'object',
            properties: {
            message: { type: 'string', example: '인증번호 전송 완료' },
            code: { type: 'string', example: '123456' }
            }
        }
        }
    }
    }

  #swagger.responses[500] = {
    description: "서버 오류",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'FAIL' },
            error: {
              type: 'object',
              properties: {
                errorCode: { type: 'string', example: 'SERVER_ERROR' },
                reason: { type: 'string', example: '서버 내부 오류가 발생했습니다.' }
              }
            },
            success: { example: null }
          }
        }
      }
    }
  }
*/

  try {
    await sendVerificationCodeService(req.body.email);
    res.status(StatusCodes.OK).success({ message: "인증번호 전송 완료" });
  } catch (err) {
    next(err);
  }
};

export const handleVerifyEmailCode = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "이메일 인증번호 검증 API"
  #swagger.description = "사용자가 입력한 인증번호를 서버에서 검증하는 API입니다."

  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            email: { type: 'string', example: 'testuser@example.com' },
            code: { type: 'string', example: '123456' }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "인증 성공",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: '이메일 인증 성공' }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: "잘못된 인증번호 or 만료된 인증번호",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'FAIL' },
            error: {
              oneOf: [
                {
                  type: 'object',
                  properties: {
                    errorCode: { type: 'string', example: 'V001' },
                    reason: { type: 'string', example: '인증번호가 일치하지 않습니다.' }
                  }
                },
                {
                  type: 'object',
                  properties: {
                    errorCode: { type: 'string', example: 'V002' },
                    reason: { type: 'string', example: '인증번호가 만료되었습니다. 다시 요청해 주세요.' }
                  }
                }
              ]
            },
            success: { example: null }
          }
        }
      }
    }
  }

  #swagger.responses[500] = {
    description: "서버 오류",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'FAIL' },
            error: {
              type: 'object',
              properties: {
                errorCode: { type: 'string', example: 'SERVER_ERROR' },
                reason: { type: 'string', example: '서버 내부 오류가 발생했습니다.' }
              }
            },
            success: { example: null }
          }
        }
      }
    }
  }
*/
  try {
    await verifyCodeService(req.body.email, req.body.code);
    res.status(StatusCodes.OK).success({ message: "이메일 인증 성공" });
  } catch (err) {
    next(err);
  }
};
