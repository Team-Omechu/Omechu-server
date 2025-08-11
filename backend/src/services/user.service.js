import {
  findUserById,
  updateUserInfo,
  createUserPreferences,
  createUserAllergies,
} from "../repositories/user.repository.js";

import {
  bodyToUserInfo,
  responseFromUser,
  convertPreferToEnum,
  convertAllergyToEnum,
} from "../dtos/user.dto.js";

const toArray = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

export const patchUserProfileService = async (userId, body) => {
  try {
    const userData = bodyToUserInfo(body, userId);
    console.log("updateUserInfo에 전달될 데이터:", userData);

    await updateUserInfo(userId, userData);

    const preferArr = toArray(body.prefer);
    if (preferArr.length) {
      const preferEnums = preferArr.map(convertPreferToEnum).filter(Boolean);
      await createUserPreferences(userId, preferEnums);
    }

    const allergyArr = toArray(body.allergy);
    if (allergyArr.length) {
      const allergyEnums = allergyArr.map(convertAllergyToEnum).filter(Boolean);
      await createUserAllergies(userId, allergyEnums);
    }

    const updatedUser = await findUserById(userId);
    return responseFromUser(updatedUser);
  } catch (error) {
    console.error("patchUserProfileService 에러:", error.message);
    console.error("meta:", error.meta);
    throw error;
  }
};
