import { prisma } from "../db.config.js";

export const getMenu = async () => {
	try {
		const menus = await prisma.menu.findMany({
			select: {
				name: true,
				image_link: true,
			},
		});
		if (!menus || menus.length === 0) {
			console.error("No menus found");
			return [];
		}
		return menus;
	} catch (error) {
		console.error("Error fetching menus:", error);
		throw error;
	}
};
