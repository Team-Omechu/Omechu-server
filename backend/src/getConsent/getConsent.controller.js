import { getAgreementConsentService } from "../services/agreement.service.js";
import { StatusCodes } from "http-status-codes";

export const getAgreementConsent = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "약관 동의 조회"
  #swagger.description = "사용자의 가장 최신 약관 동의 내역을 조회합니다."
  #swagger.security = [{
    "bearerAuth": []
  }]

  #swagger.responses[200] = {
    description: "약관 동의 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                terms_of_service: { type: "boolean", example: true },
                privacy_policy: { type: "boolean", example: true },
                location_service: { type: "boolean", example: true },
                is_over14: { type: "boolean", example: true },
                created_at: { type: "string", example: "2023-01-01T00:00:00.000Z" }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[404] = {
    description: "약관 동의 정보 없음",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "NOT_FOUND" },
                reason: { type: "string", example: "약관 동의 정보가 존재하지 않습니다." }
              }
            },
            success: { type: "string", example: null }
          }
        }
      }
    }
  }
  */
  try {
    const userId = req.user.id;
    const consent = await getAgreementConsentService(userId);

    const serializedConsent = JSON.parse(JSON.stringify(consent, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    ));

    return res.status(StatusCodes.OK).success(serializedConsent);
  } catch (error) {
    next(error);
  }
};
