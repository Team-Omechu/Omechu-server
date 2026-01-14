import { StatusCodes } from "http-status-codes";
import { loginWithGoogleService } from "../services/google.service.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
import { createClient } from "redis";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

export const handleGoogleRedirect = (req, res) => {
  const redirectUrl =
    `https://accounts.google.com/o/oauth2/v2/auth` +
    `?response_type=code` +
    `&client_id=${process.env.GOOGLE_CLIENT_ID}` +
    `&redirect_uri=${process.env.GOOGLE_LOGIN_REDIRECT_URI}` +
    `&scope=openid email profile`;

  res.redirect(redirectUrl);
};


export const handleGoogleLogin = async (req, res, next) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        resultType: "FAIL",
        error: { reason: "code is required" },
      });
    }

    const user = await loginWithGoogleService(code);
    const uid = Number(user.id);

    const accessToken = generateAccessToken({ id: uid });
    const refreshToken = generateRefreshToken({ id: uid });

    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    await redisClient.set(`refresh:${uid}`, refreshToken, {
      EX: 60 * 60 * 24 * 7,
    });

    return res.status(StatusCodes.OK).json({
      resultType: "SUCCESS",
      success: {
        accessToken,
        refreshToken,
      },
    });
  } catch (err) {
    console.error("[Google Login Error]", err?.response?.data || err.message);
    next(err);
  }
};
