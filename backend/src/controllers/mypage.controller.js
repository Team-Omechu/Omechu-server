import { StatusCodes } from "http-status-codes";
import {
  getUserProfile,
  updateUserProfileService,
  getMyRestaurants,
  updateRestaurantService,
  addZzimService,
  removeZzimService,
  getZzimList,
} from "../services/mypage.service.js";

import {
  bodyToProfileUpdate,
  responseFromProfile,
  bodyToRestaurantUpdate,
  responseFromRestaurant,
  bodyToZzimRequest,
  responseFromZzim,
  responseFromZzimList,
} from "../dtos/mypage.dto.js";

import { getUserReviews, deleteUserReviewService } from "../services/mypage.service.js";

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

export const handleGetRestaurantDetail = async (req, res, next) => {
  /*
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "맛집 상세 정보 조회"
  #swagger.description = "맛집 ID만으로 모든 상세 정보를 조회합니다."
  #swagger.parameters['id'] = {
    in: 'path',
    description: '맛집 ID',
    required: true,
    type: 'string'
  }
  */
  try {
    // 구현 필요
    res.status(StatusCodes.OK).success({ message: "구현 예정" });
  } catch (error) {
    console.error("맛집 상세 조회 에러:", error);
    next(error);
  }
};

export const handleGetMyRestaurants = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "내가 등록한 모든 맛집 조회"
  #swagger.description = "사용자가 등록한 모든 맛집을 조회합니다. (삭제되지 않은 맛집만)"
  #swagger.parameters['limit'] = {
    in: 'query',
    required: false,
    description: '한 페이지에 가져올 레스토랑 개수',
    example: 10
  }
  #swagger.parameters['cursor'] = {
    in: 'query',
    required: false,
    description: '페이지네이션을 위한 마지막 레스토랑 ID',
    example: '10'
  }

  #swagger.responses[200] = {
    description: "등록된 맛집 목록 조회 성공",
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
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "1" },
                      rest_image: { type: "string", example: "https://s3.amazonaws.com/img4.jpg" },
                      name: { type: "string", example: "맛있는 식당" },
                      address: { type: "string", example: "서울특별시 강남구 언주로164길 17 지하 1층" },
                      rating: { type: "number", example: 4.6 },
                      repre_menu: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            menu: { type: "string", example: "트러플 리조또" }
                          }
                        }
                      },
                      _count: {
                        type: "object",
                        properties: {
                          review: { type: "number", example: 35 }
                        }
                      }
                    }
                  }
                },
                hasNextPage: { type: "boolean", example: true },
                nextCursor: { type: "string", example: "10" }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[500] = {
    description: "서버 내부 오류",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "SERVER_ERROR" },
                reason: { type: "string", example: "서버 오류" },
                data: { type: "string", example: null }
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
    const userId = req.user?.id;
    console.log("JWT 토큰에서 추출된 userId:", userId);

    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null,
      });
    }

    const result = await getMyRestaurants({
      userId: parseInt(userId),
      cursor: req.query.cursor ? parseInt(req.query.cursor) : null,
      limit: req.query.limit ? parseInt(req.query.limit) : 10,
    });
    
    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    console.error("내 맛집 목록 조회 에러:", error);
    next(error);
  }
};

export const handleUpdateRestaurant = async (req, res, next) => {
  /*
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "맛집 정보 수정"
  #swagger.description = "맛집 ID로 정보를 수정합니다."
  #swagger.parameters['id'] = {
    in: 'path',
    description: '맛집 ID',
    required: true,
    type: 'string'
  }
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: { type: 'string', example: '수정된 맛집 이름' },
            address: { type: 'string', example: '서울시 강남구 테헤란로' },
            repre_menu: { type: 'string', example: '대표메뉴' }
          }
        }
      }
    }
  }
  */
  try {
    const userId = req.user?.id;
    const { id: restaurantId } = req.params;

    console.log("JWT 토큰에서 추출된 userId:", userId);
    console.log("수정할 맛집 ID:", restaurantId);

    if (!restaurantId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "맛집 ID가 필요합니다.",
        data: null,
      });
    }

    const restaurantData = bodyToRestaurantUpdate(
      req.body,
      restaurantId,
      parseInt(userId)
    );

    const updatedRestaurant = await updateRestaurantService(
      parseInt(restaurantId),
      parseInt(userId),
      restaurantData
    );

    const responseData = responseFromRestaurant(updatedRestaurant);

    res.status(StatusCodes.OK).success(responseData);
  } catch (error) {
    console.error("맛집 정보 수정 에러:", error);
    next(error);
  }
};

export const handleGetZzimList = async (req, res, next) => {
  /*
  #swagger.tags = ["Heart"]
  #swagger.summary = "사용자의 모든 찜 목록 조회"
  #swagger.description = "사용자의 모든 찜 목록을 조회합니다."
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

    const result = await getZzimList(parseInt(userId), 1000, null);
    const responseData = responseFromZzimList(result.data, false, null);

    res.status(StatusCodes.OK).success(responseData);
  } catch (error) {
    console.error("찜 목록 조회 에러:", error);
    next(error);
  }
};

export const handleAddZzim = async (req, res, next) => {
  /*
  #swagger.tags = ["Heart"]
  #swagger.summary = "찜 등록"
  #swagger.description = "맛집을 찜 목록에 추가합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['restaurantId'],
          properties: {
            restaurantId: { type: 'number', example: 1 }
          }
        }
      }
    }
  }
  */
  try {
    const userId = req.user?.id;
    const { restaurantId } = req.body;

    console.log("JWT 토큰에서 추출된 userId:", userId);
    console.log("찜할 맛집 ID:", restaurantId);

    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null,
      });
    }

    if (!restaurantId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "맛집 ID가 필요합니다.",
        data: null,
      });
    }

    const newZzim = await addZzimService(
      parseInt(userId),
      parseInt(restaurantId)
    );
    const responseData = responseFromZzim(newZzim);

    res.status(StatusCodes.CREATED).success(responseData);
  } catch (error) {
    console.error("찜 등록 에러:", error);
    next(error);
  }
};

export const handleRemoveZzim = async (req, res, next) => {
  /*
  #swagger.tags = ["Heart"]
  #swagger.summary = "찜 해제"
  #swagger.description = "찜 목록에서 맛집을 제거합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['restaurantId'],
          properties: {
            restaurantId: { type: 'number', example: 1 }
          }
        }
      }
    }
  }
  */
  try {
    const userId = req.user?.id;
    const { restaurantId } = req.body;

    console.log("JWT 토큰에서 추출된 userId:", userId);
    console.log("찜 해제할 맛집 ID:", restaurantId);

    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null,
      });
    }

    if (!restaurantId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "맛집 ID가 필요합니다.",
        data: null,
      });
    }

    await removeZzimService(parseInt(userId), parseInt(restaurantId));

    res.status(StatusCodes.OK).success({
      message: "찜이 성공적으로 해제되었습니다.",
    });
  } catch (error) {
    console.error("찜 해제 에러:", error);
    next(error);
  }
};

export const handleGetUserReviews = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "사용자가 작성한 모든 리뷰 목록 조회"
  #swagger.description = "사용자가 작성한 모든 리뷰를 조회합니다."
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

    // 해당 사용자의 모든 리뷰 목록을 조회 (페이지네이션 없이 전체)
    const result = await getUserReviews(parseInt(userId), 1000, null);

    // 직접 반환 (DTO 변환 없이)
    res.status(StatusCodes.OK).success({
      data: result.data,
      hasNextPage: result.hasNextPage,
      nextCursor: result.nextCursor,
    });
  } catch (error) {
    console.error("사용자 리뷰 조회 에러:", error);
    next(error);
  }
};

export const handleDeleteReview = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "리뷰 삭제"
  #swagger.description = "사용자가 작성한 리뷰를 삭제합니다."
  #swagger.parameters['reviewId'] = {
    in: 'path',
    description: '삭제할 리뷰 ID',
    required: true,
    type: 'string'
  }
  #swagger.responses[200] = {
    description: "리뷰 삭제 성공",
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
                message: { type: "string", example: "리뷰가 성공적으로 삭제되었습니다." },
                deletedReviewId: { type: "string", example: "123" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[403] = {
    description: "권한 없음 (본인 리뷰가 아님)",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C010" },
                reason: { type: "string", example: "본인이 작성한 리뷰만 삭제할 수 있습니다." }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[404] = {
    description: "리뷰 찾을 수 없음",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C004" },
                reason: { type: "string", example: "삭제할 리뷰를 찾을 수 없습니다." }
              }
            }
          }
        }
      }
    }
  }
  */
  try {
    const userId = req.user?.id;
    const { reviewId } = req.params;

    console.log("리뷰 삭제 요청 - userId:", userId, "reviewId:", reviewId);

    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null,
      });
    }

    if (!reviewId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "리뷰 ID가 필요합니다.",
        data: null,
      });
    }

    const result = await deleteUserReviewService(parseInt(userId), parseInt(reviewId));

    res.status(StatusCodes.OK).success({
      message: "리뷰가 성공적으로 삭제되었습니다.",
      deletedReviewId: reviewId
    });

  } catch (error) {
    console.error("리뷰 삭제 에러:", error);
    next(error);
  }
};