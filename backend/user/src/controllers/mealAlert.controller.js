import { StatusCodes } from "http-status-codes";
import {
  getMealAlertSettings,
  updateMealAlertSettings,
  toggleMealAlerts,
} from "../services/mealAlert.service.js";

export const handleGetMealAlerts = async (req, res, next) => {
  /*
    #swagger.summary = '식사 알림 설정 조회 API'
    #swagger.description = '사용자가 설정한 아침/점심/저녁/야식 알림 여부 및 시간을 조회합니다.'
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.tags = ['MealAlert']

    #swagger.responses[200] = {
      description: "식사 알림 설정 조회 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  breakfast: {
                    type: "object",
                    properties: {
                      enabled: { type: "boolean", example: true },
                      time: { type: "string", example: "09:30" },
                      min: { type: "string", example: "07:00" },
                      max: { type: "string", example: "10:30" }
                    }
                  },
                  lunch: {
                    type: "object",
                    properties: {
                      enabled: { type: "boolean", example: true },
                      time: { type: "string", example: "14:30" },
                      min: { type: "string", example: "11:00" },
                      max: { type: "string", example: "15:30" }
                    }
                  },
                  dinner: {
                    type: "object",
                    properties: {
                      enabled: { type: "boolean", example: false },
                      time: { type: "string", example: "18:00" },
                      min: { type: "string", example: "16:00" },
                      max: { type: "string", example: "20:30" }
                    }
                  },
                  night: {
                    type: "object",
                    properties: {
                      enabled: { type: "boolean", example: true },
                      time: { type: "string", example: "23:30" },
                      min: { type: "string", example: "21:00" },
                      max: { type: "string", example: "02:00" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    #swagger.responses[401] = {
      description: "인증 실패",
    };
  */
  try {
    const userId = req.user.id;
    const result = await getMealAlertSettings(userId);
    res.status(StatusCodes.OK).success(result);
  } catch (err) {
    next(err);
  }
};

export const handleUpdateMealAlerts = async (req, res, next) => {
  /*
    #swagger.summary = '식사 알림 설정 수정 API'
    #swagger.description = '식사별 알림 ON/OFF 및 알림 시간을 설정합니다.'
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.tags = ['MealAlert']

    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              breakfast: {
                type: "object",
                properties: {
                  enabled: { type: "boolean", example: true },
                  time: { type: "string", example: "09:30" }
                }
              },
              lunch: {
                type: "object",
                properties: {
                  enabled: { type: "boolean", example: true },
                  time: { type: "string", example: "14:30" }
                }
              },
              dinner: {
                type: "object",
                properties: {
                  enabled: { type: "boolean", example: false }
                }
              },
              night: {
                type: "object",
                properties: {
                  enabled: { type: "boolean", example: true },
                  time: { type: "string", example: "23:30" }
                }
              }
            }
          }
        }
      }
    };

    #swagger.responses[200] = {
      description: "식사 알림 설정 수정 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                example: {
                  breakfast: { enabled: true, time: "09:30" },
                  lunch: { enabled: true, time: "14:30" },
                  dinner: { enabled: false },
                  night: { enabled: true, time: "23:30" }
                }
              }
            }
          }
        }
      }
    };

    #swagger.responses[400] = {
      description: "잘못된 요청",
    };

    #swagger.responses[401] = {
      description: "인증 실패",
    };
  */
  try {
    const userId = req.user.id;
    const result = await updateMealAlertSettings(userId, req.body);
    res.status(StatusCodes.OK).success(result);
  } catch (err) {
    next(err);
  }
};

export const handleToggleMealAlerts = async (req, res, next) => {
  /*
    #swagger.summary = '식사 알림 전체 ON/OFF API'
    #swagger.description = '모든 식사 알림을 한 번에 활성화 또는 비활성화합니다.'
    #swagger.security = [{
      "bearerAuth": []
    }]
    #swagger.tags = ['MealAlert']

    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              enabled: { type: "boolean", example: false }
            },
            required: ["enabled"]
          }
        }
      }
    };

    #swagger.responses[200] = {
      description: "식사 알림 전체 ON/OFF 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  enabled: { type: "boolean", example: false }
                }
              }
            }
          }
        }
      }
    };
  */
  try {
    const userId = req.user.id;
    const { enabled } = req.body;

    const result = await toggleMealAlerts(userId, enabled);
    res.status(StatusCodes.OK).success(result);
  } catch (err) {
    next(err);
  }
};
