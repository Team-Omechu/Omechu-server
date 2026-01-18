import { StatusCodes } from "http-status-codes";
import axios from "axios";
import { loginWithKakaoService } from "../services/kakao.service.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
import { createClient } from "redis";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

export const handleKakaoLogin = async (req, res, next) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "P001",
        reason: "code is required",
      });
    }

    const user = await loginWithKakaoService(code);
    const uid = Number(user.id);

    await axios.post(
      `${USER_SERVICE_URL}/user/internal`,
      { userId: uid },
      {
        headers: {
          "x-internal-key": process.env.INTERNAL_API_KEY,
        },
        timeout: 3000,
      },
    );

    const accessToken = generateAccessToken({ id: uid });
    const refreshToken = generateRefreshToken({ id: uid });

    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    //     await redisClient.set(`refresh:${uid}`, refreshToken, {
    //       EX: 60 * 60 * 24 * 7,
    //     });

    return res.status(StatusCodes.OK).success({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error("[Kakao OAuth Login Error]", err);
    next(err);
  }
};
