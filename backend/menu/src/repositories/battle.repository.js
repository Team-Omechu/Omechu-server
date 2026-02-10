import { prisma } from "../db.config.js";

/**
 * Battle Repository
 * Pure data access layer - NO business logic
 */

// ============================================
// Battles CRUD
// ============================================

export const createBattle = async (battleData) => {
  return await prisma.battles.create({
    data: {
      battle_id: battleData.battleId,
      creator_nickname: battleData.creatorNickname,
      status: "active",
      participant_count: battleData.creatorNickname ? 1 : 0, // 0 if no creator yet
      expires_at: battleData.expiresAt,
    },
  });
};

export const findBattleById = async (battleId) => {
  return await prisma.battles.findUnique({
    where: { battle_id: battleId },
    include: {
      battle_participants: {
        orderBy: { joined_at: "asc" },
      },
      battle_menus: {
        orderBy: { menu_order: "asc" },
      },
      spin_results: {
        orderBy: [{ distance_to_boundary: "asc" }, { spun_at: "asc" }],
      },
    },
  });
};

export const updateBattleStatus = async (battleId, status, finishedAt = null) => {
  return await prisma.battles.update({
    where: { battle_id: battleId },
    data: {
      status,
      ...(finishedAt && { finished_at: finishedAt }),
    },
  });
};

export const updateBattleCreator = async (battleId, creatorNickname) => {
  return await prisma.battles.update({
    where: { battle_id: battleId },
    data: {
      creator_nickname: creatorNickname,
    },
  });
};

export const incrementParticipantCount = async (battleId) => {
  return await prisma.battles.update({
    where: { battle_id: battleId },
    data: {
      participant_count: { increment: 1 },
    },
  });
};

export const decrementParticipantCount = async (battleId) => {
  return await prisma.battles.update({
    where: { battle_id: battleId },
    data: {
      participant_count: { decrement: 1 },
    },
  });
};

export const findExpiredBattles = async () => {
  const now = new Date();
  return await prisma.battles.findMany({
    where: {
      expires_at: { lt: now },
      status: { in: ["waiting", "active"] },
    },
  });
};

export const updateExpiredBattlesToFinished = async () => {
  const now = new Date();
  return await prisma.battles.updateMany({
    where: {
      expires_at: { lt: now },
      status: { in: ["waiting", "active"] },
    },
    data: {
      status: "finished",
      finished_at: now,
    },
  });
};

// ============================================
// Battle Participants CRUD
// ============================================

export const createParticipant = async (participantData) => {
  return await prisma.battle_participants.create({
    data: {
      battle_id: participantData.battleId,
      nickname: participantData.nickname,
      is_creator: participantData.isCreator || false,
    },
  });
};

export const findParticipantByNickname = async (battleId, nickname) => {
  return await prisma.battle_participants.findFirst({
    where: {
      battle_id: battleId,
      nickname: nickname,
    },
  });
};

export const findAllParticipants = async (battleId) => {
  return await prisma.battle_participants.findMany({
    where: { battle_id: battleId },
    orderBy: { joined_at: "asc" },
  });
};

export const deleteParticipant = async (battleId, nickname) => {
  return await prisma.battle_participants.deleteMany({
    where: {
      battle_id: battleId,
      nickname: nickname,
    },
  });
};

// ============================================
// Battle Menus CRUD
// ============================================

export const createBattleMenus = async (battleMenusData) => {
  return await prisma.battle_menus.createMany({
    data: battleMenusData,
  });
};

export const findBattleMenus = async (battleId) => {
  return await prisma.battle_menus.findMany({
    where: { battle_id: battleId },
    include: {
      menu: {
        select: {
          id: true,
          name: true,
          image_link: true,
        },
      },
    },
    orderBy: { menu_order: "asc" },
  });
};

export const findMenusByIds = async (menuIds) => {
  return await prisma.menu.findMany({
    where: {
      id: { in: menuIds },
    },
    select: {
      id: true,
      name: true,
      image_link: true,
    },
  });
};

// ============================================
// Spin Results CRUD
// ============================================

export const createSpinResult = async (spinData) => {
  return await prisma.spin_results.create({
    data: {
      battle_id: spinData.battleId,
      nickname: spinData.nickname,
      stopped_angle: spinData.stoppedAngle,
      closest_menu_id: spinData.closestMenuId,
      closest_menu_name: spinData.closestMenuName,
      distance_to_boundary: spinData.distanceToBoundary,
      rank: spinData.rank,
    },
  });
};

export const findSpinResultByNickname = async (battleId, nickname) => {
  return await prisma.spin_results.findFirst({
    where: {
      battle_id: battleId,
      nickname: nickname,
    },
  });
};

export const findAllSpinResults = async (battleId) => {
  return await prisma.spin_results.findMany({
    where: { battle_id: battleId },
    orderBy: [{ distance_to_boundary: "asc" }, { spun_at: "asc" }],
  });
};

export const updateSpinResultRank = async (resultId, rank) => {
  return await prisma.spin_results.update({
    where: { id: resultId },
    data: { rank },
  });
};

export const updateAllRanks = async (rankUpdates) => {
  const updatePromises = rankUpdates.map((update) =>
    prisma.spin_results.update({
      where: { id: update.id },
      data: { rank: update.rank },
    })
  );
  return await Promise.all(updatePromises);
};