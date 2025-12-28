import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const createAgreementConsent = async (agreementData) => {
  console.log("Creating Agreement Consent with Data:", agreementData);  
  try {
    return await prisma.agreement_consent.create({ data: agreementData });
  } catch (error) {
    console.error("Repository Error:", error);  
    throw error;
  }
};

