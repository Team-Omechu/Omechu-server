import { StatusCodes } from "http-status-codes";
import { 
    getMenuSearchService
 } from "./menuSearch.service.js";

export const handleGetMenuSearch = async (req, res) => {
  try {
    console.log("handleGetMenuSearch");
    // path variable로 수정
    const keyword = req.query.keyword;
    try {
      keyword = decodeURIComponent(keyword);
    } catch (e) {
      // 이미 디코딩된 상태라면 그대로 사용
      console.log("Keyword already decoded or invalid encoding:", keyword);
    }
    
    console.log("Decoded keyword:", keyword);

    if (!keyword) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "M008",
          reason: "검색 키워드가 필요합니다.",
          data: null,
        },
      });
    }

    // 서비스 호출
    const searchResults = await getMenuSearchService(keyword);

    
    res.status(StatusCodes.OK).json(searchResults);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      resultType: "FAIL",
      error: {
        errorCode: "M010",
        reason: "메뉴 검색 중 오류 발생",
        data: null,
      },
    });
  }
  /*
  #swagger.tags = ["Menu"]
  #swagger.summary = "메뉴 검색 API (키워드가 포함된 메뉴들 불러오기)"
  #swagger.description = "키워드를 기반으로 메뉴를 검색하는 API입니다."

  #swagger.parameters["keyword"] = {
    in: 'query',
    description: '메뉴를 검색할 텍스트',
    required: true,
    example: '초'
  }

  #swagger.responses[200] = {
    description: "검색 결과 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { 
                type: 'string', 
                example: '초코무스' 
              },
              image_link: { 
                type: 'string', 
                example: 'https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/menu_image/%EC%B4%88%EC%BD%94%EB%AC%B4%EC%8A%A4.png'
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: "잘못된 요청 - 검색 키워드 누락",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'FAIL' },
            error: {
              type: 'object',
              properties: {
                errorCode: { type: 'string', example: 'M008' },
                reason: { type: 'string', example: '검색 키워드가 필요합니다.' },
                data: { type: 'null', example: null }
              }
            },
            success: { type: 'null', example: null }
          }
        }
      }
    }
  }

  #swagger.responses[404] = {
    description: "필터링된 메뉴를 찾을 수 없음",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'FAIL' },
            error: {
              type: 'object',
              properties: {
                errorCode: { type: 'string', example: 'M006' },
                reason: { type: 'string', example: '필터링된 메뉴를 찾을 수 없습니다.' },
                data: { type: 'null', example: null }
              }
            },
            success: { type: 'null', example: null }
          }
        }
      }
    }
  }

  #swagger.responses[500] = {
    description: "서버 내부 오류",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'FAIL' },
            error: {
              type: 'object',
              properties: {
                errorCode: { type: 'string', example: 'M007' },
                reason: { type: 'string', example: '필터링된 메뉴 조회 중 오류 발생' },
                data: { type: 'null', example: null }
              }
            },
            success: { type: 'null', example: null }
          }
        }
      }
    }
  }
  */
}


