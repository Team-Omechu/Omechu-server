import axios from "axios";
import qs from "qs";
import { findUserByProvider, createUser } from "../repositories/user.repository.js";

export const loginWithGoogleService = async (code) => {

  const tokenRes = await axios.post(
    "https://oauth2.googleapis.com/token",
    qs.stringify({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_LOGIN_REDIRECT_URI,
      grant_type: "authorization_code",
    }),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
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

  const googleId = userRes.data.id;
  const email = userRes.data.email ?? null;

  let user = await findUserByProvider("google", googleId);

  if (!user) {
    user = await createUser({
      email,
      provider: "google",
      provider_id: googleId,
    });
  }

  const uid = Number(user.id);

  await axios.post(
    `${process.env.USER_SERVICE_URL}/user/internal`,
    { userId: uid },
    {
      headers: {
        "x-internal-key": process.env.INTERNAL_API_KEY,
      },
      timeout: 3000,
    }
  );

  return user;
};
