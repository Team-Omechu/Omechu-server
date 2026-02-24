import dotenv from "dotenv";
dotenv.config();

import * as Sentry from "@sentry/node";

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    sendDefaultPii: true,
  });
  Sentry.setTag("service", "auth_api");
}
