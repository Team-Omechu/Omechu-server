import { StatusCodes } from "http-status-codes";
import * as battleService from "../services/battle.service.js";

/**
 * Battle Controller
 * REST API endpoints
 */

/**
 * Create battle
 * POST /api/battles
 */
export const handleCreateBattle = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "배틀방 생성"
    #swagger.description = "메뉴 배틀방을 생성하고 방장이 자동 입장합니다"
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["creatorNickname", "menuIds"],
            properties: {
              creatorNickname: {
                type: "string",
                description: "방장 닉네임 (2-50자)",
                example: "홍길동"
              },
              menuIds: {
                type: "array",
                description: "메뉴 ID 배열 (2-8개)",
                items: { type: "integer" },
                example: [1, 2, 3, 4]
              }
            }
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: "배틀방 생성 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "null" },
              success: {
                type: "object",
                properties: {
                  battleId: { type: "string", example: "550e8400-e29b-41d4-a716-446655440000" },
                  creatorNickname: { type: "string", example: "홍길동" },
                  status: { type: "string", example: "active" },
                  expiresAt: { type: "string", example: "2024-12-25T15:30:00Z" },
                  menus: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        menuId: { type: "string" },
                        menuName: { type: "string" },
                        boundaryAngle: { type: "number" },
                        menuOrder: { type: "integer" }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  */
  try {
    const { creatorNickname, menuIds } = req.body;

    if (!creatorNickname || !menuIds || !Array.isArray(menuIds)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_001",
          reason: "creatorNickname과 menuIds는 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    const result = await battleService.createBattleService(
      creatorNickname,
      menuIds.map((id) => BigInt(id))
    );

    return res.status(StatusCodes.CREATED).json({
      resultType: "SUCCESS",
      error: null,
      success: result,
    });
  } catch (error) {
    console.error("배틀 생성 에러:", error);
    return res.status(StatusCodes.BAD_REQUEST).json({
      resultType: "FAIL",
      error: {
        errorCode: "BATTLE_001",
        reason: error.message,
        data: null,
      },
      success: null,
    });
  }
};

/**
 * Get battle details
 * GET /api/battles/:battleId
 */
export const handleGetBattle = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "배틀방 조회"
    #swagger.description = "배틀방 상세 정보를 조회합니다"
    #swagger.parameters['battleId'] = {
      in: 'path',
      description: '배틀 ID (UUID)',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: "배틀방 조회 성공"
    }
  */
  try {
    const { battleId } = req.params;

    if (!battleId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_002",
          reason: "battleId는 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    const result = await battleService.getBattleDetailsService(battleId);

    return res.status(StatusCodes.OK).json({
      resultType: "SUCCESS",
      error: null,
      success: result,
    });
  } catch (error) {
    console.error("배틀 조회 에러:", error);
    return res.status(StatusCodes.NOT_FOUND).json({
      resultType: "FAIL",
      error: {
        errorCode: "BATTLE_002",
        reason: error.message,
        data: null,
      },
      success: null,
    });
  }
};

/**
 * Join battle
 * POST /api/battles/:battleId/join
 */
export const handleJoinBattle = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "배틀 참가"
    #swagger.description = "배틀방에 참가합니다"
    #swagger.parameters['battleId'] = {
      in: 'path',
      description: '배틀 ID (UUID)',
      required: true,
      type: 'string'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["nickname"],
            properties: {
              nickname: {
                type: "string",
                description: "참가자 닉네임 (2-50자)",
                example: "김철수"
              }
            }
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: "배틀 참가 성공"
    }
  */
  try {
    const { battleId } = req.params;
    const { nickname } = req.body;

    if (!battleId || !nickname) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_003",
          reason: "battleId와 nickname은 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    const result = await battleService.joinBattleService(battleId, nickname);

    return res.status(StatusCodes.CREATED).json({
      resultType: "SUCCESS",
      error: null,
      success: result,
    });
  } catch (error) {
    console.error("배틀 참가 에러:", error);

    const statusCode =
      error.message.includes("이미 사용 중인 닉네임")
        ? StatusCodes.CONFLICT
        : StatusCodes.BAD_REQUEST;

    return res.status(statusCode).json({
      resultType: "FAIL",
      error: {
        errorCode: "BATTLE_003",
        reason: error.message,
        data: null,
      },
      success: null,
    });
  }
};

/**
 * Execute spin
 * POST /api/battles/:battleId/spin
 */
export const handleSpin = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "스핀 실행"
    #swagger.description = "룰렛을 돌리고 결과를 저장합니다"
    #swagger.parameters['battleId'] = {
      in: 'path',
      description: '배틀 ID (UUID)',
      required: true,
      type: 'string'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["nickname", "stoppedAngle"],
            properties: {
              nickname: {
                type: "string",
                description: "참가자 닉네임",
                example: "김철수"
              },
              stoppedAngle: {
                type: "number",
                description: "룰렛이 멈춘 각도 (0-360)",
                example: 115.5
              }
            }
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: "스핀 실행 성공"
    }
  */
  try {
    const { battleId } = req.params;
    const { nickname, stoppedAngle } = req.body;

    if (!battleId || !nickname || stoppedAngle === undefined) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_004",
          reason: "battleId, nickname, stoppedAngle은 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    const result = await battleService.executeSpinService(
      battleId,
      nickname,
      parseFloat(stoppedAngle)
    );

    return res.status(StatusCodes.CREATED).json({
      resultType: "SUCCESS",
      error: null,
      success: result,
    });
  } catch (error) {
    console.error("스핀 실행 에러:", error);

    const statusCode =
      error.message.includes("이미 스핀을 완료")
        ? StatusCodes.CONFLICT
        : StatusCodes.BAD_REQUEST;

    return res.status(statusCode).json({
      resultType: "FAIL",
      error: {
        errorCode: "BATTLE_004",
        reason: error.message,
        data: null,
      },
      success: null,
    });
  }
};

/**
 * Get rankings
 * GET /api/battles/:battleId/rankings
 */
export const handleGetRankings = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "순위 조회"
    #swagger.description = "배틀 순위를 조회합니다"
    #swagger.parameters['battleId'] = {
      in: 'path',
      description: '배틀 ID (UUID)',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: "순위 조회 성공"
    }
  */
  try {
    const { battleId } = req.params;

    if (!battleId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_005",
          reason: "battleId는 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    const result = await battleService.getRankingsService(battleId);

    return res.status(StatusCodes.OK).json({
      resultType: "SUCCESS",
      error: null,
      success: { rankings: result },
    });
  } catch (error) {
    console.error("순위 조회 에러:", error);
    return res.status(StatusCodes.BAD_REQUEST).json({
      resultType: "FAIL",
      error: {
        errorCode: "BATTLE_005",
        reason: error.message,
        data: null,
      },
      success: null,
    });
  }
};

/**
 * Leave battle
 * DELETE /api/battles/:battleId/participants/:nickname
 */
export const handleLeaveBattle = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "배틀 퇴장"
    #swagger.description = "배틀방에서 퇴장합니다"
    #swagger.parameters['battleId'] = {
      in: 'path',
      description: '배틀 ID (UUID)',
      required: true,
      type: 'string'
    }
    #swagger.parameters['nickname'] = {
      in: 'path',
      description: '참가자 닉네임',
      required: true,
      type: 'string'
    }
    #swagger.responses[204] = {
      description: "퇴장 성공"
    }
  */
  try {
    const { battleId, nickname } = req.params;

    if (!battleId || !nickname) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_006",
          reason: "battleId와 nickname은 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    await battleService.leaveBattleService(battleId, nickname);

    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    console.error("퇴장 에러:", error);
    return res.status(StatusCodes.BAD_REQUEST).json({
      resultType: "FAIL",
      error: {
        errorCode: "BATTLE_006",
        reason: error.message,
        data: null,
      },
      success: null,
    });
  }
};
