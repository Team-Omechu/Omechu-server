import { StatusCodes } from "http-status-codes";
import {bodyToChoice} from "../dtos/choice.dto.js";
import {recommendMenuService,findRelatedMenuService } from "../services/menu.service.js";
export const handleRecommendMenu = async (req, res) => {
    const choice = bodyToChoice(req.body);
    
    const newRecommendation = await recommendMenuService(choice);
    if (newRecommendation) {
        res.status(StatusCodes.OK).json(newRecommendation);
    } else {
        res.status(StatusCodes.NOT_FOUND).json({ message: "No recommendation found" });
    }
}

export const handleFindRelatedMenu = async (req, res) => {
    const { menuName } = req.body;

    try {
        const relatedMenus = await findRelatedMenuService(menuName);
        if (relatedMenus && relatedMenus.length > 0) {
            res.status(StatusCodes.OK).json(relatedMenus);
        } else {
            res.status(StatusCodes.NOT_FOUND).json({ message: "No related menus found" });
        }
    } catch (error) {
        console.error("Error finding related menus:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
    }
}