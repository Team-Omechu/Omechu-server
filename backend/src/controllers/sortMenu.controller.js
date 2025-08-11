import { StatusCodes } from "http-status-codes";
import { 
    getMenuRandomService, 
    insertMenuViewTimeService,
    getMenuRecentService,
    getMenuFilteredService
 } from "../services/sortMenu.service.js";
export const handleGetMenuRandom = async (req, res) => {
    try {
        console.log("Handling request for random menu from controller");
        const randomMenu = await getMenuRandomService();

        res.status(StatusCodes.OK).json(randomMenu);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            resultType: "FAIL",
            error: {
                errorCode: "M001",
                reason: "메뉴 랜덤 추천 중 오류 발생",
                data: null,
            },
        });
    }
    /*
      #swagger.tags = ["Menu"]
      #swagger.summary = "전체 메뉴 랜덤 순서로 가져오기 api"
      #swagger.description = "데이터베이스에 저장된 모든 메뉴 목록을 랜덤한 순서로 조회하는 API입니다."
  
      #swagger.responses[200] = {
        description: "메뉴 목록 랜덤으로 조회 성공",
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
}


// ...existing code...
export const handleInsertMenuViewTime = async (req, res) => {
  try {
    const  menuName  = req.body.name;
    console.log("insert menu view time for user from controller:", menuName);
    const userId = req.user.id;
    console.log("insert menu view time for user from controller:", userId, "menu:", menuName);
    if (!menuName) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: {
          errorCode: "M002",
          reason: "메뉴 이름이 필요합니다.",
          data: null,
        },
      });
    }

    // 서비스 호출
    const result = await insertMenuViewTimeService(userId, menuName);
    console.log("Menu view time inserted successfully from controller:", result);
    result.id = result.id.toString();
    result.user_id = result.user_id.toString();

    res.status(StatusCodes.OK).json({
      resultType: "SUCCESS",
      error: null,
      success: result,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      resultType: "FAIL",
      error: {
        errorCode: "M003",
        reason: "메뉴 조회 시간 기록 중 오류 발생",
        data: null,
      },
    });
  }
  /*
  #swagger.tags = ["Menu"]
  #swagger.summary = "메뉴 조회 시간 기록 API"
  #swagger.description = "사용자가 메뉴를 조회한 시간을 기록하는 API입니다."

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
              example: '짬뽕',
              description: "조회한 메뉴 이름"
            }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "메뉴 조회 시간 기록 성공",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'SUCCESS' },
            error: { type: 'null', example: null },
            success: {
              type: 'object',
              properties: {
                id: { type: 'string', example: '6' },
                user_id: { type: 'string', example: '20' },
                menu_name: { type: 'string', example: '짬뽕' },
                time: { type: 'string', example: '2025-08-11T05:04:37.000Z' }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: "잘못된 요청 - 메뉴 이름 누락",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'FAIL' },
            error: {
              type: 'object',
              properties: {
                errorCode: { type: 'string', example: 'M002' },
                reason: { type: 'string', example: '메뉴 이름이 필요합니다.' },
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
                errorCode: { type: 'string', example: 'M003' },
                reason: { type: 'string', example: '메뉴 조회 시간 기록 중 오류 발생' },
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



export const handleGetMenuRecent = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("Fetching recent menu for user from controller:", userId);
    
    // 서비스 호출
    const recentMenu = await getMenuRecentService(userId);
    
    if (!recentMenu) {
      return res.status(StatusCodes.NOT_FOUND).json({
        resultType: "FAIL",
        error: {
          errorCode: "M004",
          reason: "최근 메뉴를 찾을 수 없습니다.",
          data: null,
        },
      });
    }

    res.status(StatusCodes.OK).json(recentMenu);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      resultType: "FAIL",
      error: {
        errorCode: "M005",
        reason: "최근 메뉴 조회 중 오류 발생",
        data: null,
      },
    });
  }
  /*
  #swagger.tags = ["Menu"]
  #swagger.summary = "사용자 최근 조회 메뉴 목록 API"
  #swagger.description = "사용자가 최근에 조회한 메뉴 목록을 시간 순으로 조회하는 API입니다."

  #swagger.responses[200] = {
    description: "최근 조회 메뉴 목록 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', example: '초밥' }
            }
          }
        }
      }
    }
  }

  #swagger.responses[404] = {
    description: "최근 메뉴를 찾을 수 없음",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            resultType: { type: 'string', example: 'FAIL' },
            error: {
              type: 'object',
              properties: {
                errorCode: { type: 'string', example: 'M004' },
                reason: { type: 'string', example: '최근 메뉴를 찾을 수 없습니다.' },
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
                errorCode: { type: 'string', example: 'M005' },
                reason: { type: 'string', example: '최근 메뉴 조회 중 오류 발생' },
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

export const handleGetMenuFiltered = async (req, res) => {
  try {
    const tags = req.query.tags ? req.query.tags.split(',') : [];
    console.log("Fetching filtered menu with tags:", tags);

    // 서비스 호출
    const filteredMenu = await getMenuFilteredService(tags);

    if (!filteredMenu) {
      return res.status(StatusCodes.NOT_FOUND).json({
        resultType: "FAIL",
        error: {
          errorCode: "M006",
          reason: "필터링된 메뉴를 찾을 수 없습니다.",
          data: null,
        },
      });
    }

    res.status(StatusCodes.OK).json(filteredMenu);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      resultType: "FAIL",
      error: {
        errorCode: "M007",
        reason: "필터링된 메뉴 조회 중 오류 발생",
        data: null,
      },
    });
  }
  /*
  #swagger.tags = ["Menu"]
  #swagger.summary = "태그별 필터링된 메뉴 목록 API"
  #swagger.description = "특정 태그들을 모두 포함하는 메뉴 목록을 조회하는 API입니다."

  #swagger.parameters["tags"] = {
    in: 'query',
    description: '메뉴를 필터링할 태그들 (쉼표로 구분)',
    required: true,
    example: '점심,친구들,3만원 초과'
  }

  #swagger.responses[200] = {
    description: "필터링된 메뉴 목록 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', example: '55' },
              name: { type: 'string', example: '초밥' },
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
