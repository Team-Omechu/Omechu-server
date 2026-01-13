import express from "express";
import * as battleController from "../controllers/battle.controller.js";

const router = express.Router();

/**
 * Battle Routes
 * Base path: /api/battles
 */

// Create battle
router.post("/", battleController.handleCreateBattle);

// Get battle details
router.get("/:battleId", battleController.handleGetBattle);

// Join battle
router.post("/:battleId/join", battleController.handleJoinBattle);

// Execute spin
router.post("/:battleId/spin", battleController.handleSpin);

// Get rankings
router.get("/:battleId/rankings", battleController.handleGetRankings);

// Leave battle
router.delete(
  "/:battleId/participants/:nickname",
  battleController.handleLeaveBattle
);

export default router;
