import {
  findUserProfile,
  updateUserProfile,
  countUserRestaurants,
  findUserRestaurants,
  findRestaurantById,
  updateRestaurant,
  findZzim,
  createZzim,
  deleteZzim,
  countUserZzims,
  findUserZzims,
  findUserReviews,
  findReviewById,
  deleteReview
} from '../repositories/mypage.repository.js';

import {
  NoProfileData,
  ProfileUpdateFailed,
  NoRestData,
  NoRestaurantPermission,
  AlreadyZzimmed,
  NoZzimData,
  InvalidProfileData,
  NoReviewData,
  NotYourReview
} from '../errors.js';

/**
 * 사용자 프로필 조회
 */
export const getUserProfile = async (userId) => {
  console.log("getUserProfile 서비스 - userId:", userId);
  
  const user = await findUserProfile(userId);
  
  if (!user) {
    throw new NoProfileData("사용자 프로필을 찾을 수 없습니다.", { userId });
  }

  return user;
};

/**
 * 사용자 프로필 수정
 */
export const updateUserProfileService = async (userId, data) => {
  console.log("updateUserProfileService - userId:", userId, "data:", data);
  
  // 사용자 존재 확인
  const existingUser = await findUserProfile(userId);
  if (!existingUser) {
    throw new NoProfileData("사용자를 찾을 수 없습니다.", { userId });
  }

  // 업데이트할 데이터가 있는지 확인
  const updateFields = ['email', 'phone_num', 'nickname', 'profileImageUrl'];
  const hasUpdateData = updateFields.some(field => data[field] !== undefined);
  
  if (!hasUpdateData) {
    throw new InvalidProfileData("수정할 데이터가 없습니다.", data);
  }

  try {
    const updatedUser = await updateUserProfile(userId, data);
    return updatedUser;
  } catch (error) {
    console.error("프로필 수정 에러:", error);
    throw new ProfileUpdateFailed("프로필 수정에 실패했습니다.", { userId, error: error.message });
  }
};

/**
 * 내가 등록한 맛집 목록 조회 - JWT 버전
 */
export const getMyRestaurants = async ({ userId, limit = 10, cursor = null }) => {
  console.log("getMyRestaurants 서비스 - userId:", userId, "limit:", limit, "cursor:", cursor);
  
  try {
    const result = await findUserRestaurants(userId, cursor, limit);
    console.log("getMyRestaurants 결과:", result);
    return result;
  } catch (error) {
    console.error('맛집 목록 조회 상세 오류:', error);
    // 에러 발생시 빈 결과 반환
    return {
      data: [],
      hasNextPage: false,
      nextCursor: null
    };
  }
};

/**
 * 맛집 정보 수정
 */
export const updateRestaurantService = async (restaurantId, userId, data) => {
  console.log("updateRestaurantService - restaurantId:", restaurantId, "userId:", userId, "data:", data);
  
  // 맛집 존재 확인을 임시로 건너뛰기 (DB 스키마 문제 때문)
  // const existingRestaurant = await findRestaurantById(restaurantId);
  // if (!existingRestaurant) {
  //   throw new NoRestData("맛집을 찾을 수 없습니다.", { restaurantId });
  // }

  // 업데이트할 데이터 필터링 (실제 존재하는 컬럼만)
  const updateFields = ['name', 'repre_menu', 'address'];
  
  const filteredData = {};
  updateFields.forEach(field => {
    if (data[field] !== undefined) {
      filteredData[field] = data[field];
    }
  });

  if (Object.keys(filteredData).length === 0) {
    throw new InvalidProfileData("수정할 데이터가 없습니다.", data);
  }

  try {
    const updatedRestaurant = await updateRestaurant(restaurantId, filteredData);
    return updatedRestaurant;
  } catch (error) {
    console.error("맛집 수정 에러:", error);
    throw new Error("맛집 정보 수정에 실패했습니다.");
  }
};

/**
 * 찜 등록 (409 에러 처리 추가)
 */
export const addZzimService = async (userId, restaurantId) => {
  console.log("addZzimService - userId:", userId, "restaurantId:", restaurantId);
  
  // 사용자 존재 확인
  const user = await findUserProfile(userId);
  if (!user) {
    throw new NoProfileData("사용자를 찾을 수 없습니다.", { userId });
  }

  // 🔧 맛집 존재 확인을 임시로 건너뛰기 (DB 스키마 문제)
  // const restaurant = await findRestaurantById(restaurantId);
  // if (!restaurant) {
  //   throw new NoRestData("맛집을 찾을 수 없습니다.", { restaurantId });
  // }

  // 이미 찜했는지 확인 - 409 에러로 처리
  const existingZzim = await findZzim(userId, restaurantId);
  if (existingZzim) {
    console.log("이미 찜한 맛집 - userId:", userId, "restaurantId:", restaurantId);
    // 409 Conflict 에러 던지기
    const error = new AlreadyZzimmed("이미 찜한 맛집입니다.", { userId, restaurantId });
    error.statusCode = 409; // 명시적으로 409 상태 코드 설정
    throw error;
  }

  try {
    const newZzim = await createZzim(userId, restaurantId);
    console.log("찜 등록 성공:", newZzim);
    return newZzim;
  } catch (error) {
    console.error('찜 등록 상세 오류:', error);
    throw new Error("찜 등록에 실패했습니다.");
  }
};

/**
 * 찜 해제
 */
export const removeZzimService = async (userId, restaurantId) => {
  console.log("removeZzimService - userId:", userId, "restaurantId:", restaurantId);
  
  // 찜 존재 확인
  const existingZzim = await findZzim(userId, restaurantId);
  if (!existingZzim) {
    throw new NoZzimData("찜한 맛집을 찾을 수 없습니다.", { userId, restaurantId });
  }

  try {
    await deleteZzim(existingZzim.id);
    console.log("찜 해제 성공 - zzimId:", existingZzim.id);
    return { success: true };
  } catch (error) {
    console.error('찜 해제 상세 오류:', error);
    throw new Error("찜 해제에 실패했습니다.");
  }
};

/**
 * 찜 목록 조회
 */
export const getZzimList = async (userId, limit = 10, cursor = null) => {
  console.log("getZzimList 서비스 - userId:", userId, "limit:", limit, "cursor:", cursor);
  
  try {
    const result = await findUserZzims(userId, limit, cursor);
    console.log("찜 목록 조회 결과:", result);
    return result;
  } catch (error) {
    console.error('찜 목록 조회 상세 오류:', error);
    // 에러 발생시 빈 결과 반환
    return {
      data: [],
      hasNextPage: false,
      nextCursor: null
    };
  }
};

/**
 * 사용자 리뷰 목록 조회
 */
export const getUserReviews = async (userId, limit = 10, cursor = null) => {
  console.log("getUserReviews 서비스 - userId:", userId, "limit:", limit, "cursor:", cursor);
  
  try {
    const result = await findUserReviews(userId, limit, cursor);
    console.log("사용자 리뷰 조회 결과:", result);
    return result;
  } catch (error) {
    console.error('사용자 리뷰 조회 상세 오류:', error);
    // 에러 발생시 빈 결과 반환
    return {
      data: [],
      hasNextPage: false,
      nextCursor: null
    };
  }
};

/**
 * 사용자 리뷰 삭제 서비스
 */
export const deleteUserReviewService = async (userId, reviewId) => {
  console.log("deleteUserReviewService - userId:", userId, "reviewId:", reviewId);
  
  // 1. 리뷰 존재 확인
  const review = await findReviewById(reviewId);
  if (!review) {
    throw new NoReviewData("삭제할 리뷰를 찾을 수 없습니다.", { reviewId });
  }

  // 2. 리뷰 작성자 확인
  if (review.user_id.toString() !== userId.toString()) {
    throw new NotYourReview("본인이 작성한 리뷰만 삭제할 수 있습니다.", { 
      userId, 
      reviewId,
      reviewOwnerId: review.user_id.toString()
    });
  }

  try {
    // 3. 리뷰 삭제 (관련 이미지도 함께 삭제)
    await deleteReview(reviewId);
    console.log("리뷰 삭제 성공 - reviewId:", reviewId);
    
    return { success: true, deletedReviewId: reviewId };
  } catch (error) {
    console.error('리뷰 삭제 상세 오류:', error);
    throw new Error("리뷰 삭제에 실패했습니다.");
  }
};