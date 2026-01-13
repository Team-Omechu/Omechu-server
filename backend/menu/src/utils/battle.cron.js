import { cleanupExpiredBattlesService } from "../services/battle.service.js";

/**
 * Cron Job for Battle Cleanup
 * Runs every 1 minute to cleanup expired battles
 */

let cronInterval = null;

/**
 * Start cron job
 * @param {Object} io - Socket.io instance (optional)
 */
export const startBattleCleanupCron = (io = null) => {
  if (cronInterval) {
    console.log("⚠️  Battle cleanup cron is already running");
    return;
  }

  console.log("✅ Starting battle cleanup cron (runs every 1 minute)");

  cronInterval = setInterval(async () => {
    try {
      const count = await cleanupExpiredBattlesService();

      if (count > 0) {
        console.log(
          `🧹 [Cron] Cleaned up ${count} expired battle(s) at ${new Date().toISOString()}`
        );

        // TODO: If you want to notify connected clients about expired battles
        // You can broadcast using Socket.io here
        if (io) {
          // Example: io.emit('battles:cleanup', { count });
        }
      }
    } catch (error) {
      console.error("❌ [Cron] Battle cleanup error:", error);
    }
  }, 60000); // Run every 1 minute (60,000 ms)
};

/**
 * Stop cron job
 */
export const stopBattleCleanupCron = () => {
  if (cronInterval) {
    clearInterval(cronInterval);
    cronInterval = null;
    console.log("⏹  Battle cleanup cron stopped");
  }
};

/**
 * Manual cleanup trigger (for testing)
 */
export const triggerManualCleanup = async () => {
  try {
    console.log("🔧 Manual cleanup triggered");
    const count = await cleanupExpiredBattlesService();
    console.log(`✅ Manually cleaned up ${count} expired battle(s)`);
    return count;
  } catch (error) {
    console.error("❌ Manual cleanup error:", error);
    throw error;
  }
};
