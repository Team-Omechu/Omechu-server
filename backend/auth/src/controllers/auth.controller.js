import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/auth.dto.js";
import { userSignUp } from "../services/auth.service.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
import { createClient } from "redis";
import axios from "axios";

// Redis 클라이언트 생성
const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

// Redis 연결 상태 로그
redisClient.on("error", (err) => {
  console.error("[Redis] error:", err?.message || err);
});
redisClient.on("connect", () => console.log("[Redis] connecting..."));
redisClient.on("ready", () => console.log("[Redis] ready"));

export const handleUserSignUp = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "회원가입"
  #swagger.description = "회원가입 API입니다. 회원가입 성공 시 세션에 사용자 정보(id, email)가 저장됩니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string', example: 'user@example.com' },
            password: { type: 'string', example: 'user1234!' }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "회원가입 성공",
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
                id: { type: "number", example: 1 },
                email: { type: "string", example: "user@example.com" },
                accessToken: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
                refreshToken: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 요청 (필수 값 누락 등)",
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
                reason: { type: "string", example: "필수 입력값이 누락되었습니다" },
                data: {
                  type: "object",
                  properties: {
                    email: { type: "string", example: "user@example.com" }
                  }
                }
              }
            },
            success: { type: "string", example: null }
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
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "SERVER_ERROR" },
                reason: { type: "string", example: "서버 내부 오류" },
                data: {
                  type: "object",
                  properties: {
                    email: { type: "string", example: "user@example.com" },
                  }
                }
              }
            },
            success: { type: "string", example: null }
          }
        }
      }
    }
  }
*/

   try {

    if (!redisClient.isOpen) {
      await redisClient.connect();
    }
    
    const user = await userSignUp(bodyToUser(req.body));
    const uid = Number(user.id);

    await axios.post(
      `${process.env.USER_SERVICE_URL}/user/internal`,
      { userId: uid, email: user.email },
      { headers: { "x-internal-key": process.env.INTERNAL_API_KEY } },
    );

    const accessToken = generateAccessToken({
      payload: uid.toString(),
      type: "access",
    });

    const refreshToken = generateRefreshToken({
      payload: uid.toString(),
      type: "refresh",
    });

    await redisClient.set(`refresh:${uid}`, refreshToken, {
      EX: 60 * 60 * 24 * 7,
    });

    return res.status(StatusCodes.OK).success({
      id: uid.toString(),
      email: user.email,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err); 
  }
};