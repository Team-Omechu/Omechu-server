// recommendManagement/recommendManagement.service.js

import {
  findUserExceptedMenuIds,
  removeMenuFromExceptList,
  addMenuToExceptList,
} from "../repositories/recommendManagement.repository.js";
import { getAllMenus, getMenuByName } from "../clients/menu.client.js";

import {
  NoParams,
  NoRestData,
  NoInCorrectParmas,
  NoInCorrectData,
} from "../errors.js";

/**
 * 추천 목록 관리 조회 서비스
 * - 추천 받을 메뉴 (전체 - 제외된 것들)
 * - 제외된 메뉴 목록
 */
export const getRecommendManagementService = async (userId) => {
  try {
    if (!userId) {
      throw new NoParams("사용자 ID가 필요합니다.");
    }

    const [allMenus, exceptedMenus] = await Promise.all([
      getAllMenus(),
      findUserExceptedMenuIds(userId),
    ]);

    const exceptedMenuIds = exceptedMenus.map((m) => m.menuId);

    const recommendMenus = allMenus.filter(
      (menu) => !exceptedMenuIds.includes(menu.id.toString()),
    );

    console.log("🔥 allMenus:", allMenus);

    return {
      summary: {
        totalMenus: allMenus.length,
        recommendMenus: recommendMenus.length,
        exceptedMenus: exceptedMenus.length,
      },
      recommendMenus,
      exceptedMenus: allMenus.filter((menu) =>
        exceptedMenuIds.includes(menu.id.toString()),
      ),
    };
  } catch (error) {
    console.error("🔥 getRecommendManagementService REAL ERROR:", error);
    throw new NoRestData("추천 목록 관리 조회 중 오류가 발생했습니다.", {
      userId,
      error: error.message,
    });
  }
};

/**
 * 메뉴를 제외 목록에 추가 (추천 받지 않기)
 */
export const addMenuToExceptService = async (userId, menuId, menuName) => {
  if (!userId) {
    throw new NoParams("사용자 ID가 필요합니다.", { userId });
  }

  let targetMenuId = menuId;

  // menuName → menu API 조회
  if (!menuId && menuName) {
    const menus = await getAllMenus();
    const found = menus.find((m) => m.name === menuName);

    if (!found) {
      throw new NoInCorrectData("해당 이름의 메뉴를 찾을 수 없습니다.");
    }

    targetMenuId = found.id;
  }

  if (!targetMenuId) {
    throw new NoInCorrectParmas("메뉴 ID 또는 메뉴 이름이 필요합니다.", {
      menuId,
      menuName,
    });
  }

  try {
    const result = await addMenuToExceptList(userId, targetMenuId);

    if (!result.isNew) {
      throw new NoInCorrectData("이미 제외된 메뉴입니다.", {
        userId,
        menuId: targetMenuId,
      });
    }

    return {
      id: result.id,
      menu: {
        id: targetMenuId,
      },
      message: "메뉴가 제외 목록에 추가되었습니다.",
    };
  } catch (error) {
    if (
      error instanceof NoParams ||
      error instanceof NoInCorrectData ||
      error instanceof NoInCorrectParmas
    ) {
      throw error;
    }

    throw new NoRestData("메뉴 제외 처리 중 오류가 발생했습니다.", {
      userId,
      menuId: targetMenuId,
      error: error.message,
    });
  }
};

/**
 * 제외 목록에서 메뉴 제거 (다시 추천 받기)
 */
export const removeMenuFromExceptService = async (userId, menuId, menuName) => {
  if (!userId) {
    throw new NoParams("사용자 ID가 필요합니다.", { userId });
  }

  let targetMenuId = menuId;

  // menuName → menu API로 ID 조회
  if (!menuId && menuName) {
    const menu = await getMenuByName(menuName);
    if (!menu) {
      throw new NoInCorrectData("해당 이름의 메뉴를 찾을 수 없습니다.", {
        menuName,
      });
    }
    targetMenuId = menu.id;
  }

  if (!targetMenuId) {
    throw new NoInCorrectParmas("메뉴 ID 또는 메뉴 이름이 필요합니다.", {
      menuId,
      menuName,
    });
  }

  try {
    const result = await removeMenuFromExceptList(userId, targetMenuId);

    if (!result.success) {
      throw new NoInCorrectData("제외 목록에서 해당 메뉴를 찾을 수 없습니다.", {
        userId,
        menuId: targetMenuId,
      });
    }

    return {
      success: true,
      message:
        "메뉴가 제외 목록에서 제거되었습니다. 이제 추천을 받을 수 있습니다.",
    };
  } catch (error) {
    if (
      error instanceof NoParams ||
      error instanceof NoInCorrectData ||
      error instanceof NoInCorrectParmas
    ) {
      throw error;
    }

    throw new NoRestData("메뉴 제외 해제 처리 중 오류가 발생했습니다.", {
      userId,
      menuId: targetMenuId,
      error: error.message,
    });
  }
};

export const getUserExceptedMenusService = async (userId) => {
  try {
    if (!userId) {
      throw new NoParams("사용자 ID가 필요합니다.");
    }

    const exceptedMenus = await findUserExceptedMenuIds(userId);

    const exceptedMenuIds = exceptedMenus.map((m) => m.menuId);

    return {
      exceptedMenus: exceptedMenuIds,
    };
  } catch (error) {
    console.error("🔥 getRecommendManagementService REAL ERROR:", error);
    throw new NoRestData("추천 목록 관리 조회 중 오류가 발생했습니다.", {
      userId,
      error: error.message,
    });
  }
};
