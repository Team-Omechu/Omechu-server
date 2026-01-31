import { getMenuInfo } from "../repositories/menuInfo.repository.js";

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
