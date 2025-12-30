// reviews/reviews.repository.js

import { prisma } from "../db.config.js";

/**
 * 사용자 리뷰 목록 조회 (커서 기반 페이지네이션)
 * @param {number} userId - 사용자 ID
 * @param {number} limit - 조회 개수
 * @param {number|null} cursor - 마지막 리뷰 ID
 * @returns {Promise<Object>} 리뷰 목록 데이터
 */
export const findUserReviews = async (userId, limit, cursor) => {
  const reviews = await prisma.review.findMany({
    where: {
      user_id: userId,
      ...(cursor && { id: { lt: cursor } }),
    },
    orderBy: { id: 'desc' },
    take: limit + 1,
    include: {
      restaurant: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const hasNextPage = reviews.length > limit;
  const data = hasNextPage ? reviews.slice(0, limit) : reviews;
  const nextCursor = hasNextPage ? data[data.length - 1].id : null;

  return {
    data: data.map((review) => ({
      id: review.id.toString(),
      content: review.content,
      rating: review.rating,
      created_at: review.created_at,
      restaurant: {
        id: review.restaurant.id.toString(),
        name: review.restaurant.name,
      },
    })),
    hasNextPage,
    nextCursor,
  };
};

/**
 * 리뷰 ID로 리뷰 조회
 * @param {number} reviewId - 리뷰 ID
 * @returns {Promise<Object|null>} 리뷰 정보
 */
export const findReviewById = async (reviewId) => {
  return await prisma.review.findUnique({
    where: { id: reviewId },
  });
};

/**
 * 리뷰 삭제 (연관 이미지도 함께 삭제)
 * @param {number} reviewId - 리뷰 ID
 * @returns {Promise<void>}
 */
export const deleteReview = async (reviewId) => {
  await prisma.$transaction(async (tx) => {
    await tx.reviewImage.deleteMany({
      where: { review_id: reviewId },
    });

    await tx.review.delete({
      where: { id: reviewId },
    });
  });
};