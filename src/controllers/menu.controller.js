import { StatusCodes } from "http-status-codes";
import {bodyToChoice} from "../dtos/choice.dto.js";
import {recommendMenuService } from "../services/menu.service.js";
export const handleRecommendMenu = async (req, res) => {
    const choice = bodyToChoice(req.body);
    
    const newRecommendation = await recommendMenuService(choice);
    if (newRecommendation) {
        res.status(StatusCodes.OK).json(newRecommendation);
    } else {
        res.status(StatusCodes.NOT_FOUND).json({ message: "No recommendation found" });
    }
}