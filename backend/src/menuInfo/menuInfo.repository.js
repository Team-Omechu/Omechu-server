import dotenv from "dotenv";
import { prisma } from "../db.config.js";

dotenv.config();

export const getMenuInfo = async (menuName) => {
	try {
		console.log("Fetching menu info for:", menuName);
		const menuInfo = await prisma.menu.findFirst({
			where: { name: menuName },
			select: {
				name: true,
				description: true,
				calory: true,
				carbo: true,
				protein: true,
				fat: true,
				sodium: true,
				vitamin: true,
				allergic: true,
				image_link: true,
				recipe_link: true,
				recipe_link_source: true,
				recipe_video_name: true,
			},
		});

		if (!menuInfo) {
			console.error(`No menu info found for: ${menuName}`);
			return null;
		}

		for (const key of ["calory", "carbo", "protein", "fat", "sodium"]) {
			if (menuInfo[key] !== null && menuInfo[key] !== undefined) {
				menuInfo[key] = Number(menuInfo[key]);
			}
		}

		for (const key of ["vitamin", "allergic"]) {
			try {
				if (menuInfo[key] && typeof menuInfo[key] === "string") {
					menuInfo[key] = JSON.parse(menuInfo[key]);
				}
			} catch (parseError) {
				console.warn(`Error parsing ${key} data:`, parseError);
				menuInfo[key] = [];
			}
		}

		console.log("Menu info fetched successfully:", menuInfo);
		return menuInfo;
	} catch (error) {
		console.error(`Error fetching menu info for ${menuName}:`, error);
		throw error;
	}
};
