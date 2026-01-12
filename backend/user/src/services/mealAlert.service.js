import {
  findMealAlertsByUser,
  upsertMealAlert,
  updateAllMealAlertsEnabled,
} from "../repositories/mealAlert.repository.js";
import { MEAL_DEFAULTS } from "../utils/mealDefault.js";

const formatTime = (date) => {
  const d = new Date(date);
  return `${String(d.getHours()).padStart(2, "0")}:${String(
    d.getMinutes()
  ).padStart(2, "0")}`;
};

export const getMealAlertSettings = async (userId) => {
  const alerts = await findMealAlertsByUser(userId);

  const alertMap = {};
  alerts.forEach((a) => {
    alertMap[Number(a.meal_id)] = a;
  });

  const result = {};

  Object.entries(MEAL_DEFAULTS).forEach(([mealId, def]) => {
    const userSetting = alertMap[Number(mealId)];

    result[def.key] = {
      enabled: userSetting?.enabled ?? def.enabled,
      time: userSetting?.alarm_time
        ? formatTime(userSetting.alarm_time)
        : def.time,
      min: def.min,
      max: def.max,
    };
  });

  return result;
};

export const updateMealAlertSettings = async (userId, settings) => {
  for (const [mealId, def] of Object.entries(MEAL_DEFAULTS)) {
    const payload = settings[def.key];
    if (!payload) continue;

    const alarmTime =
      payload.enabled && payload.time
        ? new Date(`1970-01-01T${payload.time}:00`)
        : null;

    await upsertMealAlert(
      userId,
      Number(mealId),
      payload.enabled,
      alarmTime
    );
  }

  return settings;
};

export const toggleMealAlerts = async (userId, enabled) => {
  await updateAllMealAlertsEnabled(userId, enabled);
  return { enabled };
};
