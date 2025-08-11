import { 
  getMenuRandom, insertMenuViewTime, getMenuRecent, getMenuFiltered} 
  from "../repositories/sortMenu.repository.js";

export const getMenuRandomService = async () => {
  try {
    console.log("Fetching random menu from repository");
    const randomMenu = await getMenuRandom();

    return randomMenu;
  } catch (error) {
    return {
      resultType: "FAIL",
      error: {
        errorCode: "M001",
        reason: "메뉴 랜덤 추천 중 오류 발생",
        data: null,
      },
    };
  }
}

export const insertMenuViewTimeService = async (userId, menuName) => {
  try {
    console.log("Inserting menu view time for user from service:",  menuName);
    const result = insertMenuViewTime(userId, menuName);
    return result;
  } catch (error) {
    console.error("Error inserting menu view time:", error);
    throw error; // 에러를 상위로 전달
  }
}

// prisma는 repoitory에서만 사용 (여기서 사용하지 않음)
export const getMenuRecentService = async (userId) => {
    try {
        console.log("Fetching recent menu for user from service:", userId);
        const recentMenu = await getMenuRecent(userId);
        if (!recentMenu) {
        return null; // 최근 메뉴가 없으면 null 반환
        }
        console.log("Recent menu view time from service:", recentMenu);
        return recentMenu;
    } catch (error) {
        console.error("Error fetching recent menu:", error);
        throw error; // 에러를 상위로 전달
    }
}

export const getMenuFilteredService = async (tags) => {
    try {
        console.log("Fetching filtered menu from service with tags:", tags);
        const filteredMenu = await getMenuFiltered(tags);
        if (!filteredMenu) {
            return null; // 필터링된 메뉴가 없으면 null 반환
        }
        //filteredMenu의 id를 전부 string으로 변환
        const stringifiedMenu = filteredMenu.map(item => ({
            ...item,
            id: item.id.toString()
        }));
        console.log("Filtered menu from service:", stringifiedMenu);
        return stringifiedMenu;
    } catch (error) {
        console.error("Error fetching filtered menu:", error);
        throw error; // 에러를 상위로 전달
    }
}