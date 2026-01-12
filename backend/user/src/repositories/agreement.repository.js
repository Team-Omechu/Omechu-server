import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const upsertAgreementConsent = async (agreementData) => {
  return prisma.agreement_consent.upsert({
    where: {
      user_id: agreementData.user_id, // UNIQUE ±âÁØ
    },
    update: {
      terms_of_service: agreementData.terms_of_service,
      privacy_policy: agreementData.privacy_policy,
      location_service: agreementData.location_service,
      marketing_consent: agreementData.marketing_consent,
      is_over14: agreementData.is_over14,
      created_at: new Date(),
    },
    create: agreementData,
  });
};


export const findLatestAgreementConsent = async (userId) => {
  return await prisma.agreement_consent.findFirst({
    where: { user_id: userId },
    orderBy: { created_at: "desc" }
  });
};