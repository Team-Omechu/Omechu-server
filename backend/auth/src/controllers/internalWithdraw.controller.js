import { StatusCodes } from "http-status-codes";
import { 
    internalWithdrawService,
    internalHardDeleteService
 } from "../services/internalWithdraw.service.js";

export const handleInternalWithdraw = async (req, res, next) => {
  try {
    const { userId } = req.body;

    await internalWithdrawService(userId);

    res.status(StatusCodes.OK).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const handleInternalHardDelete = async (req, res, next) => {
  try {
    const { userId } = req.body;

    await internalHardDeleteService(userId);

    res.status(StatusCodes.OK).json({ success: true });
  } catch (error) {
    next(error);
  }
};