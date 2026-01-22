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
    const { code, state } = req.query;

    if (!code || !state) {
      return res.status(400).json({
        errorCode: "P001",
        reason: "code and state are required",
      });
    }

    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    const redirectUri = await redisClient.get(`oauth:kakao:${state}`);

    if (!redirectUri) {
      return res.status(400).json({
        errorCode: "P003",
        reason: "Invalid or expired state",
      });
    }

    await redisClient.del(`oauth:kakao:${state}`);

    const user = await loginWithKakaoService(code);
    const uid = Number(user.id);

    await axios.post(
      `${USER_SERVICE_URL}/user/internal`,
      { userId: uid },
      {
        headers: { "x-internal-key": process.env.INTERNAL_API_KEY },
        timeout: 3000,
      }
    );

    const accessToken = generateAccessToken({ id: uid });
    const refreshToken = generateRefreshToken({ id: uid });

    await redisClient.set(`refresh:${uid}`, refreshToken, {
      EX: 60 * 60 * 24 * 7,
    });

    return res.redirect(
      `${redirectUri}?accessToken=${accessToken}`
    );
  } catch (err) {
    next(err);
  }
};
