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
    #swagger.description = "메뉴 배틀방을 생성합니다. 방장은 이후 참가 시 자동 설정됩니다."
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["menuIds"],
            properties: {
              menuIds: {
                type: "array",
                description: "메뉴 ID 배열 (2-8개)",
                items: { type: "integer" },
                example: [1, 2, 3, 4]
              },
              creatorNickname: {
                type: "string",
                description: "방장 닉네임 (선택사항, 제공하지 않으면 첫 참가자가 방장)",
                example: "홍길동"
              }
            }
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: "배틀방 생성 성공"
    }
  */
  try {
    const { menuIds, creatorNickname } = req.body;

    if (!menuIds || !Array.isArray(menuIds)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_001",
          reason: "menuIds는 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    const result = await battleService.createBattleService(
      menuIds.map((id) => BigInt(id)),
      creatorNickname // optional
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
 * Execute spin (백엔드에서 랜덤 각도 생성)
 * POST /api/battles/:battleId/spin
 */
export const handleSpin = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "스핀 실행"
    #swagger.description = "룰렛을 돌립니다. 멈춤 버튼 클릭 시 백엔드에서 랜덤 각도를 생성합니다"
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
                description: "참가자 닉네임",
                example: "김철수"
              }
            }
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: "스핀 실행 성공",
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
                  resultId: { type: "string" },
                  nickname: { type: "string" },
                  stoppedAngle: { type: "number", description: "백엔드에서 생성된 랜덤 각도", example: 115.5 },
                  closestMenuName: { type: "string" },
                  distanceToBoundary: { type: "number" },
                  rank: { type: "integer" },
                  spunAt: { type: "string", format: "date-time" }
                }
              }
            }
          }
        }
      }
    }
  */
  try {
    const { battleId } = req.params;
    const { nickname } = req.body;

    if (!battleId || !nickname) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_004",
          reason: "battleId와 nickname은 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    // stoppedAngle 파라미터 제거! 백엔드에서 생성
    const result = await battleService.executeSpinService(battleId, nickname);

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
 * Finish battle (방장만 가능)
 * PATCH /api/battles/:battleId/finish
 */
export const handleFinishBattle = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "배틀 마감"
    #swagger.description = "배틀을 수동으로 마감합니다 (방장만 가능)"
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
                description: "방장 닉네임",
                example: "홍길동"
              }
            }
          }
        }
      }
    }
    #swagger.responses[200] = {
      description: "배틀 마감 성공",
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
                  battleId: { type: "string" },
                  status: { type: "string", example: "finished" },
                  finishedAt: { type: "string", format: "date-time" },
                  winner: {
                    type: "object",
                    properties: {
                      nickname: { type: "string" },
                      closestMenuName: { type: "string" },
                      distanceToBoundary: { type: "number" },
                      rank: { type: "integer", example: 1 }
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
    const { battleId } = req.params;
    const { nickname } = req.body;

    if (!battleId || !nickname) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_007",
          reason: "battleId와 nickname은 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    const result = await battleService.finishBattleService(battleId, nickname);

    return res.status(StatusCodes.OK).json({
      resultType: "SUCCESS",
      error: null,
      success: result,
    });
  } catch (error) {
    console.error("배틀 마감 에러:", error);

    const statusCode =
      error.message.includes("방장만") || error.message.includes("이미 종료")
        ? StatusCodes.FORBIDDEN
        : StatusCodes.BAD_REQUEST;

    return res.status(statusCode).json({
      resultType: "FAIL",
      error: {
        errorCode: "BATTLE_007",
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

/**
 * Check if nickname is the creator
 * GET /api/battles/:battleId/is-creator/:nickname
 */
export const handleIsCreator = async (req, res) => {
  /*
    #swagger.tags = ["Battle"]
    #swagger.summary = "방장 확인"
    #swagger.description = "해당 닉네임이 배틀의 방장인지 확인합니다"
    #swagger.parameters['battleId'] = {
      in: 'path',
      description: '배틀방 ID',
      required: true,
      type: 'string'
    }
    #swagger.parameters['nickname'] = {
      in: 'path',
      description: '확인할 닉네임',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: "확인 성공",
      schema: {
        resultType: "SUCCESS",
        error: null,
        success: {
          battleId: "1234",
          nickname: "홍길동",
          isCreator: true,
          creatorNickname: "홍길동"
        }
      }
    }
  */
  try {
    const { battleId, nickname } = req.params;

    if (!battleId || !nickname) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "BATTLE_001",
          reason: "battleId와 nickname은 필수입니다",
          data: null,
        },
        success: null,
      });
    }

    // Get battle details
    const battle = await battleService.getBattleDetailsService(battleId);

    // Check if nickname matches creator
    const isCreator = battle.creatorNickname === nickname;

    return res.status(StatusCodes.OK).json({
      resultType: "SUCCESS",
      error: null,
      success: {
        battleId,
        nickname,
        isCreator,
        creatorNickname: battle.creatorNickname,
      },
    });
  } catch (error) {
    console.error("방장 확인 에러:", error);

    if (error.message.includes("존재하지 않는")) {
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

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
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