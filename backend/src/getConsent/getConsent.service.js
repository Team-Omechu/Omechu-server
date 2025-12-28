import { findLatestAgreementConsent } from "../repositories/agreement.repository.js";
import { InvalidRequestError } from "../errors.js";

export const getAgreementConsentService = async (userId) => {
  const consent = await findLatestAgreementConsent(userId);

  if (!consent) {
    throw new InvalidRequestError("약관 동의 정보가 존재하지 않습니다.");
  }

  return consent;
};