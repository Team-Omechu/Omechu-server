import { StatusCodes } from "http-status-codes";
import { getMenuService } from "./getMenu.service.js";

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
		#swagger.summary = "전체 메뉴 조회 API"
		#swagger.description = "데이터베이스에 저장된 모든 메뉴 목록을 조회하는 API입니다."

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
