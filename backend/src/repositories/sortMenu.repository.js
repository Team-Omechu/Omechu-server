import dotenv from "dotenv";
import { prisma } from "../db.config.js";
dotenv.config();
import { getMenu } from "../repositories/menu.repository.js";

export const getMenuRandom = async () => {
    try {
        const menus = await getMenu();
        // 순서 랜덤으로 섞기
        // Fisher–Yates shuffle
        const randomMenu = [...menus]; // 원본 훼손 방지
        for (let i = randomMenu.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // 0 ≤ j ≤ i
            [randomMenu[i], randomMenu[j]] = [randomMenu[j], randomMenu[i]];
        }

        return randomMenu;
    } catch (error) {
        console.error("Error fetching random menu:", error);
        throw error;
    }
}

export const insertMenuViewTime = async (userId, menuName) => {
    try {
        console.log("Inserting menu view time for user:", userId, "menu:", menuName);
        // 이미 존재하는 메뉴 이름이면 date만 업데이트
        const existingMenu = await prisma.menu_view_time.findFirst({
            where: {
                user_id: userId,
                menu_name: menuName,
            },
        });
        console.log("Existing menu view time:", existingMenu);
        const isExist = existingMenu !== null;
        const result = isExist
            ? await prisma.menu_view_time.update({
                where: {
                    id : existingMenu.id, // 기존 레코드의 ID로 업데이트
                },
                data: {
                    // utc +9 적용
                    time: new Date(Date.now() + 9 * 60 * 60 * 1000),
                },
            })
            : await prisma.menu_view_time.create({
                data: {
                    user_id: userId,
                    menu_name: menuName,
                    time: new Date(Date.now() + 9 * 60 * 60 * 1000),
            },
        });
        return result;
    } catch (error) {
        console.error("Error inserting menu view time:", error);
        throw error; // 에러를 상위로 전달
    }
}

export const getMenuRecent = async (userId) => {
    try {
        console.log("Fetching recent menu for user:", userId);
        const recentMenu = await prisma.menu_view_time.findMany({
            select: {
                menu_name: true,
            },
            where: {
                user_id: userId,
            },
            orderBy: {
                time: "desc", // 가장 최근 시간 기준으로 정렬
            },
        });
        
        console.log("Recent menu view time:", recentMenu);
        const mappedMenu = recentMenu.map(item => ({
            name: item.menu_name
        }));
        return mappedMenu;
    } catch (error) {
        console.error("Error fetching recent menu:", error);
        throw error; // 에러를 상위로 전달
    }
}