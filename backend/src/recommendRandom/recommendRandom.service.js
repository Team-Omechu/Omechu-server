import { recommendRandom } from "./recommendRandom.repository.js";

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
