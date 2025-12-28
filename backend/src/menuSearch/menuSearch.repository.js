import dotenv from "dotenv";
import { prisma } from "../db.config.js";
dotenv.config();

export const getMenuSearch = async (keyword) => {
    try {
        console.log("Searching menu with keyword from repository:", keyword);
        const searchResults = await prisma.menu.findMany({
            where: {
                name: {
                    contains: keyword,
                }
            },
            select: {
                name: true,
                image_link: true
            }
        });
        console.log("Search results from repository:", searchResults);
        return searchResults;
    } catch (error) {
        console.error("Error searching menu:", error);
        throw error;
    }
}
