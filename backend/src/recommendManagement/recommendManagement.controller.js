// recommendManagement/recommendManagement.controller.js

import { StatusCodes } from "http-status-codes";
import {
  getRecommendManagementService,
  addMenuToExceptService,
  removeMenuFromExceptService,
} from "./recommendManagement.service.js";

export const handleGetRecommendManagement = async (req, res, next) => {
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "사용자 추천/제외 메뉴 목록 조회"
  #swagger.description = "특정 사용자의 추천 받을 수 있는 메뉴와 현재 추천에서 제외된 메뉴 목록을 함께 조회합니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '조회할 사용자 ID',
    required: true,
    example: 1
  }
  #swagger.responses[200] = {
    description: "추천/제외 메뉴 목록 조회 성공",
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
                summary: {
                  type: "object",
                  properties: {
                    totalMenus: { type: "integer", example: 50 },
                    recommendMenus: { type: "integer", example: 45 },
                    exceptedMenus: { type: "integer", example: 5 }
                  }
                },
                recommendMenus: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "menu_001" },
                      name: { type: "string", example: "짜장면" },
                      image_link: { type: "string", example: "https://example.com/jjajangmyeon.jpg" }
                    }
                  }
                },
                exceptedMenus: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "menu_002" },
                      name: { type: "string", example: "짬뽕" },
                      image_link: { type: "string", example: "https://example.com/jjamppong.jpg" }
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
    description: "잘못된 요청",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "P001" },
                reason: { type: "string", example: "사용자 ID가 필요합니다." }
              }
            }
          }
        }
      }
    }
  }
  */
  try {
    const userId = req.user.id;
    const result = await getRecommendManagementService(parseInt(userId));
    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};

export const handleAddMenuToExcept = async (req, res, next) => {
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "메뉴 제외 목록에 추가"
  #swagger.description = "특정 메뉴를 사용자의 제외 목록에 추가하여 더 이상 추천받지 않도록 설정합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          oneOf: [ 
            {
              type: 'object',
              required: ['menuId'],
              properties: {
                menuId: { type: 'string', example: 35 }
              }
            },
            {
              type: 'object',
              required: ['menuName'],
              properties: {
                menuName: { type: 'string', example: '짜장면' }
              }
            }
          ]
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "메뉴 제외 목록에 성공적으로 추가됨",
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
                id: { type: "string", example: "exclude_item_10" },
                menu: {
                  type: "object",
                  properties: {
                    id: { type: "string", example: "menu_001" },
                    name: { type: "string", example: "짜장면" },
                    image_link: { type: "string", example: "https://example.com/jjajangmyeon.jpg" }
                  }
                },
                message: { type: "string", example: "메뉴가 제외 목록에 성공적으로 추가되었습니다." }
              }
            }
          }
        }
      }
    }
  }
  */
  try {
    const userId = req.user.id;
    const { menuId, menuName } = req.body;

    const result = await addMenuToExceptService(
      parseInt(userId),
      menuId ? parseInt(menuId) : null,
      menuName
    );

    res.status(StatusCodes.CREATED).success(result);
  } catch (error) {
    next(error);
  }
};

export const handleRemoveMenuExcept = async (req, res, next) => {
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "메뉴 제외 목록에서 제거"
  #swagger.description = "사용자의 제외 목록에서 특정 메뉴를 제거하여 해당 메뉴를 다시 추천받을 수 있도록 설정합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          oneOf: [ 
            {
              type: 'object',
              required: ['menuId'],
              properties: {
                menuId: { type: 'string', example: 35 }
              }
            },
            {
              type: 'object',
              required: ['menuName'],
              properties: {
                menuName: { type: 'string', example: '라멘' }
              }
            }
          ]
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "메뉴 제외 목록에서 성공적으로 제거됨",
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
                success: { type: "boolean", example: true },
                message: { type: "string", example: "메뉴가 제외 목록에서 성공적으로 제거되었습니다." }
              }
            }
          }
        }
      }
    }
  }
  */
  try {
    const userId = req.user.id;
    const { menuId, menuName } = req.body;

    const result = await removeMenuFromExceptService(
      parseInt(userId),
      menuId ? parseInt(menuId) : null,
      menuName
    );

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};