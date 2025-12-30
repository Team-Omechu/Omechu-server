// profile/profile.controller.js

import { StatusCodes } from "http-status-codes";
import {
  getUserProfile,
  updateUserProfileService,
} from "./profile.service.js";
import {
  bodyToProfileUpdate,
  responseFromProfile,
} from "../dtos/mypage.dto.js";

/**
 * 사용자 프로필 조회
 * GET /profile
 */
export const handleGetUserProfile = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "사용자 프로필 조회"
  #swagger.description = "사용자 프로필 정보를 조회합니다."
  #swagger.responses[200] = {
    description: "프로필 조회 성공",
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
                id: { type: "string", example: "1" },
                email: { type: "string", example: "user@example.com" },
                nickname: { type: "string", example: "오메추유저" },
                body_type: { type: "string", example: "감기" },
                gender: { type: "string", example: "남성" },
                exercise: { type: "string", example: "다이어트 중" },
                prefer: { 
                  type: "array", 
                  items: { type: "string" },
                  example: ["한식", "양식"]
                },
                allergy: { 
                  type: "array", 
                  items: { type: "string" },
                  example: ["달걀(난류) 알레르기", "우유 알레르기"]
                },
                profileImageUrl: { type: "string", example: "https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/123.jpg" },
                created_at: { type: "string", example: "2023-01-01T00:00:00.000Z" },
                updated_at: { type: "string", example: "2023-01-01T00:00:00.000Z" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
  description: "인가되지 않은 사용자일 때",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'AUTH_REQUIRED' },
              reason: { type: 'string', example: '로그인이 필요합니다' },
              data: { type: 'string', example: null }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}
  #swagger.responses[500] = {
  description: "서버 에러",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              reason: { type: 'string', example: '서버 에러' }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}
  */
  try {
    const userId = req.user?.id;
    console.log("JWT 토큰에서 추출된 userId:", userId);

    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null,
      });
    }

    const userProfile = await getUserProfile(parseInt(userId));
    const responseData = responseFromProfile(userProfile);
    res.status(StatusCodes.OK).success(responseData);
  } catch (error) {
    console.error("프로필 조회 에러:", error);
    next(error);
  }
};

/**
 * 사용자 프로필 수정
 * PATCH /profile
 */
export const handleUpdateUserProfile = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "프로필 정보 수정"
  #swagger.description = "사용자 프로필 정보를 수정합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            email: { type: 'string', example: 'user@example.com' },
            nickname: { type: 'string', example: '새닉네임' },
            body_type: { type: 'string', example: '감기', enum: ['감기', '소화불량', '더위잘탐', '추위잘탐'] },
            gender: { type: 'string', example: '남성', enum: ['남성', '여성'] },
            exercise: { type: 'string', example: '다이어트 중', enum: ['다이어트 중', '증량 중', '유지 중'] },
            prefer: { 
              type: 'array', 
              items: { type: 'string', enum: ['한식', '양식', '중식', '일식', '다른나라'] },
              example: ['한식', '양식']
            },
            allergy: { 
              type: 'array', 
              items: { type: 'string', enum: ['달걀(난류) 알레르기', '우유 알레르기', '갑각류 알레르기', '해산물 알레르기', '견과류 알레르기'] },
              example: ['달걀(난류) 알레르기']
            },
            profileImageUrl: { type: 'string', example: 'https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/123.jpg' }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "프로필 수정 성공",
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
                id: { type: "string", example: "1" },
                email: { type: "string", example: "user@example.com" },
                nickname: { type: "string", example: "새닉네임" },
                body_type: { type: "string", example: "감기" },
                gender: { type: "string", example: "남성" },
                exercise: { type: "string", example: "다이어트 중" },
                prefer: { 
                  type: "array", 
                  items: { type: "string" },
                  example: ["한식", "양식"]
                },
                allergy: { 
                  type: "array", 
                  items: { type: "string" },
                  example: ["달걀(난류) 알레르기"]
                },
                profileImageUrl: { type: "string", example: "https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/123.jpg" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
  description: "인가되지 않은 사용자일 때",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'AUTH_REQUIRED' },
              reason: { type: 'string', example: '로그인이 필요합니다' },
              data: { type: 'string', example: null }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}
  #swagger.responses[500] = {
  description: "서버 에러",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              reason: { type: 'string', example: '서버 에러' }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}
  */
  try {
    const userId = req.user?.id;
    console.log("JWT 토큰에서 추출된 userId:", userId);

    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null,
      });
    }

    const profileData = bodyToProfileUpdate(req.body, parseInt(userId));
    const updatedProfile = await updateUserProfileService(
      parseInt(userId),
      profileData
    );
    const responseData = responseFromProfile(updatedProfile);

    res.status(StatusCodes.OK).success(responseData);
  } catch (error) {
    console.error("프로필 업데이트 에러:", error);
    next(error);
  }
};