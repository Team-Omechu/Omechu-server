import { StatusCodes } from "http-status-codes";
import { recommendRandomService } from "./recommendRandom.service.js";

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
