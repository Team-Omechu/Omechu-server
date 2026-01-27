import {
  getMenu,
  getMenuInfo,
  recommendRandom,
} from "../repositories/menu.repository.js";

export const getMenuInfoService = async (menuName) => {
  try {
    const menuInfo = await getMenuInfo(menuName);
    if (!menuInfo) {
      console.error(`No menu info found for: ${menuName}`);
      return null;
    }
    return menuInfo;
  } catch (error) {
    console.error(`Error fetching menu info for ${menuName}:`, error);
    throw error;
  }
};

export const recommendRandomService = async (addition) => {
  try {
    const randomMenu = await recommendRandom(addition);
    if (!randomMenu) {
      console.error("No random menu found");
      return null;
    }
    return randomMenu;
  } catch (error) {
    console.error("Error fetching random menu:", error);
    throw error;
  }
};

export const getMenuService = async () => {
  try {
    const menus = await getMenu();
    if (!menus || menus.length === 0) {
      console.error("No menus found in service");
      return [];
    }
    return menus;
  } catch (error) {
    console.error("Error fetching menus from service:", error);
    throw error;
  }
};
