import { StatusCodes } from "http-status-codes";
import { recommendRandomService } from "../services/menu.service.js";
import {
  getMenuService,
  getMenuInfoService,
} from "../services/menu.service.js";

export const handleGetMenuInfo = async (req, res) => {
  const { name } = req.body;
  try {
    const menuInfo = await getMenuInfoService(name);
    if (menuInfo) {
      res.status(StatusCodes.OK).json(menuInfo);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Menu not found" });
    }
  } catch (error) {
    console.error("Error fetching menu info:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }

  /*
    #swagger.tags = ["Menu"]
    #swagger.summary = "특정 메뉴 정보 조회 API"
    #swagger.description = "메뉴명을 통해 특정 메뉴의 상세 정보를 조회하는 API입니다."

    #swagger.requestBody = {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['name'],
            properties: {
              name: { 
                type: 'string', 
                example: "된장찌개",
                description: "조회할 메뉴명"
              }
            }
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "메뉴 정보 조회 성공",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: { type: 'string', example: '짜장면' },
              description: { type: 'string', nullable: true, example: '간장 소스로 볶은 중화풍 면 요리' },
              calory: { type: 'number', nullable: true, example: 800 },
              carbo: { type: 'number', nullable: true, example: 90 },
              protein: { type: 'number', nullable: true, example: 20 },
              fat: { type: 'number', nullable: true, example: 30 },
              sodium: { type: 'number', nullable: true, example: 1200 },
              vitamin: {
                type: 'array',
                items: { type: 'string' },
                example: ['A', 'B1', 'B2', 'C']
              },
              allergic: {
                type: 'array',
                items: { type: 'string' },
                example: ['밀', '대두']
              },
              image_link: { 
                type: 'string', 
                nullable: true,
                example: 'https://example.com/image.jpg' 
              }
            }
          }
        }
      }
    }

    #swagger.responses[404] = {
      description: "메뉴를 찾을 수 없음",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string', example: 'Menu not found' }
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

export const handleRecommendRandom = async (req, res) => {
  try {
    const { addition } = req.body;
    console.log("Random menu recommendation request with addition:", addition);
    const randomMenu = await recommendRandomService(addition);
    if (randomMenu) {
      res.status(StatusCodes.OK).json(randomMenu);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "No menu found" });
    }
  } catch (error) {
    console.error("Error fetching random menu:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }

  /*
    #swagger.tags = ["Menu"]
    #swagger.summary = "랜덤 메뉴 추천 API"
    #swagger.description = "사용자에게 랜덤으로 메뉴를 추천하는 API입니다."

    #swagger.requestBody = {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['addition'],
            properties: {
              addition: {
                type: 'array',
                items: { type: 'string' },
                example: ["일식", "해산물"],
                description: "추가 조건으로 원하는 카테고리"
              }
            }
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "랜덤 메뉴 추천 성공",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: { type: 'string', example: '카이센동' },
              image_link: { 
                type: 'string', 
                example: 'https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/menu_image/%EC%B9%B4%EC%9D%B4%EC%84%BC%EB%8F%99.png' 
              }
            }
          }
        }
      }
    }

    #swagger.responses[404] = {
      description: "메뉴를 찾을 수 없음",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string', example: 'No menu found' }
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

export const handleGetMenu = async (req, res) => {
  try {
    const menus = await getMenuService();
    if (menus && menus.length > 0) {
      res.status(StatusCodes.OK).json(menus);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "No menus found" });
    }
  } catch (error) {
    console.error("Error fetching menus:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }

  /*
    #swagger.tags = ["Menu"]
    #swagger.summary = "전체 메뉴 목록 조회 API (GET /menu)"
    #swagger.description = "특정 메뉴 한 개가 아니라, 데이터베이스에 저장된 모든 메뉴 목록을 한 번에 조회하는 API입니다. 요청 바디나 쿼리 파라미터 없이 GET /menu 로 호출합니다."

    #swagger.responses[200] = {
      description: "메뉴 목록 조회 성공",
      content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: { type: 'string', example: '회' },
                  image_link: { 
                    type: 'string', 
                    nullable: true,
                    example: null 
                  }
                }
              }
            }
          }
        }
    }

    #swagger.responses[404] = {
      description: "메뉴를 찾을 수 없음",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string', example: 'No menus found' }
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
