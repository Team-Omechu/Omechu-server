import { StatusCodes } from "http-status-codes";
import { getMenuInfoService } from "./menuInfo.service.js";

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
							description: { type: 'string', example: '간장 소스로 볶은 중화풍 면 요리' },
							calory: { type: 'number', example: 800 },
							carbo: { type: 'number', example: 90 },
							protein: { type: 'number', example: 20 },
							fat: { type: 'number', example: 30 },
							sodium: { type: 'number', example: 1200 },
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
								example: 'https://example.com/image.jpg' 
							},
							recipe_link: {
								type: 'string',
								example: 'https://www.youtube.com/watch?v=YMbnuHN_TfE'
							},
							recipe_link_source: {
								type: 'string',
								example: '김대석 셰프TV'
							},
							recipe_video_name: {
								type: 'string',
								example: '전문점 뺨치는 짜장면 비밀레시피 공개합니다'
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
