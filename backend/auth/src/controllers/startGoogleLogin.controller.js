import { StatusCodes } from "http-status-codes";
import crypto from "crypto";
import { createClient } from "redis";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

const ALLOWED_REDIRECT_URIS = [
  "http://localhost:3000/login/callback",
  "https://omechu.log8.kr/login/callback",
];

export const startGoogleLogin = async (req, res, next) => {
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
      `oauth:google:${state}`,
      redirectUri,
      { EX: 300 }
    );

    const authorizeUrl =
      `https://accounts.google.com/o/oauth2/v2/auth` +
      `?client_id=${process.env.GOOGLE_CLIENT_ID}` +
      `&redirect_uri=${process.env.GOOGLE_LOGIN_REDIRECT_URI}` +
      `&response_type=code` +
      `&scope=openid email profile` +
      `&state=${state}`;

    return res.status(StatusCodes.OK).success({
      authorizeUrl,
    });
  } catch (err) {
    next(err);
  }
};
