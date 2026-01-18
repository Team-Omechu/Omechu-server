/**
 * Battle DTOs
 * Data validation and transformation
 */

/**
 * Validate create battle request
 */
export const validateCreateBattle = (data) => {
  const errors = [];

  if (!data.creatorNickname || typeof data.creatorNickname !== "string") {
    errors.push("creatorNickname은 필수 문자열입니다");
  } else if (data.creatorNickname.trim().length < 2) {
    errors.push("닉네임은 최소 2자 이상이어야 합니다");
  } else if (data.creatorNickname.length > 50) {
    errors.push("닉네임은 최대 50자까지 입력 가능합니다");
  }

  if (!data.menuIds || !Array.isArray(data.menuIds)) {
    errors.push("menuIds는 필수 배열입니다");
  } else if (data.menuIds.length < 2 || data.menuIds.length > 8) {
    errors.push("메뉴는 2개에서 8개 사이로 선택해야 합니다");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate join battle request
 */
export const validateJoinBattle = (data) => {
  const errors = [];

  if (!data.nickname || typeof data.nickname !== "string") {
    errors.push("nickname은 필수 문자열입니다");
  } else if (data.nickname.trim().length < 2) {
    errors.push("닉네임은 최소 2자 이상이어야 합니다");
  } else if (data.nickname.length > 50) {
    errors.push("닉네임은 최대 50자까지 입력 가능합니다");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate spin request (stoppedAngle 제거!)
 */
export const validateSpin = (data) => {
  const errors = [];

  if (!data.nickname || typeof data.nickname !== "string") {
    errors.push("nickname은 필수 문자열입니다");
  }

  // stoppedAngle 검증 제거!
  // 백엔드에서 랜덤 생성하므로 필요 없음

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate finish battle request
 */
export const validateFinishBattle = (data) => {
  const errors = [];

  if (!data.nickname || typeof data.nickname !== "string") {
    errors.push("nickname은 필수 문자열입니다");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Transform battle response
 */
export const transformBattleResponse = (battle) => {
  return {
    battleId: battle.battle_id,
    creatorNickname: battle.creator_nickname,
    status: battle.status,
    participantCount: battle.participant_count,
    createdAt: battle.created_at,
    finishedAt: battle.finished_at,
    expiresAt: battle.expires_at,
  };
};

/**
 * Transform menu response
 */
export const transformMenuResponse = (menu) => {
  return {
    menuId: menu.menu_id?.toString() || menu.id?.toString(),
    menuName: menu.menu_name || menu.name,
    boundaryAngle: menu.boundary_angle
      ? parseFloat(menu.boundary_angle)
      : undefined,
    menuOrder: menu.menu_order,
    imageLink: menu.image_link,
  };
};

/**
 * Transform participant response
 */
export const transformParticipantResponse = (participant) => {
  return {
    participantId: participant.id?.toString(),
    nickname: participant.nickname,
    isCreator: participant.is_creator,
    joinedAt: participant.joined_at,
  };
};

/**
 * Transform spin result response
 */
export const transformSpinResultResponse = (result) => {
  return {
    resultId: result.id?.toString(),
    nickname: result.nickname,
    stoppedAngle: parseFloat(result.stopped_angle),
    closestMenuId: result.closest_menu_id?.toString(),
    closestMenuName: result.closest_menu_name,
    distanceToBoundary: parseFloat(result.distance_to_boundary),
    rank: result.rank,
    spunAt: result.spun_at,
  };
};
