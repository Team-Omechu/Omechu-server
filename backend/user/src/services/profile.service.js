import {
  findUserProfile,
  updateUserProfile,
} from "../repositories/profile.repository.js";
import {
  NoProfileData,
  InvalidProfileData,
  ProfileUpdateFailed,
} from "../errors.js";

// 조회
export const getUserProfile = async (userId) => {
  const user = await findUserProfile(userId);
  if (!user) {
    throw new NoProfileData("사용자 프로필을 찾을 수 없습니다.", { userId });
  }
  return user;
};

// 수정
export const updateUserProfileService = async (profileUpdateDto) => {
  const { userId, nickname, exercise, prefer, allergy } = profileUpdateDto;

  const existing = await findUserProfile(userId);
  if (!existing) {
    throw new NoProfileData("사용자를 찾을 수 없습니다.", { userId });
  }

  const hasUpdateData = [nickname, exercise, prefer, allergy].some(
    (v) => v !== undefined
  );

  if (!hasUpdateData) {
    throw new InvalidProfileData("수정할 데이터가 없습니다.", profileUpdateDto);
  }

  try {
    return await updateUserProfile(userId, {
      nickname,
      exercise,
      prefer,
      allergy,
    });
  } catch (err) {
    throw new ProfileUpdateFailed("프로필 수정에 실패했습니다.", {
      userId,
      error: err.message,
    });
  }
};
