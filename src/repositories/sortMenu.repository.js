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
        const menuWithImages = await Promise.all(
      mappedMenu.map(async (menuItem) => {
        try {
          const menuData = await prisma.menu.findFirst({
            where: { name: menuItem.name },
            select: { image_link: true }
          });
          
          return {
            ...menuItem,
            image_link: menuData?.image_link || null
          };
        } catch (error) {
          console.error(`Error fetching image for menu ${menuItem.menu}:`, error);
          return {
            ...menuItem,
            image_link: null
          };
        }
      })
    );
        return menuWithImages;
    } catch (error) {
        console.error("Error fetching recent menu:", error);
        throw error; // 에러를 상위로 전달
    }
}

export const getMenuFiltered = async (tags) => {
    try {
        console.log("Fetching filtered menu from repository with tags:", tags);
        
        // 각 태그별로 해당하는 menu_id들을 조회
        const menuIdSets = await Promise.all(
            tags.map(async (tag) => {
                const menuTags = await prisma.menu_tag.findMany({
                    where: { tag: tag },
                    select: { menu_id: true }
                });
                return new Set(menuTags.map(mt => mt.menu_id));
            })
        );
        
        // 모든 태그에 공통으로 포함된 menu_id들 찾기 (교집합)
        let commonMenuIds = menuIdSets[0];
        for (let i = 1; i < menuIdSets.length; i++) {
            commonMenuIds = new Set([...commonMenuIds].filter(id => menuIdSets[i].has(id)));
        }
        
        // 교집합이 없으면 빈 배열 반환
        if (commonMenuIds.size === 0) {
            console.log("No menu found with all tags");
            return [];
        }
        
        // 공통 menu_id들을 이용해서 menu 테이블에서 데이터 조회
        const filteredMenu = await prisma.menu.findMany({
            where: {
                id: {
                    in: Array.from(commonMenuIds)
                }
            },
            select: {
                id: true,
                name: true,
                image_link: true
            }
        });
        
        console.log("Filtered menu from repository:", filteredMenu);
        return filteredMenu;
    } catch (error) {
        console.error("Error fetching filtered menu:", error);
        throw error;
    }
}

// 메뉴 이름에 keyword가 포함된 메뉴의 name과 image_link를 배열로 반환

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
