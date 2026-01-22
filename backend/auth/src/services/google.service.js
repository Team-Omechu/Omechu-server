import axios from "axios";
import {
  findUserByProvider,
  createOAuthUser,
} from "../repositories/user.repository.js";

export const loginWithGoogleService = async (code) => {
  const decodedCode = decodeURIComponent(code);

  const tokenRes = await axios.post(
    "https://oauth2.googleapis.com/token",
    new URLSearchParams({
      code: decodedCode,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_LOGIN_REDIRECT_URI,
      grant_type: "authorization_code",
    }).toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const googleAccessToken = tokenRes.data.access_token;

  const userRes = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: {
        Authorization: `Bearer ${googleAccessToken}`,
      },
    }
  );

  const providerId = String(userRes.data.id);
  const email = userRes.data.email ?? null;

  let user = await findUserByProvider("google", providerId);

  if (!user) {
    user = await createOAuthUser({
      email,
      provider: "google",
      providerId,
    });
  }

  return user;
};
