import {
  findUserMukburimStatistics,
  findUserMukburimByMonth,
  findUserMukburimByDate,
} from "../repositories/mukburim.statistics.repository.js";
import {
  NoMukburimData,
  InvalidMukburimPeriod,
  InvalidDateRange,
  NoParams,
  MukburimStatisticsError,
} from "../errors.js";

/**
 * 기간에 따른 날짜 범위 계산
 */
const calculateDateRange = (period) => {
  const now = new Date();
  const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
  let startDate;

  switch (period) {
    case "전체":
      // 전체의 경우 충분히 이전 날짜로 설정 (예: 10년 전)
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
 * 날짜 문자열 유효성 검사
 */
const validateDateString = (dateString) => {
  if (!dateString) return false;
  
  // YYYY-MM-DD 형식 체크
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) return false;
  
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && dateString === date.toISOString().split('T')[0];
};

/**
 * 먹부림 통계 조회 서비스
 */
export const getMukburimStatisticsService = async (
  userId,
  period,
  startDate,
  endDate
) => {
  // 필수 파라미터 검증
  if (!userId) {
    throw new NoParams("사용자 ID가 필요합니다.", { userId });
  }

  let calculatedStartDate, calculatedEndDate;

  try {
    // 커스텀 날짜 범위가 제공된 경우
    if (startDate && endDate) {
      // 날짜 형식 유효성 검사
      if (!validateDateString(startDate) || !validateDateString(endDate)) {
        throw new InvalidDateRange("날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식을 사용해주세요.", {
          startDate,
          endDate
        });
      }

      calculatedStartDate = new Date(startDate);
      calculatedEndDate = new Date(endDate);
      calculatedEndDate.setHours(23, 59, 59, 999);

      // 시작날짜가 종료날짜보다 늦은 경우
      if (calculatedStartDate > calculatedEndDate) {
        throw new InvalidDateRange("시작 날짜가 종료 날짜보다 늦을 수 없습니다.", {
          startDate,
          endDate
        });
      }

      // 미래 날짜 체크
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      if (calculatedStartDate > today) {
        throw new InvalidDateRange("시작 날짜가 현재 날짜보다 늦을 수 없습니다.", {
          startDate
        });
      }

    } else if (period) {
      // 사전 정의된 기간 사용
      const validPeriods = ["전체", "1주", "1개월", "3개월", "6개월", "1년"];
      if (!validPeriods.includes(period)) {
        throw new InvalidMukburimPeriod("지원하지 않는 기간입니다.", { 
          period, 
          validPeriods 
        });
      }

      const dateRange = calculateDateRange(period);
      calculatedStartDate = dateRange.startDate;
      calculatedEndDate = dateRange.endDate;

    } else {
      // 기본값: 1개월
      const dateRange = calculateDateRange("1개월");
      calculatedStartDate = dateRange.startDate;
      calculatedEndDate = dateRange.endDate;
      period = "1개월";
    }

    console.log(`먹부림 통계 조회: userId=${userId}, period=${period}`, {
      startDate: calculatedStartDate.toISOString().split("T")[0],
      endDate: calculatedEndDate.toISOString().split("T")[0],
    });

    // 데이터베이스 조회
    const statistics = await findUserMukburimStatistics(
      userId,
      calculatedStartDate,
      calculatedEndDate
    );

    // 데이터가 없는 경우
    if (statistics.totalRecords === 0) {
      throw new NoMukburimData("해당 기간에 먹부림 기록이 없습니다.", {
        userId,
        period: period || "커스텀",
        dateRange: {
          startDate: calculatedStartDate.toISOString().split("T")[0],
          endDate: calculatedEndDate.toISOString().split("T")[0],
        }
      });
    }

    // 기간 계산 (일수)
    const daysDiff = Math.ceil((calculatedEndDate - calculatedStartDate) / (1000 * 60 * 60 * 24)) + 1;
    const averagePerDay = daysDiff > 0 ? Math.round((statistics.totalRecords / daysDiff) * 10) / 10 : 0;

    return {
      period: period || "커스텀",
      dateRange: {
        startDate: calculatedStartDate.toISOString().split("T")[0],
        endDate: calculatedEndDate.toISOString().split("T")[0],
        displayRange: `${calculatedStartDate.toLocaleDateString("ko-KR")} ~ ${calculatedEndDate.toLocaleDateString("ko-KR")}`,
      },
      summary: {
        totalRecords: statistics.totalRecords,
        uniqueMenus: statistics.uniqueMenus,
        averagePerDay: averagePerDay,
      },
      menuStatistics: statistics.menuStatistics,
    };

  } catch (error) {
    // 이미 커스텀 에러인 경우 그대로 전파
    if (
      error instanceof NoMukburimData ||
      error instanceof InvalidMukburimPeriod ||
      error instanceof InvalidDateRange ||
      error instanceof NoParams
    ) {
      throw error;
    }

    // 예상치 못한 에러인 경우
    console.error("먹부림 통계 서비스 오류:", error);
    throw new MukburimStatisticsError(
      "먹부림 통계 조회 중 오류가 발생했습니다.",
      {
        userId,
        period,
        startDate,
        endDate,
        error: error.message,
      }
    );
  }
};

/**
 * 먹부림 캘린더 조회 서비스
 */
export const getMukburimCalendarService = async (userId, year, month) => {
  if (!userId || !year || !month) {
    throw new NoParams("사용자 ID, 년도, 월이 모두 필요합니다.", {
      userId,
      year,
      month,
    });
  }

  // 년도, 월 유효성 검사
  const currentYear = new Date().getFullYear();
  const numericYear = parseInt(year);
  const numericMonth = parseInt(month);

  if (isNaN(numericYear) || numericYear < 2020 || numericYear > currentYear + 1) {
    throw new InvalidDateRange("유효하지 않은 년도입니다.", { year: numericYear });
  }

  if (isNaN(numericMonth) || numericMonth < 1 || numericMonth > 12) {
    throw new InvalidDateRange("유효하지 않은 월입니다.", { month: numericMonth });
  }

  try {
    console.log(`먹부림 캘린더 조회: userId=${userId}, year=${numericYear}, month=${numericMonth}`);

    const mukburimList = await findUserMukburimByMonth(userId, numericYear, numericMonth);

    // 날짜별로 그룹핑
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
          hour12: false
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
 * 특정 날짜 먹부림 조회 서비스
 */
export const getMukburimByDateService = async (userId, targetDate) => {
  if (!userId || !targetDate) {
    throw new NoParams("사용자 ID와 날짜가 필요합니다.", {
      userId,
      targetDate,
    });
  }

  // 날짜 유효성 검사
  if (!validateDateString(targetDate)) {
    throw new InvalidDateRange("날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식을 사용해주세요.", { 
      targetDate 
    });
  }

  const date = new Date(targetDate);
  
  // 미래 날짜 체크
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  if (date > today) {
    throw new InvalidDateRange("미래 날짜는 조회할 수 없습니다.", { targetDate });
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
          hour12: false
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