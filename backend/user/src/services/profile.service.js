import {
  findUserProfile,
  updateUserProfile,
} from "../repositories/profile.repository.js";
import {
  NoProfileData,
  InvalidProfileData,
  ProfileUpdateFailed,
} from "../errors.js";

export const getUserProfile = async (userId) => {
  const user = await findUserProfile(userId);
  if (!user) {
    throw new NoProfileData("사용자 프로필을 찾을 수 없습니다.", { userId });
  }
  return user;
};

export const updateUserProfileService = async (userId, data) => {
  const existing = await findUserProfile(userId);
  if (!existing) {
    throw new NoProfileData("사용자를 찾을 수 없습니다.", { userId });
  }

  const hasUpdateData = ["nickname", "exercise", "prefer", "allergy"].some(
    (k) => data[k] !== undefined
  );

  if (!hasUpdateData) {
    throw new InvalidProfileData("수정할 데이터가 없습니다.", data);
  }

  try {
    return await updateUserProfile(userId, data);
  } catch (err) {
    throw new ProfileUpdateFailed("프로필 수정에 실패했습니다.", {
      userId,
      error: err.message,
    });
  }
};
