import {
  getMenu,
  recommendRandom,
  getExceptedMenu,
} from "../repositories/menu.repository.js";

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

export const getMenuService = async ({ menuId, limit = 15 }) => {
  try {
    const menus = await getMenu({ menuId, limit });
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

export const getExceptedMenusService = async (exceptedMenuIds) => {
  try {
    const exceptedMenus = await getExceptedMenu({ menuIds: exceptedMenuIds });
    if (!exceptedMenus || exceptedMenus.length === 0) {
      console.error("No excepted menus found in service");
      return [];
    }
    return exceptedMenus;
  } catch (error) {
    console.error("Error fetching excepted menus from service:", error);
    throw error;
  }
};
