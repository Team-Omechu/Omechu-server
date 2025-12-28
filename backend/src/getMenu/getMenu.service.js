import { getMenu } from "./getMenu.repository.js";

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
