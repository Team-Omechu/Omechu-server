import { createAgreementConsent } from "./saveConsent.repository.js";
import { InvalidRequestError } from "../errors.js";

export const handleAgreementConsentService = async (agreementData) => {
  try {
    const { terms_of_service, privacy_policy, location_service, is_over14 } = agreementData;

    if (!terms_of_service || !privacy_policy || !location_service || !is_over14) {
      throw new InvalidRequestError("필수 항목에 동의하지 않았습니다.");
    }

    const result = await createAgreementConsent(agreementData);
    return result;
  } catch (error) {
    console.error("Service Error:", error);  
    throw error;
  }
};
