// reviews/reviews.controller.js

import { StatusCodes } from "http-status-codes";
import {
  getUserReviews,
  deleteUserReviewService,
} from "./reviews.service.js";

/**
 * 사용자가 작성한 리뷰 목록 조회
 * GET /reviews
 */
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

    const result = await getUserReviews(parseInt(userId), 1000, null);

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

/**
 * 리뷰 삭제
 * DELETE /reviews/:reviewId
 */
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

    const result = await deleteUserReviewService(
      parseInt(userId),
      parseInt(reviewId)
    );

    res.status(StatusCodes.OK).success({
      message: "리뷰가 성공적으로 삭제되었습니다.",
      deletedReviewId: reviewId,
    });
  } catch (error) {
    console.error("리뷰 삭제 에러:", error);
    next(error);
  }
};