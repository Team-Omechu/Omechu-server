import {
  findUserById,
  updateUserInfo,
  createUserPreferences,
  createUserAllergies,
} from "./user.repository.js";

import {
  bodyToUserInfo,
  responseFromUser,
  convertPreferToEnum,
  convertAllergyToEnum,
} from "../dtos/user.dto.js";

import { InvalidProfileData } from "../errors.js";

const assertArrayIfPresent = (fieldName, value) => {
  if (value === undefined || value === null) return;
  if (!Array.isArray(value)) {
    const err = new InvalidProfileData(
      `${fieldName} must be an array of allowed strings`,
      { [fieldName]: value }
    );
    err.statusCode = 400;
    throw err;
  }
};

export const patchUserProfileService = async (userId, body) => {
  try {
    // 1) 타입 검증
    assertArrayIfPresent("prefer", body.prefer);
    assertArrayIfPresent("allergy", body.allergy);

    // 2) 값 검증
    if (Array.isArray(body.prefer)) {
      const mapped = body.prefer.map((p) => convertPreferToEnum(p));
      if (mapped.some((v) => v === null)) {
        const err = new InvalidProfileData("Invalid prefer value(s)", {
          prefer: body.prefer,
        });
        err.statusCode = 400;
        throw err;
      }
      if (mapped.length) await createUserPreferences(userId, mapped);
    }

    if (Array.isArray(body.allergy)) {
      const mapped = body.allergy.map((a) => convertAllergyToEnum(a));
      if (mapped.some((v) => v === null)) {
        const err = new InvalidProfileData("Invalid allergy value(s)", {
          allergy: body.allergy,
        });
        err.statusCode = 400;
        throw err;
      }
      if (mapped.length) await createUserAllergies(userId, mapped);
    }

    const userData = bodyToUserInfo(body, userId);
    await updateUserInfo(userId, userData);

    const updatedUser = await findUserById(userId);
    return responseFromUser(updatedUser);
  } catch (error) {
    // 그대로
    console.error("patchUserProfileService 에러:", error.message);
    console.error("meta:", error.meta);
    throw error;
  }
};
