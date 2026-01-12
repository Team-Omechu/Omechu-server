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

import { InvalidProfileData } from "../errors.js";

const assertArray = (name, value) => {
  if (value !== undefined && !Array.isArray(value)) {
    throw new InvalidProfileData(`${name} must be array`);
  }
};

export const patchUserProfileService = async (userId, body) => {
  assertArray("prefer", body.prefer);
  assertArray("allergy", body.allergy);

  const user = await findUserById(userId);
  if (!user) {
    throw new InvalidProfileData("User not found");
  }

  if (Array.isArray(body.prefer)) {
    const mapped = body.prefer.map(convertPreferToEnum);
    if (mapped.some(v => v === null)) {
      throw new InvalidProfileData("Invalid prefer value", body.prefer);
    }
    await createUserPreferences(userId, mapped);
  }

  if (Array.isArray(body.allergy)) {
    const mapped = body.allergy.map(convertAllergyToEnum);
    if (mapped.some(v => v === null)) {
      throw new InvalidProfileData("Invalid allergy value", body.allergy);
    }
    await createUserAllergies(userId, mapped);
  }

  const userData = bodyToUserInfo(body);
  await updateUserInfo(userId, userData);

  const updatedUser = await findUserById(userId);
  return responseFromUser(updatedUser);
};
