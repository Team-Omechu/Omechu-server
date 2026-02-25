import { cleanupExpiredBattlesService } from "../services/battle.service.js";

/**
 * Cron Job for Battle Cleanup
 * Runs every 15 minutes to cleanup expired battles
 */

let cronInterval = null;
let isRunning = false; // ← 실행 중 플래그 추가

/**
 * Start cron job
 * @param {Object} io - Socket.io instance (optional)
 */
export const startBattleCleanupCron = (io = null) => {
  if (cronInterval) {
    console.log("⚠️  Battle cleanup cron is already running");
    return;
  }

  console.log("✅ Starting battle cleanup cron (runs every 15 minutes)");

  cronInterval = setInterval(async () => {
    // ← 이전 실행이 완료되지 않았으면 스킵
    if (isRunning) {
      console.log("⏭️  [Cron] Previous cleanup still running, skipping...");
      return;
    }

    isRunning = true; // ← 실행 시작

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
    } finally {
      isRunning = false; // ← 실행 완료 (에러 발생해도 해제)
    }
  }, 900000); // ← 15분으로 변경 (15 * 60 * 1000)
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
