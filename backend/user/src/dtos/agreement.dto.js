export const bodyToAgreementDto = (body, userId) => {
  const agreeAll = body.agreeAll === true;

  return {
    user_id: userId,
    terms_of_service: agreeAll ? true : (body.termsOfService ?? false),
    privacy_policy: agreeAll ? true : (body.privacyPolicy ?? false),
    location_service: agreeAll ? true : (body.locationService ?? false),
    marketing_consent: agreeAll ? true : (body.marketingConsent ?? false),
    is_over14: agreeAll ? true : (body.isOver14 ?? false),
  };
};
