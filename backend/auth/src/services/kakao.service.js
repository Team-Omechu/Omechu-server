import axios from "axios";
import qs from "qs";
import {
  findUserByProvider,
  createOAuthUser,
} from "../repositories/user.repository.js";

export const exchangeCodeForTokenService = async (code) => {
  const tokenRes = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    qs.stringify({
      grant_type: "authorization_code",
      client_id: process.env.KAKAO_LOGIN_REST_API_KEY,
      redirect_uri: process.env.KAKAO_REDIRECT_URI,
      code,
      client_secret: process.env.KAKAO_CLIENT_SECRET,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  const accessToken = tokenRes.data.access_token;

  const userRes = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const kakaoAccount = userRes.data.kakao_account;

  return {
    providerId: String(userRes.data.id),
    email: kakaoAccount?.email ?? null,
  };
};

export const loginWithKakaoService = async (code) => {
  const kakaoUser = await exchangeCodeForTokenService(code);

  let user = await findUserByProvider("kakao", kakaoUser.providerId);

  if (!user) {
    user = await createOAuthUser({
      email: kakaoUser.email,
      provider: "kakao",
      providerId: kakaoUser.providerId,
    });
  }

  return user;
};
