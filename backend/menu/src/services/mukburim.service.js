// mukburimStatistics/mukburim.service.js

import {
  findUserMukburimStatistics,
  findUserMukburimByMonth,
  findUserMukburimByDate,
  insertMukburim,
} from "../repositories/mukburim.repository.js";
import {
  NoMukburimData,
  InvalidMukburimPeriod,
  InvalidDateRange,
  NoParams,
  MukburimStatisticsError,
} from "../errors.js";

/**
 * Calculate date range based on period
 */
const calculateDateRange = (period) => {
  const now = new Date();
  const endDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59,
    999
  );
  let startDate;

  switch (period) {
    case "전체":
      startDate = new Date(now.getFullYear() - 10, 0, 1);
      break;
    case "1주":
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      startDate.setHours(0, 0, 0, 0);
      break;
    case "1개월":
      startDate = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      startDate.setHours(0, 0, 0, 0);
      break;
    case "3개월":
      startDate = new Date(
        now.getFullYear(),
        now.getMonth() - 3,
        now.getDate()
      );
      startDate.setHours(0, 0, 0, 0);
      break;
    case "6개월":
      startDate = new Date(
        now.getFullYear(),
        now.getMonth() - 6,
        now.getDate()
      );
      startDate.setHours(0, 0, 0, 0);
      break;
    case "1년":
      startDate = new Date(
        now.getFullYear() - 1,
        now.getMonth(),
        now.getDate()
      );
      startDate.setHours(0, 0, 0, 0);
      break;
    default:
      throw new InvalidMukburimPeriod("지원하지 않는 기간입니다.", { period });
  }

  return { startDate, endDate };
};

/**
 * Validate date string format (YYYY-MM-DD)
 */
const validateDateString = (dateString) => {
  if (!dateString) return false;

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) return false;

  const date = new Date(dateString);
  return (
    !isNaN(date.getTime()) && dateString === date.toISOString().split("T")[0]
  );
};

/**
 * Sort menu statistics by specified criteria
 */
const sortMenuStatistics = (menuStatistics, sortBy = "count") => {
  switch (sortBy) {
    case "recent":
    case "latest":
    case "last_eaten":
      return menuStatistics.sort(
        (a, b) => new Date(b.last_eaten_at) - new Date(a.last_eaten_at)
      );

    case "oldest":
    case "first_eaten":
      return menuStatistics.sort(
        (a, b) => new Date(a.last_eaten_at) - new Date(b.last_eaten_at)
      );

    case "count":
    case "frequency":
    default:
      return menuStatistics.sort((a, b) => b.count - a.count);

    case "name":
    case "alphabetical":
      return menuStatistics.sort((a, b) =>
        a.menu_name.localeCompare(b.menu_name, "ko-KR")
      );
  }
};

/**
 * Get mukburim statistics with sorting functionality
 */
export const getMukburimStatisticsService = async (
  userId,
  period,
  startDate,
  endDate,
  sortBy = "count"
) => {
  if (!userId) {
    throw new NoParams("사용자 ID가 필요합니다.", { userId });
  }

  let calculatedStartDate, calculatedEndDate;

  try {
    if (startDate && endDate) {
      if (!validateDateString(startDate) || !validateDateString(endDate)) {
        throw new InvalidDateRange(
          "날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식을 사용해주세요.",
          {
            startDate,
            endDate,
          }
        );
      }

      calculatedStartDate = new Date(startDate);
      calculatedEndDate = new Date(endDate);
      calculatedEndDate.setHours(23, 59, 59, 999);

      if (calculatedStartDate > calculatedEndDate) {
        throw new InvalidDateRange(
          "시작 날짜가 종료 날짜보다 늦을 수 없습니다.",
          {
            startDate,
            endDate,
          }
        );
      }

      const today = new Date();
      today.setHours(23, 59, 59, 999);
      if (calculatedStartDate > today) {
        throw new InvalidDateRange(
          "시작 날짜가 현재 날짜보다 늦을 수 없습니다.",
          {
            startDate,
          }
        );
      }
    } else if (period) {
      const validPeriods = ["전체", "1주", "1개월", "3개월", "6개월", "1년"];
      if (!validPeriods.includes(period)) {
        throw new InvalidMukburimPeriod("지원하지 않는 기간입니다.", {
          period,
          validPeriods,
        });
      }

      const dateRange = calculateDateRange(period);
      calculatedStartDate = dateRange.startDate;
      calculatedEndDate = dateRange.endDate;
    } else {
      const dateRange = calculateDateRange("1개월");
      calculatedStartDate = dateRange.startDate;
      calculatedEndDate = dateRange.endDate;
      period = "1개월";
    }

    console.log(
      `먹부림 통계 조회: userId=${userId}, period=${period}, sortBy=${sortBy}`,
      {
        startDate: calculatedStartDate.toISOString().split("T")[0],
        endDate: calculatedEndDate.toISOString().split("T")[0],
      }
    );

    const statistics = await findUserMukburimStatistics(
      userId,
      calculatedStartDate,
      calculatedEndDate
    );

    if (statistics.totalRecords === 0) {
      throw new NoMukburimData("해당 기간에 먹부림 기록이 없습니다.", {
        userId,
        period: period || "커스텀",
        dateRange: {
          startDate: calculatedStartDate.toISOString().split("T")[0],
          endDate: calculatedEndDate.toISOString().split("T")[0],
        },
      });
    }

    const sortedMenuStatistics = sortMenuStatistics(
      statistics.menuStatistics,
      sortBy
    );

    const daysDiff =
      Math.ceil(
        (calculatedEndDate - calculatedStartDate) / (1000 * 60 * 60 * 24)
      ) + 1;
    const averagePerDay =
      daysDiff > 0
        ? Math.round((statistics.totalRecords / daysDiff) * 10) / 10
        : 0;

    const result = {
      period: period || "커스텀",
      sortBy: sortBy,
      dateRange: {
        startDate: calculatedStartDate.toISOString().split("T")[0],
        endDate: calculatedEndDate.toISOString().split("T")[0],
        displayRange: `${calculatedStartDate.toLocaleDateString(
          "ko-KR"
        )} ~ ${calculatedEndDate.toLocaleDateString("ko-KR")}`,
      },
      summary: {
        totalRecords: statistics.totalRecords,
        uniqueMenus: statistics.uniqueMenus,
        averagePerDay: averagePerDay,
      },
      menuStatistics: sortedMenuStatistics,
    };

    console.log(`통계 조회 완료:`, {
      period: result.period,
      sortBy: result.sortBy,
      totalRecords: result.summary.totalRecords,
      topMenus: result.menuStatistics.slice(0, 3).map((menu) => ({
        name: menu.menu_name,
        count: menu.count,
        lastEaten: menu.last_eaten_display,
      })),
    });

    return result;
  } catch (error) {
    if (
      error instanceof NoMukburimData ||
      error instanceof InvalidMukburimPeriod ||
      error instanceof InvalidDateRange ||
      error instanceof NoParams
    ) {
      throw error;
    }

    console.error("먹부림 통계 서비스 오류:", error);
    throw new MukburimStatisticsError(
      "먹부림 통계 조회 중 오류가 발생했습니다.",
      {
        userId,
        period,
        startDate,
        endDate,
        sortBy,
        error: error.message,
      }
    );
  }
};

/**
 * Get mukburim calendar for a specific month
 */
export const getMukburimCalendarService = async (userId, year, month) => {
  if (!userId || !year || !month) {
    throw new NoParams("사용자 ID, 년도, 월이 모두 필요합니다.", {
      userId,
      year,
      month,
    });
  }

  const currentYear = new Date().getFullYear();
  const numericYear = parseInt(year);
  const numericMonth = parseInt(month);

  if (
    isNaN(numericYear) ||
    numericYear < 2020 ||
    numericYear > currentYear + 1
  ) {
    throw new InvalidDateRange("유효하지 않은 년도입니다.", {
      year: numericYear,
    });
  }

  if (isNaN(numericMonth) || numericMonth < 1 || numericMonth > 12) {
    throw new InvalidDateRange("유효하지 않은 월입니다.", {
      month: numericMonth,
    });
  }

  try {
    console.log(
      `먹부림 캘린더 조회: userId=${userId}, year=${numericYear}, month=${numericMonth}`
    );

    const mukburimList = await findUserMukburimByMonth(
      userId,
      numericYear,
      numericMonth
    );

    const groupedByDate = {};

    mukburimList.forEach((item) => {
      const dateKey = item.date.toISOString().split("T")[0];

      if (!groupedByDate[dateKey]) {
        groupedByDate[dateKey] = [];
      }

      groupedByDate[dateKey].push({
        id: item.id,
        menu_name: item.menu_name,
        time: item.date.toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      });
    });

    return {
      year: numericYear,
      month: numericMonth,
      totalRecords: mukburimList.length,
      calendar: groupedByDate,
    };
  } catch (error) {
    if (error instanceof NoParams || error instanceof InvalidDateRange) {
      throw error;
    }

    console.error("먹부림 캘린더 서비스 오류:", error);
    throw new MukburimStatisticsError(
      "먹부림 캘린더 조회 중 오류가 발생했습니다.",
      {
        userId,
        year: numericYear,
        month: numericMonth,
        error: error.message,
      }
    );
  }
};

/**
 * Get mukburim records for a specific date
 */
export const getMukburimByDateService = async (userId, targetDate) => {
  if (!userId || !targetDate) {
    throw new NoParams("사용자 ID와 날짜가 필요합니다.", {
      userId,
      targetDate,
    });
  }

  if (!validateDateString(targetDate)) {
    throw new InvalidDateRange(
      "날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식을 사용해주세요.",
      {
        targetDate,
      }
    );
  }

  const date = new Date(targetDate);

  const today = new Date();
  today.setHours(23, 59, 59, 999);
  if (date > today) {
    throw new InvalidDateRange("미래 날짜는 조회할 수 없습니다.", {
      targetDate,
    });
  }

  try {
    console.log(`특정 날짜 먹부림 조회: userId=${userId}, date=${targetDate}`);

    const mukburimList = await findUserMukburimByDate(userId, date);

    return {
      date: targetDate,
      displayDate: date.toLocaleDateString("ko-KR"),
      totalRecords: mukburimList.length,
      records: mukburimList.map((item) => ({
        id: item.id,
        menu_name: item.menu_name,
        time: item.date.toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        created_at: item.date.toISOString(),
      })),
    };
  } catch (error) {
    if (error instanceof NoParams || error instanceof InvalidDateRange) {
      throw error;
    }

    console.error("특정 날짜 먹부림 서비스 오류:", error);
    throw new MukburimStatisticsError(
      "특정 날짜 먹부림 조회 중 오류가 발생했습니다.",
      {
        userId,
        targetDate,
        error: error.message,
      }
    );
  }
};

export const insertMukburimService = async (mukburimData) => {
  try {
    // Validate required fields
    if (!mukburimData.user_id || !mukburimData.menu_name) {
      throw new Error("user_id and menu_name are required");
    }

    // Add current date if not provided
    if (!mukburimData.date) {
      throw new Error("Date is required");
    }

    const result = await insertMukburim(mukburimData);
    return result;
  } catch (error) {
    throw error;
  }
};
