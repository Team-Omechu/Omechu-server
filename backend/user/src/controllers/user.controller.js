import { StatusCodes } from "http-status-codes";
import { patchUserProfileService } from "../services/user.service.js";
import { LoginRequiredError, UserUpdateFailedError } from "../errors.js";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export const handleUpdateUserInfo = async (req, res, next) => {
  /*
    #swagger.summary = '회원 정보 수정 API'
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.tags = ['Auth']
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              nickname: { type: "string" },
              exercise: { type: "string", enum: ["다이어트 중", "증량 중", "유지 중"] },
              prefer: { type: "array", items: { type: "string" } },
              allergy: { type: "array", items: { type: "string" } }
            }
          }
        }
      }
    };
    #swagger.responses[200] = {
      description: "회원 정보 수정 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  nickname: { type: "string" },
                  exercise: { type: "string" },
                  prefer: { type: "array", items: { type: "string" } },
                  allergy: { type: "array", items: { type: "string" } }
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[500] = {
      description: "회원 정보 수정 실패 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "C001" },
                  reason: { type: "string" },
                  data: { type: "object", nullable: true }
                }
              },
              success: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    };
  */

  try {
    console.log("회원 정보 수정을 요청했습니다!");
    console.log("body:", req.body);

    let userId = req.user?.id;

    if (!userId) {
      const h = req.headers.authorization || "";
      const m = /^Bearer\s+(.+)$/.exec(h);
      if (!m) throw new LoginRequiredError("로그인이 필요한 서비스입니다.");

      let decoded;
      try {
        decoded = jwt.verify(m[1], process.env.JWT_SECRET);
      } catch {
        throw new LoginRequiredError("토큰이 유효하지 않거나 만료되었습니다.");
      }

      userId = Number(decoded?.id);
      if (!userId) {
        throw new LoginRequiredError("토큰에 사용자 정보가 없습니다.");
      }
    }

    const updatedUserInfo = await patchUserProfileService(userId, req.body);
    return res.status(StatusCodes.OK).success(updatedUserInfo);
  } catch (error) {
    next(new UserUpdateFailedError("회원 정보 수정 중 오류 발생", error));
  }
};


export const handleCreateUserInternal = async (req, res) => {
  try {
    const internalKey = req.headers["x-internal-key"];
    if (internalKey !== process.env.INTERNAL_API_KEY) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    await prisma.user.upsert({
      where: { id: BigInt(userId) },
      update: {},
      create: { id: BigInt(userId) },
    });

    return res.status(201).json({ resultType: "SUCCESS" });
  } catch (err) {
    console.error("[user/internal error]", err);
    return res.status(500).json({
      resultType: "FAIL",
      error: { reason: err.message },
    });
  }
};
