import * as battleService from "../services/battle.service.js";

/**
 * Battle WebSocket Handler
 * Real-time communication with Socket.io
 */

export const setupBattleSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    /**
     * Join battle room
     * Event: battle:join
     * Data: { battleId, nickname }
     */
    socket.on("battle:join", async (data) => {
      try {
        const { battleId, nickname } = data;

        if (!battleId || !nickname) {
          socket.emit("error", {
            errorCode: "SOCKET_001",
            reason: "battleId와 nickname은 필수입니다",
          });
          return;
        }

        // Join battle via service
        const result = await battleService.joinBattleService(battleId, nickname);

        // Join Socket.io room
        socket.join(battleId);

        // Send success to requester
        socket.emit("battle:join:success", {
          participantId: result.participantId,
          nickname: result.nickname,
          joinedAt: result.joinedAt,
        });

        // Broadcast to all participants in the room
        io.to(battleId).emit("participant:joined", {
          nickname: result.nickname,
          joinedAt: result.joinedAt,
        });

        // Get updated battle details
        const battleDetails = await battleService.getBattleDetailsService(
          battleId
        );
        io.to(battleId).emit("participant:count:updated", {
          participantCount: battleDetails.participantCount,
        });

        console.log(
          `[Battle ${battleId}] ${nickname} joined (Socket: ${socket.id})`
        );
      } catch (error) {
        console.error("Socket battle:join error:", error);
        socket.emit("error", {
          errorCode: "SOCKET_001",
          reason: error.message,
        });
      }
    });

    /**
     * Execute spin (백엔드에서 랜덤 각도 생성)
     * Event: battle:spin
     * Data: { battleId, nickname }
     */
    socket.on("battle:spin", async (data) => {
      try {
        const { battleId, nickname } = data;

        if (!battleId || !nickname) {
          socket.emit("error", {
            errorCode: "SOCKET_002",
            reason: "battleId와 nickname은 필수입니다",
          });
          return;
        }

        // Execute spin via service (stoppedAngle 파라미터 제거!)
        const spinResult = await battleService.executeSpinService(
          battleId,
          nickname
        );

        // Broadcast spin completed (백엔드에서 생성한 각도 포함)
        io.to(battleId).emit("spin:completed", {
          nickname: spinResult.nickname,
          stoppedAngle: spinResult.stoppedAngle, // 백엔드에서 생성된 랜덤 각도!
          closestMenuName: spinResult.closestMenuName,
          distanceToBoundary: spinResult.distanceToBoundary,
          rank: spinResult.rank,
          spunAt: spinResult.spunAt,
        });

        // Get updated rankings
        const rankings = await battleService.getRankingsService(battleId);

        // Broadcast updated rankings
        io.to(battleId).emit("rankings:updated", {
          rankings,
        });

        console.log(
          `[Battle ${battleId}] ${nickname} spun: ${spinResult.stoppedAngle}° (Rank: ${spinResult.rank})`
        );
      } catch (error) {
        console.error("Socket battle:spin error:", error);
        socket.emit("error", {
          errorCode: "SOCKET_002",
          reason: error.message,
        });
      }
    });

    /**
     * Finish battle manually
     * Event: battle:finish
     * Data: { battleId, nickname }
     */
    socket.on("battle:finish", async (data) => {
      try {
        const { battleId, nickname } = data;

        if (!battleId || !nickname) {
          socket.emit("error", {
            errorCode: "SOCKET_004",
            reason: "battleId와 nickname은 필수입니다",
          });
          return;
        }

        // Finish battle via service
        const result = await battleService.finishBattleService(
          battleId,
          nickname
        );

        // Broadcast to all participants
        io.to(battleId).emit("battle:finished", {
          battleId: result.battleId,
          status: result.status,
          finishedAt: result.finishedAt,
          winner: result.winner,
        });

        console.log(
          `[Battle ${battleId}] Battle finished by ${nickname} (Winner: ${result.winner?.nickname || "None"})`
        );
      } catch (error) {
        console.error("Socket battle:finish error:", error);
        socket.emit("error", {
          errorCode: "SOCKET_004",
          reason: error.message,
        });
      }
    });

    /**
     * Leave battle room
     * Event: battle:leave
     * Data: { battleId, nickname }
     */
    socket.on("battle:leave", async (data) => {
      try {
        const { battleId, nickname } = data;

        if (!battleId || !nickname) {
          socket.emit("error", {
            errorCode: "SOCKET_003",
            reason: "battleId와 nickname은 필수입니다",
          });
          return;
        }

        // Leave battle via service
        await battleService.leaveBattleService(battleId, nickname);

        // Leave Socket.io room
        socket.leave(battleId);

        // Broadcast to remaining participants
        io.to(battleId).emit("participant:left", {
          nickname,
        });

        // Get updated battle details
        const battleDetails = await battleService.getBattleDetailsService(
          battleId
        );
        io.to(battleId).emit("participant:count:updated", {
          participantCount: battleDetails.participantCount,
        });

        console.log(
          `[Battle ${battleId}] ${nickname} left (Socket: ${socket.id})`
        );
      } catch (error) {
        console.error("Socket battle:leave error:", error);
        socket.emit("error", {
          errorCode: "SOCKET_003",
          reason: error.message,
        });
      }
    });

    /**
     * Get current battle state
     * Event: battle:state:request
     * Data: { battleId }
     */
    socket.on("battle:state:request", async (data) => {
      try {
        const { battleId } = data;

        if (!battleId) {
          socket.emit("error", {
            errorCode: "SOCKET_005",
            reason: "battleId는 필수입니다",
          });
          return;
        }

        const battleDetails = await battleService.getBattleDetailsService(
          battleId
        );

        socket.emit("battle:state:response", battleDetails);
      } catch (error) {
        console.error("Socket battle:state:request error:", error);
        socket.emit("error", {
          errorCode: "SOCKET_005",
          reason: error.message,
        });
      }
    });

    /**
     * Handle disconnection
     */
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};

/**
 * Broadcast battle finished event (called from cron job)
 * @param {Object} io - Socket.io instance
 * @param {string} battleId - Battle ID
 */
export const broadcastBattleExpired = (io, battleId) => {
  io.to(battleId).emit("battle:expired", {
    battleId,
    expiredAt: new Date(),
  });
  console.log(`[Battle ${battleId}] Battle expired`);
};
