import { StatusCodes } from "http-status-codes";
import { withdrawService } from "../services/withdraw.service.js";

export const handleWithdraw = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { confirmed, reason } = req.body;

    const result = await withdrawService(userId, confirmed, reason);

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};
