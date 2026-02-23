// mukburimStatistics/mukburim.service.js

import {
  findUserMukburimStatistics,
  insertMukburim,
} from "../repositories/mukburim.repository.js";

import {
  findUserMukburimByMonth,
  findUserMukburimByDate,
} from "../repositories/mukburim.repository.js";

import {
  NoMukburimData,
  InvalidMukburimPeriod,
  InvalidDateRange,
  NoParams,
  MukburimStatisticsError,
} from "../errors.js";

import { prisma } from "../db.config.js";

/**
 * 기간별 날짜 계산
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
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      startDate.setHours(0, 0, 0, 0);
      break;
    case "3개월":
      startDate = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
      startDate.setHours(0, 0, 0, 0);
      break;
    case "6개월":
      startDate = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
      startDate.setHours(0, 0, 0, 0);
      break;
    case "1년":
      startDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
      startDate.setHours(0, 0, 0, 0);
      break;
    default:
      throw new InvalidMukburimPeriod("지원하지 않는 기간입니다.", { period });
  }

  return { startDate, endDate };
};

/**
 * 날짜 문자열 검증 (YYYY-MM-DD)
 */
const validateDateString = (dateString) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

/**
 * 메뉴 통계 정렬
 */
const sortMenuStatistics = (menuStatistics, sortBy) => {
  switch (sortBy) {
    case "recent":
    case "latest":
      return menuStatistics.sort(
        (a, b) => new Date(b.last_eaten_at) - new Date(a.last_eaten_at)
      );
    case "oldest":
      return menuStatistics.sort(
        (a, b) => new Date(a.last_eaten_at) - new Date(b.last_eaten_at)
      );
    case "name":
      return menuStatistics.sort((a, b) =>
        a.menu_name.localeCompare(b.menu_name, "ko-KR")
      );
    case "count":
    default:
      return menuStatistics.sort((a, b) => b.count - a.count);
  }
};

/**
 * 먹부림 통계 조회
 */
export const getMukburimStatisticsService = async (
  userId,
  period,
  startDate,
  endDate,
  sortBy = "count"
) => {
  if (!userId) throw new NoParams("사용자 ID가 필요합니다.");

  let calculatedStartDate;
  let calculatedEndDate;

  if (startDate && endDate) {
    if (!validateDateString(startDate) || !validateDateString(endDate)) {
      throw new InvalidDateRange("날짜 형식이 올바르지 않습니다.");
    }

    calculatedStartDate = new Date(startDate);
    calculatedEndDate = new Date(endDate);
    calculatedEndDate.setHours(23, 59, 59, 999);

    if (calculatedStartDate > calculatedEndDate) {
      throw new InvalidDateRange("시작 날짜가 종료 날짜보다 늦습니다.");
    }
  } else {
    const range = calculateDateRange(period || "1개월");
    calculatedStartDate = range.startDate;
    calculatedEndDate = range.endDate;
    period = period || "1개월";
  }

  try {
    const statistics = await findUserMukburimStatistics(
      userId,
      calculatedStartDate,
      calculatedEndDate
    );

    if (statistics.totalRecords === 0) {
      throw new NoMukburimData("해당 기간에 먹부림 기록이 없습니다.");
    }

    const sorted = sortMenuStatistics(
      statistics.menuStatistics,
      sortBy
    );

    const days =
      Math.ceil(
        (calculatedEndDate - calculatedStartDate) /
          (1000 * 60 * 60 * 24)
      ) + 1;

    return {
      period,
      sortBy,
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
        averagePerDay:
          days > 0
            ? Math.round((statistics.totalRecords / days) * 10) / 10
            : 0,
      },
      menuStatistics: sorted,
    };
  } catch (error) {
    //  의도된 비즈니스 에러는 그대로 전달
    if (
      error instanceof NoMukburimData ||
      error instanceof InvalidMukburimPeriod ||
      error instanceof InvalidDateRange ||
      error instanceof NoParams
    ) {
      throw error;
    }

    throw new MukburimStatisticsError(
      "먹부림 통계 조회 중 오류가 발생했습니다.",
      { userId, error: error.message }
    );
  }

};

// 캘린더 조회 서비스
export const getMukburimCalendarService = async (userId, year, month) => {
  if (!userId) throw new NoParams("사용자 ID가 필요합니다.");

  const parsedYear = parseInt(year);
  const parsedMonth = parseInt(month);

  if (isNaN(parsedYear) || isNaN(parsedMonth)) {
    throw new InvalidDateRange("년도 또는 월 형식이 올바르지 않습니다.");
  }

  const records = await findUserMukburimByMonth(
    userId,
    parsedYear,
    parsedMonth
  );

  if (records.length === 0) {
    throw new NoMukburimData("해당 월에 먹부림 기록이 없습니다.", {
      year: parsedYear,
      month: parsedMonth,
    });
  }

  const calendar = {};

  records.forEach((item) => {
    const dateKey = item.date.toISOString().split("T")[0];

    if (!calendar[dateKey]) {
      calendar[dateKey] = [];
    }

    calendar[dateKey].push({
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
    year: parsedYear,
    month: parsedMonth,
    totalRecords: records.length,
    calendar,
  };
};
// 특정 날짜 조회 서비스
export const getMukburimByDateService = async (userId, date) => {
  if (!userId) throw new NoParams("사용자 ID가 필요합니다.");
  if (!date) throw new NoParams("날짜가 필요합니다.");

  const records = await findUserMukburimByDate(userId, date);

  if (records.length === 0) {
    throw new NoMukburimData("해당 날짜에 먹부림 기록이 없습니다.");
  }

  const displayDate = new Date(date).toLocaleDateString("ko-KR");

  return {
    date,
    displayDate,
    totalRecords: records.length,
    records,
  };
};

export const insertMukburimService = async (mukburimData) => {
  const { user_id, menu_name, date } = mukburimData;

  if (!user_id || !menu_name) {
    throw new NoParams("user_id와 menu_name이 필요합니다.");
  }
  const menu = await prisma.menu.findFirst({
    where: { name: menu_name },
    select: { id: true },
  });

  if (!menu) {
    throw new MukburimStatisticsError("존재하지 않는 메뉴입니다.", {
      menu_name,
    });
  }

  return insertMukburim({
    user_id,
    menu_id: menu.id,
    date: date || new Date(),
  });
};
