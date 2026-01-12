import { prisma } from "../db.config.js";

export const findMealAlertsByUser = async (userId) => {
  return prisma.meal_alert.findMany({
    where: { user_id: BigInt(userId) },
  });
};

export const upsertMealAlert = async (
  userId,
  mealId,
  enabled,
  alarmTime
) => {
  return prisma.meal_alert.upsert({
    where: {
      user_id_meal_id: {
        user_id: BigInt(userId),
        meal_id: BigInt(mealId),
      },
    },
    update: {
      enabled,
      alarm_time: alarmTime,
    },
    create: {
      user_id: BigInt(userId),
      meal_id: BigInt(mealId),
      enabled,
      alarm_time: alarmTime,
    },
  });
};

export const updateAllMealAlertsEnabled = async (userId, enabled) => {
  return prisma.meal_alert.updateMany({
    where: { user_id: BigInt(userId) },
    data: { enabled },
  });
};
