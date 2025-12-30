// reviews/reviews.service.js

import {
  findUserReviews,
  findReviewById,
  deleteReview,
} from "./reviews.repository.js";
import {
  NoReviewData,
  NotYourReview,
} from "../errors.js";

/**
 * 사용자 리뷰 목록 조회
 * @param {number} userId - 사용자 ID
 * @param {number} limit - 페이지 크기
 * @param {number|null} cursor - 페이지네이션 커서
 * @returns {Promise<Object>} 리뷰 목록 데이터
 */
export const getUserReviews = async (userId, limit = 10, cursor = null) => {
  console.log("getUserReviews 서비스 - userId:", userId, "limit:", limit, "cursor:", cursor);
  
  try {
    const result = await findUserReviews(userId, limit, cursor);
    console.log("사용자 리뷰 조회 결과:", result);
    return result;
  } catch (error) {
    console.error('사용자 리뷰 조회 상세 오류:', error);
    return {
      data: [],
      hasNextPage: false,
      nextCursor: null
    };
  }
};

/**
 * 사용자 리뷰 삭제
 * @param {number} userId - 사용자 ID
 * @param {number} reviewId - 리뷰 ID
 * @returns {Promise<Object>} 삭제 결과
 * @throws {NoReviewData} 리뷰를 찾을 수 없는 경우
 * @throws {NotYourReview} 본인의 리뷰가 아닌 경우
 */
export const deleteUserReviewService = async (userId, reviewId) => {
  console.log("deleteUserReviewService - userId:", userId, "reviewId:", reviewId);
  
  const review = await findReviewById(reviewId);
  if (!review) {
    throw new NoReviewData("삭제할 리뷰를 찾을 수 없습니다.", { reviewId });
  }

  if (review.user_id.toString() !== userId.toString()) {
    throw new NotYourReview("본인이 작성한 리뷰만 삭제할 수 있습니다.", { 
      userId, 
      reviewId,
      reviewOwnerId: review.user_id.toString()
    });
  }

  try {
    await deleteReview(reviewId);
    console.log("리뷰 삭제 성공 - reviewId:", reviewId);
    
    return { success: true, deletedReviewId: reviewId };
  } catch (error) {
    console.error('리뷰 삭제 상세 오류:', error);
    throw new Error("리뷰 삭제에 실패했습니다.");
  }
};