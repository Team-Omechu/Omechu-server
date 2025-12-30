// mukburimStatistics/mukburim.controller.js

import { StatusCodes } from "http-status-codes";
import {
  getMukburimStatisticsService,
  getMukburimCalendarService,
  getMukburimByDateService,
} from "./mukburim.service.js";

/**
 * 먹부림 통계 조회 컨트롤러 (정렬 기능 추가)
 */
export const handleGetMukburimStatistics = async (req, res, next) => {
  /*
  #swagger.tags = ["Mukburim"]
  #swagger.summary = "먹부림 통계 조회 API"
  #swagger.description = "사용자의 먹부림 기록을 기간별로 통계 조회하는 API입니다. 기본적으로 현재 시점 기준으로 조회하며, 각 메뉴별 최근 먹은 날짜 정보를 포함합니다."
  #swagger.parameters['period'] = {
    in: 'query',
    description: '조회 기간',
    required: false,
    type: 'string',
    enum: ['전체', '1주', '1개월', '3개월', '6개월', '1년'],
    example: '1개월'
  }
  #swagger.parameters['startDate'] = {
    in: 'query',
    description: '시작 날짜 (YYYY-MM-DD, period 대신 커스텀 범위 사용시)',
    required: false,
    type: 'string',
    example: '2025-06-01'
  }
  #swagger.parameters['endDate'] = {
    in: 'query',
    description: '종료 날짜 (YYYY-MM-DD, period 대신 커스텀 범위 사용시)',
    required: false,
    type: 'string',
    example: '2025-06-05'
  }
  #swagger.parameters['sortBy'] = {
    in: 'query',
    description: '정렬 기준',
    required: false,
    type: 'string',
    enum: ['count', 'recent', 'oldest', 'name'],
    example: 'count'
  }
  #swagger.responses[200] = {
    description: "먹부림 통계 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                period: { type: "string", example: "1개월" },
                sortBy: { type: "string", example: "count" },
                dateRange: {
                  type: "object",
                  properties: {
                    startDate: { type: "string", example: "2025-07-11" },
                    endDate: { type: "string", example: "2025-08-11" },
                    displayRange: { type: "string", example: "2025. 7. 11. ~ 2025. 8. 11." }
                  }
                },
                summary: {
                  type: "object",
                  properties: {
                    totalRecords: { type: "integer", example: 25 },
                    uniqueMenus: { type: "integer", example: 8 },
                    averagePerDay: { type: "number", example: 0.8 }
                  }
                },
                menuStatistics: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      menu_name: { type: "string", example: "짜장면" },
                      count: { type: "integer", example: 5 },
                      last_eaten_at: { type: "string", example: "2025-08-13T12:30:00.000Z" },
                      last_eaten_date: { type: "string", example: "2025-08-13" },
                      last_eaten_display: { type: "string", example: "2025. 8. 13." }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 요청 (파라미터 오류, 날짜 형식 오류 등)",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "MK002" },
                reason: { type: "string", example: "지원하지 않는 기간입니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[404] = {
    description: "해당 기간에 먹부림 데이터 없음",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "MK001" },
                reason: { type: "string", example: "해당 기간에 먹부림 기록이 없습니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  */

  try {
    if (!req.user || !req.user.id) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "T002",
        reason: "인증이 필요합니다.",
        data: null
      });
    }

    const userId = parseInt(req.user.id);
    const { period, startDate, endDate, sortBy } = req.query;

    console.log('먹부림 통계 요청:', {
      userId,
      period,
      startDate,
      endDate,
      sortBy,
      query: req.query
    });

    const cleanPeriod = period?.trim();
    const cleanStartDate = startDate?.trim();
    const cleanEndDate = endDate?.trim();
    const cleanSortBy = sortBy?.trim() || "count";

    const validSortOptions = ["count", "recent", "latest", "oldest", "first_eaten", "name", "alphabetical"];
    if (!validSortOptions.includes(cleanSortBy)) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "MK006",
        reason: "지원하지 않는 정렬 기준입니다.",
        data: { 
          sortBy: cleanSortBy, 
          validOptions: ["count", "recent", "oldest", "name"]
        }
      });
    }

    const result = await getMukburimStatisticsService(
      userId,
      cleanPeriod,
      cleanStartDate,
      cleanEndDate,
      cleanSortBy
    );

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    console.error('먹부림 통계 컨트롤러 오류:', {
      error: error.message,
      stack: error.stack,
      userId: req.user?.id,
      query: req.query
    });
    next(error);
  }
};

/**
 * 먹부림 캘린더 조회 컨트롤러
 */
export const handleGetMukburimCalendar = async (req, res, next) => {
  /*
  #swagger.tags = ["Mukburim"]
  #swagger.summary = "먹부림 캘린더 조회 API"
  #swagger.description = "사용자의 월별 먹부림 기록을 캘린더 형태로 조회하는 API입니다."
  #swagger.parameters['year'] = {
    in: 'query',
    description: '년도',
    required: true,
    type: 'integer',
    example: 2025
  }
  #swagger.parameters['month'] = {
    in: 'query',
    description: '월',
    required: true,
    type: 'integer',
    example: 8
  }
  #swagger.responses[200] = {
    description: "먹부림 캘린더 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                year: { type: "integer", example: 2025 },
                month: { type: "integer", example: 8 },
                totalRecords: { type: "integer", example: 15 },
                calendar: {
                  type: "object",
                  example: {
                    "2025-08-01": [
                      { id: "1", menu_name: "짜장면", time: "12:30" }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    if (!req.user || !req.user.id) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "T002",
        reason: "인증이 필요합니다.",
        data: null
      });
    }

    const userId = parseInt(req.user.id);
    const { year, month } = req.query;

    console.log('먹부림 캘린더 요청:', {
      userId,
      year,
      month,
      query: req.query
    });

    if (!year || !month) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "MK003",
        reason: "년도와 월 파라미터가 필요합니다.",
        data: { year, month }
      });
    }

    const result = await getMukburimCalendarService(userId, year, month);

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    console.error('먹부림 캘린더 컨트롤러 오류:', {
      error: error.message,
      stack: error.stack,
      userId: req.user?.id,
      query: req.query
    });
    next(error);
  }
};

/**
 * 특정 날짜 먹부림 조회 컨트롤러 
 */
export const handleGetMukburimByDate = async (req, res, next) => {
  /*
  #swagger.tags = ["Mukburim"]
  #swagger.summary = "특정 날짜 먹부림 조회 API"
  #swagger.description = "특정 날짜의 먹부림 기록을 상세 조회하는 API입니다."
  #swagger.parameters['date'] = {
    in: 'query',
    description: '조회할 날짜 (YYYY-MM-DD)',
    required: true,
    type: 'string',
    example: '2025-08-11'
  }
  #swagger.responses[200] = {
    description: "특정 날짜 먹부림 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                date: { type: "string", example: "2025-08-11" },
                displayDate: { type: "string", example: "2025. 8. 11." },
                totalRecords: { type: "integer", example: 3 },
                records: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "1" },
                      menu_name: { type: "string", example: "짜장면" },
                      time: { type: "string", example: "12:30" },
                      created_at: { type: "string", example: "2025-08-11T12:30:00.000Z" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    if (!req.user || !req.user.id) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "T002",
        reason: "인증이 필요합니다.",
        data: null
      });
    }

    const userId = parseInt(req.user.id);
    const { date } = req.query;

    console.log('특정 날짜 먹부림 요청:', {
      userId,
      date,
      query: req.query
    });

    if (!date) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "MK004",
        reason: "날짜 파라미터가 필요합니다.",
        data: { date }
      });
    }

    const result = await getMukburimByDateService(userId, date.trim());

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    console.error('특정 날짜 먹부림 컨트롤러 오류:', {
      error: error.message,
      stack: error.stack,
      userId: req.user?.id,
      query: req.query
    });
    next(error);
  }
};