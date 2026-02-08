import { fetchGooglePlacesService } from "../services/fetchGooglePlaces.service.js";

export const handleFetchGooglePlaces = async (req, res) => {
  const info = {
    keyword: req.body.keyword,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    radius: req.body.radius,
    page: req.body.page, // 페이지 번호 (1부터 시작)
  };

  try {
    const result = await fetchGooglePlacesService(info);

    if (result && result.items && result.items.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No places found" });
    }
  } catch (error) {
    console.error("Error fetching Google places:", error);
    res.status(500).json({ message: "Internal server error" });
  }
  /*
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "Google Places API를 이용한 장소 검색 API"
  #swagger.description = "Google Places API를 사용하여 특정 위치 주변의 장소를 검색하는 API입니다."

  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['latitude', 'longitude', 'radius', 'keyword'],
          properties: {
            latitude: { 
              type: 'number', 
              example: 37.4895246,
              description: "검색할 위치의 위도"
            },
            longitude: { 
              type: 'number', 
              example: 126.986331,
              description: "검색할 위치의 경도"
            },
            radius: { 
              type: 'integer', 
              example: 3000,
              description: "검색 반경 (미터 단위)"
            },
            keyword: { 
              type: 'string', 
              example: "젤라또",
              description: "검색할 키워드"
            },
            page: {
              type: 'integer',
              example: 1,
              description: "요청할 페이지 번호 (1부터 시작)"
            }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "장소 검색 성공",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            page: { type: 'integer', example: 1, description: '현재 페이지 번호' },
            pageSize: { type: 'integer', example: 3, description: '페이지당 항목 수 (고정 3개)' },
            totalCount: { type: 'integer', example: 24, description: '전체 검색 결과 수' },
            totalPages: { type: 'integer', example: 8, description: '전체 페이지 수' },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', example: 'ChIJ86MmmAGhfDUR1C6TNesYXDM' },
                  formattedAddress: { 
                    type: 'string', 
                    example: '대한민국 서울특별시 서초구 방배본동 동광로 67' 
                  },
                  primaryType: { type: 'string', example: '중식당', description: '음식점 종류 (한국어)' },
                  priceLevel: { type: 'string', example: '10,000~20,000', description: '가격대 범위' },
                  photo: { 
                    type: 'object',
                    properties: {
                      name: { type: 'string', example: 'places/ChIJ86MmmAGhfDUR1C6TNesYXDM/photos/xxx' }
                    }
                  },
                  distance: { 
                    type: 'integer', 
                    example: 1250,
                    description: '요청 위치로부터의 거리 (미터)'
                  },
                  displayName: { 
                    type: 'object',
                    properties: {
                      text: { type: 'string', example: '일일향 방배점' },
                      languageCode: { type: 'string', example: 'ko' }
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
//

  #swagger.responses[404] = {
    description: "장소를 찾을 수 없음",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'No places found' }
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
            message: { type: 'string', example: 'Internal server error' }
          }
        }
      }
    }
  }
  */
};
