import { prisma } from "../db.config.js";

/**
 * 사용자의 특정 기간 먹부림 통계 조회 (최근 먹은 날짜 포함)
 */
export const findUserMukburimStatistics = async (
  userId,
  startDate,
  endDate
) => {
  try {
    const mukburimList = await prisma.mukburim.findMany({
      where: {
        user_id: BigInt(userId),
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        id: true,
        date: true,
        menu: {
          select: {
            name: true,
          },
        },
      },
      orderBy: { date: "desc" },
    });

    const menuData = {};

    mukburimList.forEach((item) => {
      const menuName = item.menu.name;

      if (!menuData[menuName]) {
        menuData[menuName] = {
          count: 0,
          lastEatenAt: item.date,
        };
      }

      menuData[menuName].count += 1;

      if (item.date > menuData[menuName].lastEatenAt) {
        menuData[menuName].lastEatenAt = item.date;
      }
    });

    const menuStatistics = Object.entries(menuData).map(
      ([menu_name, data]) => ({
        menu_name,
        count: data.count,
        last_eaten_at: data.lastEatenAt.toISOString(),
        last_eaten_date: data.lastEatenAt.toISOString().split("T")[0],
        last_eaten_display: data.lastEatenAt.toLocaleDateString("ko-KR"),
      })
    );

    return {
      totalRecords: mukburimList.length,
      uniqueMenus: Object.keys(menuData).length,
      menuStatistics,
    };
  } catch (error) {
    throw new Error(`Failed to fetch mukburim statistics: ${error.message}`);
  }
};

/**
 * 사용자의 월별 먹부림 기록 조회 (캘린더용)
 */
export const findUserMukburimByMonth = async (userId, year, month) => {
  try {
    const startDate = new Date(year, month - 1, 1, 0, 0, 0, 0);
    const endDate = new Date(year, month, 0, 23, 59, 59, 999);

    const mukburimList = await prisma.mukburim.findMany({
      where: {
        user_id: BigInt(userId),
        date: { gte: startDate, lte: endDate },
      },
      select: {
        id: true,
        date: true,
        menu: {
          select: {
            name: true,
          },
        },
      },
      orderBy: { date: "desc" },
    });

    return mukburimList.map((item) => ({
      id: item.id.toString(),
      menu_name: item.menu.name,
      date: item.date,
    }));
  } catch (error) {
    throw new Error(`Failed to fetch mukburim by month: ${error.message}`);
  }
};

/**
 * 사용자의 특정 날짜 먹부림 기록 조회
 */
export const findUserMukburimByDate = async (userId, targetDate) => {
  try {
    const startOfDay = new Date(targetDate);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(targetDate);
    endOfDay.setHours(23, 59, 59, 999);

    const mukburimList = await prisma.mukburim.findMany({
      where: {
        user_id: BigInt(userId),
        date: { gte: startOfDay, lte: endOfDay },
      },
      select: {
        id: true,
        date: true,
        menu: {
          select: {
            name: true,
          },
        },
      },
      orderBy: { date: "desc" },
    });

    return mukburimList.map((item) => ({
      id: item.id.toString(),
      menu_name: item.menu.name,
      time: item.date.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      created_at: item.date.toISOString(),
    }));
  } catch (error) {
    throw new Error(`Failed to fetch mukburim by date: ${error.message}`);
  }
};

/**
 * 먹부림 기록 등록
 * ※ menu_id 기준
 */
export const insertMukburim = async (mukburimData) => {
  try {
    const result = await prisma.mukburim.create({
      data: {
        user_id: BigInt(mukburimData.user_id),
        menu_id: BigInt(mukburimData.menu_id),
        date: mukburimData.date,
      },
      select: {
        id: true,
        user_id: true,
        menu_id: true,
        date: true,
        menu: {
          select: {
            name: true,
          },
        },
      },
    });

    return {
      id: result.id.toString(),
      user_id: result.user_id.toString(),
      menu_id: result.menu_id.toString(),
      menu_name: result.menu.name,
      date: result.date,
    };
  } catch (error) {
    throw new Error(`Failed to insert mukburim: ${error.message}`);
  }
};
