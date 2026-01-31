import { StatusCodes } from "http-status-codes";
import crypto from "crypto";
import { createClient } from "redis";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

const ALLOWED_REDIRECT_URIS = [
  "http://localhost:3001/auth/callback/kakao",
  "https://omechu.log8.kr/auth/callback/kakao",
];

export const startKakaoLogin = async (req, res, next) => {
  try {
    const { redirectUri } = req.body;

    if (!redirectUri) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "P001",
        reason: "redirectUri is required",
      });
    }

    if (!ALLOWED_REDIRECT_URIS.includes(redirectUri)) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "P002",
        reason: "Invalid redirectUri",
      });
    }

    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    const state = crypto.randomUUID();

    await redisClient.set(
      `oauth:kakao:${state}`,
      redirectUri,
      { EX: 300 }
    );

    const authorizeUrl =
      `https://kauth.kakao.com/oauth/authorize` +
      `?client_id=${process.env.KAKAO_LOGIN_REST_API_KEY}` +
      `&redirect_uri=${process.env.KAKAO_REDIRECT_URI}` +
      `&response_type=code` +
      `&state=${state}`;

    return res.status(StatusCodes.OK).success({
      authorizeUrl,
    });
  } catch (err) {
    next(err);
  }
};
