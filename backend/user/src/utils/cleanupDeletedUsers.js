import axios from "axios";
import { prisma } from "../db.config.js";

const AUTH_SERVICE_BASE_URL = process.env.AUTH_SERVICE_BASE_URL;

export const cleanupDeletedUsers = async () => {
  const THIRTY_DAYS_AGO = new Date(
    Date.now() - 30 * 24 * 60 * 60 * 1000
  );

  const users = await prisma.user.findMany({
    where: {
      is_deleted: true,
      deleted_at: { lt: THIRTY_DAYS_AGO },
    },
    select: { id: true },
  });

  for (const user of users) {
    await axios.post(
      `${AUTH_SERVICE_BASE_URL}/auth/internal/hard-delete`,
      { userId: user.id.toString() },
      {
        headers: {
          Authorization: "Internal-Service user-service",
        },
      }
    );

    // user DB hard delete
    await prisma.user.delete({
      where: { id: user.id },
    });
  }

  console.log(`🧹 ${users.length} users permanently deleted`);
};
