// mukburimStatistics/mukburim.repository.js

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
    console.log(`DB 조회 시작: userId=${userId}`, {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    });

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
        menu_name: true,
        date: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    console.log(`DB 조회 결과: ${mukburimList.length}개 레코드 발견`);

    const menuData = {};
    mukburimList.forEach((item) => {
      const menuName = item.menu_name;

      if (!menuData[menuName]) {
        menuData[menuName] = {
          count: 0,
          lastEatenAt: item.date,
          allDates: [],
        };
      }

      menuData[menuName].count += 1;
      menuData[menuName].allDates.push(item.date);

      if (item.date > menuData[menuName].lastEatenAt) {
        menuData[menuName].lastEatenAt = item.date;
      }
    });

    const menuStatistics = Object.entries(menuData)
      .map(([menu_name, data]) => ({
        menu_name,
        count: data.count,
        last_eaten_at: data.lastEatenAt.toISOString(),
        last_eaten_date: data.lastEatenAt.toISOString().split("T")[0],
        last_eaten_display: data.lastEatenAt.toLocaleDateString("ko-KR"),
      }))
      .sort((a, b) => b.count - a.count);

    const result = {
      totalRecords: mukburimList.length,
      uniqueMenus: Object.keys(menuData).length,
      menuStatistics: menuStatistics,
      rawData: mukburimList.map((item) => ({
        ...item,
        id: item.id.toString(),
        user_id: item.user_id?.toString(),
      })),
    };

    console.log(`통계 집계 완료:`, {
      totalRecords: result.totalRecords,
      uniqueMenus: result.uniqueMenus,
      topMenus: result.menuStatistics.slice(0, 3).map((menu) => ({
        name: menu.menu_name,
        count: menu.count,
        lastEaten: menu.last_eaten_display,
      })),
    });

    return result;
  } catch (error) {
    console.error("먹부림 통계 조회 오류:", {
      error: error.message,
      stack: error.stack,
      userId,
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
    });
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

    console.log(`월별 먹부림 DB 조회: userId=${userId}, ${year}-${month}`, {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    });

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
        menu_name: true,
        date: true,
        user_id: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    console.log(`월별 조회 결과: ${mukburimList.length}개 레코드`);

    const formattedList = mukburimList.map((item) => ({
      ...item,
      id: item.id.toString(),
      user_id: item.user_id.toString(),
      date: item.date,
    }));

    return formattedList;
  } catch (error) {
    console.error("사용자 먹부림 월별 조회 오류:", {
      error: error.message,
      stack: error.stack,
      userId,
      year,
      month,
    });
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

    console.log(`일별 먹부림 DB 조회: userId=${userId}`, {
      targetDate: targetDate.toISOString().split("T")[0],
      startOfDay: startOfDay.toISOString(),
      endOfDay: endOfDay.toISOString(),
    });

    const mukburimList = await prisma.mukburim.findMany({
      where: {
        user_id: BigInt(userId),
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      select: {
        id: true,
        menu_name: true,
        date: true,
        user_id: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    console.log(`일별 조회 결과: ${mukburimList.length}개 레코드`);

    const formattedList = mukburimList.map((item) => ({
      ...item,
      id: item.id.toString(),
      user_id: item.user_id.toString(),
    }));

    return formattedList;
  } catch (error) {
    console.error("사용자 먹부림 일별 조회 오류:", {
      error: error.message,
      stack: error.stack,
      userId,
      targetDate: targetDate?.toISOString(),
    });
    throw new Error(`Failed to fetch mukburim by date: ${error.message}`);
  }
};

export const insertMukburim = async (mukburimData) => {
  try {
    const result = await prisma.mukburim.create({
      data: {
        user_id: mukburimData.user_id,
        menu_name: mukburimData.menu_name,
        date: mukburimData.date,
      },
    });
    return {
      ...result,
      id: result.id.toString(),
      user_id: result.user_id.toString(),
    };
  } catch (error) {
    throw new Error(`Failed to insert mukburim: ${error.message}`);
  }
};
