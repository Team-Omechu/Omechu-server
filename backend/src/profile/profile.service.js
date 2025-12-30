// profile/profile.service.js

import {
  findUserProfile,
  updateUserProfile,
} from "./profile.repository.js";
import {
  NoProfileData,
  ProfileUpdateFailed,
  InvalidProfileData,
} from "../errors.js";

/**
 * 사용자 프로필 조회
 * @param {number} userId - 사용자 ID
 * @returns {Promise<Object>} 사용자 프로필 데이터
 * @throws {NoProfileData} 사용자를 찾을 수 없는 경우
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
 * @param {number} userId - 사용자 ID
 * @param {Object} data - 수정할 데이터
 * @returns {Promise<Object>} 수정된 사용자 프로필
 * @throws {NoProfileData} 사용자를 찾을 수 없는 경우
 * @throws {InvalidProfileData} 수정할 데이터가 없는 경우
 * @throws {ProfileUpdateFailed} 프로필 수정 실패 시
 */
export const updateUserProfileService = async (userId, data) => {
  console.log("updateUserProfileService - userId:", userId);
  
  const existingUser = await findUserProfile(userId);
  if (!existingUser) {
    throw new NoProfileData("사용자를 찾을 수 없습니다.", { userId });
  }

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