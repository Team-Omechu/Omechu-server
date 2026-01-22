import { v4 as uuidv4 } from "uuid";
import * as battleRepository from "../repositories/battle.repository.js";

/**
 * Battle Service
 * Business logic layer
 */

// ============================================
// Utility Functions (Business Logic)
// ============================================

/**
 * Calculate boundary angles for menus
 * @param {number} menuCount - Number of menus
 * @returns {number[]} Array of boundary angles
 */
const calculateBoundaryAngles = (menuCount) => {
  const anglePerMenu = 360 / menuCount;
  return Array.from({ length: menuCount }, (_, i) => i * anglePerMenu);
};

/**
 * Calculate circular distance between two angles
 * @param {number} angle1 - First angle (0-360)
 * @param {number} angle2 - Second angle (0-360)
 * @returns {number} Shortest distance
 */
const calculateCircularDistance = (angle1, angle2) => {
  const diff = Math.abs(angle1 - angle2);
  return Math.min(diff, 360 - diff);
};

/**
 * Find closest menu to stopped angle
 * @param {number} stoppedAngle - Angle where roulette stopped
 * @param {Array} battleMenus - Array of battle menus with boundary angles
 * @returns {Object} Closest menu with distance
 */
const findClosestMenu = (stoppedAngle, battleMenus) => {
  let closestMenu = null;
  let minDistance = Infinity;

  for (const menu of battleMenus) {
    const distance = calculateCircularDistance(
      stoppedAngle,
      parseFloat(menu.boundary_angle)
    );
    if (distance < minDistance) {
      minDistance = distance;
      closestMenu = {
        menuId: menu.menu_id,
        menuName: menu.menu_name,
        distance: distance,
      };
    }
  }

  return closestMenu;
};

/**
 * Validate menu count
 * @param {number} count - Number of menus
 * @throws {Error} If count is invalid
 */
const validateMenuCount = (count) => {
  if (count < 2 || count > 8) {
    throw new Error("메뉴는 2개에서 8개 사이로 선택해야 합니다");
  }
};

/**
 * Generate random stopped angle
 * @returns {number} Random angle between 0-360
 */
const generateRandomAngle = () => {
  return Math.random() * 360;
};

// ============================================
// Battle Management Services
// ============================================

/**
 * Create new battle
 * @param {string} creatorNickname - Battle creator's nickname
 * @param {Array<BigInt>} menuIds - Array of menu IDs
 * @returns {Object} Created battle info
 */
export const createBattleService = async (creatorNickname, menuIds) => {
  // Validation
  if (!creatorNickname || creatorNickname.trim().length < 2) {
    throw new Error("닉네임은 최소 2자 이상이어야 합니다");
  }

  validateMenuCount(menuIds.length);

  // Check for duplicate menu IDs
  const uniqueMenuIds = [...new Set(menuIds.map((id) => id.toString()))];
  if (uniqueMenuIds.length !== menuIds.length) {
    throw new Error("중복된 메뉴를 선택할 수 없습니다");
  }

  // Generate battle ID and expiration time
  const battleId = uuidv4();
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

  try {
    // Fetch menu details
    const menus = await battleRepository.findMenusByIds(menuIds);

    if (menus.length !== menuIds.length) {
      throw new Error("일부 메뉴를 찾을 수 없습니다");
    }

    // Calculate boundary angles
    const boundaryAngles = calculateBoundaryAngles(menuIds.length);

    // Create battle
    const battle = await battleRepository.createBattle({
      battleId,
      creatorNickname,
      expiresAt,
    });

    // Create battle menus
    const battleMenusData = menus.map((menu, index) => ({
      battle_id: battleId,
      menu_id: menu.id,
      menu_name: menu.name,
      boundary_angle: boundaryAngles[index],
      menu_order: index + 1,
    }));

    await battleRepository.createBattleMenus(battleMenusData);

    // Add creator as participant
    await battleRepository.createParticipant({
      battleId,
      nickname: creatorNickname,
      isCreator: true,
    });

    return {
      battleId: battle.battle_id,
      creatorNickname: battle.creator_nickname,
      status: battle.status,
      expiresAt: battle.expires_at,
      menus: battleMenusData.map((m) => ({
        menuId: m.menu_id.toString(),
        menuName: m.menu_name,
        boundaryAngle: parseFloat(m.boundary_angle),
        menuOrder: m.menu_order,
      })),
    };
  } catch (error) {
    console.error("배틀 생성 오류:", error);
    throw new Error(`배틀 생성 실패: ${error.message}`);
  }
};

/**
 * Get battle details
 * @param {string} battleId - Battle ID
 * @returns {Object} Battle details
 */
export const getBattleDetailsService = async (battleId) => {
  try {
    const battle = await battleRepository.findBattleById(battleId);

    if (!battle) {
      throw new Error("존재하지 않는 배틀입니다");
    }

    // Check if expired
    const now = new Date();
    if (now > battle.expires_at && battle.status !== "finished") {
      await battleRepository.updateBattleStatus(battleId, "finished", now);
      battle.status = "finished";
      battle.finished_at = now;
    }

    return {
      battleId: battle.battle_id,
      creatorNickname: battle.creator_nickname,
      status: battle.status,
      participantCount: battle.participant_count,
      createdAt: battle.created_at,
      finishedAt: battle.finished_at,
      expiresAt: battle.expires_at,
      menus: battle.battle_menus.map((m) => ({
        menuId: m.menu_id.toString(),
        menuName: m.menu_name,
        boundaryAngle: parseFloat(m.boundary_angle),
        menuOrder: m.menu_order,
        imageLink: m.menu?.image_link || null,
      })),
      participants: battle.battle_participants.map((p) => ({
        nickname: p.nickname,
        isCreator: p.is_creator,
        joinedAt: p.joined_at,
      })),
      spinResults: battle.spin_results.map((r) => ({
        nickname: r.nickname,
        stoppedAngle: parseFloat(r.stopped_angle),
        closestMenuName: r.closest_menu_name,
        distanceToBoundary: parseFloat(r.distance_to_boundary),
        rank: r.rank,
        spunAt: r.spun_at,
      })),
    };
  } catch (error) {
    console.error("배틀 조회 오류:", error);
    throw new Error(`배틀 조회 실패: ${error.message}`);
  }
};

/**
 * Join battle
 * @param {string} battleId - Battle ID
 * @param {string} nickname - Participant's nickname
 * @returns {Object} Join result
 */
export const joinBattleService = async (battleId, nickname) => {
  // Validation
  if (!nickname || nickname.trim().length < 2) {
    throw new Error("닉네임은 최소 2자 이상이어야 합니다");
  }

  if (nickname.length > 50) {
    throw new Error("닉네임은 최대 50자까지 입력 가능합니다");
  }

  try {
    // Check if battle exists
    const battle = await battleRepository.findBattleById(battleId);

    if (!battle) {
      throw new Error("존재하지 않는 배틀입니다");
    }

    // Check if battle is expired or finished
    const now = new Date();
    if (now > battle.expires_at || battle.status === "finished") {
      throw new Error("종료된 배틀입니다");
    }

    // Check nickname duplication
    const existingParticipant = await battleRepository.findParticipantByNickname(
      battleId,
      nickname
    );

    if (existingParticipant) {
      throw new Error("이미 사용 중인 닉네임입니다");
    }

    // Add participant
    const participant = await battleRepository.createParticipant({
      battleId,
      nickname,
      isCreator: false,
    });

    // Increment participant count
    await battleRepository.incrementParticipantCount(battleId);

    return {
      participantId: participant.id.toString(),
      nickname: participant.nickname,
      joinedAt: participant.joined_at,
    };
  } catch (error) {
    console.error("배틀 참가 오류:", error);
    throw new Error(`배틀 참가 실패: ${error.message}`);
  }
};

/**
 * Execute spin (백엔드에서 랜덤 각도 생성)
 * @param {string} battleId - Battle ID
 * @param {string} nickname - Participant's nickname
 * @returns {Object} Spin result
 */
export const executeSpinService = async (battleId, nickname) => {
  try {
    // Check if battle exists
    const battle = await battleRepository.findBattleById(battleId);

    if (!battle) {
      throw new Error("존재하지 않는 배틀입니다");
    }

    // Check if battle is active
    const now = new Date();
    if (now > battle.expires_at || battle.status === "finished") {
      throw new Error("종료된 배틀입니다");
    }

    // Check if participant exists
    const participant = await battleRepository.findParticipantByNickname(
      battleId,
      nickname
    );

    if (!participant) {
      throw new Error("배틀에 참가하지 않은 사용자입니다");
    }

    // Check if already spun
    const existingSpin = await battleRepository.findSpinResultByNickname(
      battleId,
      nickname
    );

    if (existingSpin) {
      throw new Error("이미 스핀을 완료했습니다");
    }

    // 🎯 백엔드에서 랜덤 각도 생성!
    const stoppedAngle = generateRandomAngle();

    // Find closest menu
    const battleMenus = await battleRepository.findBattleMenus(battleId);
    const closestMenu = findClosestMenu(stoppedAngle, battleMenus);

    // Create spin result (temporary rank = 0)
    const spinResult = await battleRepository.createSpinResult({
      battleId,
      nickname,
      stoppedAngle,
      closestMenuId: closestMenu.menuId,
      closestMenuName: closestMenu.menuName,
      distanceToBoundary: closestMenu.distance,
      rank: 0,
    });

    // Recalculate all rankings
    await recalculateRankingsService(battleId);

    // Fetch updated spin result
    const updatedResult = await battleRepository.findSpinResultByNickname(
      battleId,
      nickname
    );

    return {
      resultId: updatedResult.id.toString(),
      nickname: updatedResult.nickname,
      stoppedAngle: parseFloat(updatedResult.stopped_angle),
      closestMenuId: updatedResult.closest_menu_id.toString(),
      closestMenuName: updatedResult.closest_menu_name,
      distanceToBoundary: parseFloat(updatedResult.distance_to_boundary),
      rank: updatedResult.rank,
      spunAt: updatedResult.spun_at,
    };
  } catch (error) {
    console.error("스핀 실행 오류:", error);
    throw new Error(`스핀 실행 실패: ${error.message}`);
  }
};

/**
 * Recalculate rankings for all spin results
 * @param {string} battleId - Battle ID
 */
export const recalculateRankingsService = async (battleId) => {
  try {
    // Fetch all spin results (already sorted by distance, then time)
    const spinResults = await battleRepository.findAllSpinResults(battleId);

    // Assign ranks
    const rankUpdates = spinResults.map((result, index) => ({
      id: result.id,
      rank: index + 1,
    }));

    // Update all ranks
    await battleRepository.updateAllRanks(rankUpdates);
  } catch (error) {
    console.error("순위 재계산 오류:", error);
    throw new Error(`순위 재계산 실패: ${error.message}`);
  }
};

/**
 * Get battle rankings
 * @param {string} battleId - Battle ID
 * @returns {Array} Rankings
 */
export const getRankingsService = async (battleId) => {
  try {
    const spinResults = await battleRepository.findAllSpinResults(battleId);

    return spinResults.map((result) => ({
      rank: result.rank,
      nickname: result.nickname,
      stoppedAngle: parseFloat(result.stopped_angle),
      closestMenuName: result.closest_menu_name,
      distanceToBoundary: parseFloat(result.distance_to_boundary),
      spunAt: result.spun_at,
    }));
  } catch (error) {
    console.error("순위 조회 오류:", error);
    throw new Error(`순위 조회 실패: ${error.message}`);
  }
};

/**
 * Finish battle manually (방장만 가능)
 * @param {string} battleId - Battle ID
 * @param {string} nickname - Nickname (must be creator)
 * @returns {Object} Finish result with winner info
 */
export const finishBattleService = async (battleId, nickname) => {
  try {
    // Check if battle exists
    const battle = await battleRepository.findBattleById(battleId);

    if (!battle) {
      throw new Error("존재하지 않는 배틀입니다");
    }

    // Check if already finished
    if (battle.status === "finished") {
      throw new Error("이미 종료된 배틀입니다");
    }

    // Check if participant is creator
    const participant = await battleRepository.findParticipantByNickname(
      battleId,
      nickname
    );

    if (!participant) {
      throw new Error("배틀에 참가하지 않은 사용자입니다");
    }

    if (!participant.is_creator) {
      throw new Error("배틀 방장만 마감할 수 있습니다");
    }

    // Update battle status to finished
    const now = new Date();
    await battleRepository.updateBattleStatus(battleId, "finished", now);

    // Get winner (rank 1)
    const rankings = await battleRepository.findAllSpinResults(battleId);
    const winner = rankings.length > 0 ? rankings[0] : null;

    return {
      battleId: battle.battle_id,
      status: "finished",
      finishedAt: now,
      winner: winner
        ? {
            nickname: winner.nickname,
            closestMenuName: winner.closest_menu_name,
            distanceToBoundary: parseFloat(winner.distance_to_boundary),
            rank: winner.rank,
          }
        : null,
    };
  } catch (error) {
    console.error("배틀 마감 오류:", error);
    throw new Error(`배틀 마감 실패: ${error.message}`);
  }
};

/**
 * Leave battle
 * @param {string} battleId - Battle ID
 * @param {string} nickname - Participant's nickname
 */
export const leaveBattleService = async (battleId, nickname) => {
  try {
    // Check if participant exists
    const participant = await battleRepository.findParticipantByNickname(
      battleId,
      nickname
    );

    if (!participant) {
      throw new Error("배틀에 참가하지 않은 사용자입니다");
    }

    // Delete participant
    await battleRepository.deleteParticipant(battleId, nickname);

    // Decrement participant count
    await battleRepository.decrementParticipantCount(battleId);
  } catch (error) {
    console.error("배틀 퇴장 오류:", error);
    throw new Error(`배틀 퇴장 실패: ${error.message}`);
  }
};

/**
 * Cleanup expired battles (Cron job)
 */
export const cleanupExpiredBattlesService = async () => {
  try {
    const result = await battleRepository.updateExpiredBattlesToFinished();
    console.log(`${result.count}개의 만료된 배틀을 종료 처리했습니다`);
    return result.count;
  } catch (error) {
    console.error("만료 배틀 정리 오류:", error);
    throw error;
  }
};
