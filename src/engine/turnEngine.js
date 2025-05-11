// engine/turnEngine.js

import { resolveStatuses } from "./statusWatch";
import { getDistance, getRangeLevel } from "./movementEngine";

// Execute a full turn for both players
export function runTurn(player1, player2) {
  // 1. Resolve statuses first (may clear action queue)
  resolveStatuses(player1);
  resolveStatuses(player2);

  // 2. Merge both players' queues with reference to target
  const allActions = [...player1.queue.map(action => ({
    owner: player1,
    target: player2,
    ...action
  })), ...player2.queue.map(action => ({
    owner: player2,
    target: player1,
    ...action
  }))];

  // 3. Sort by owner speed + optional action speed (if defined)
  allActions.sort((a, b) => {
    const aSpeed = a.owner.modifiedStats.speed + (a.speed || 0);
    const bSpeed = b.owner.modifiedStats.speed + (b.speed || 0);
    return bSpeed - aSpeed;
  });

  // 4. Execute actions if owner still has AP/MP
  for (const action of allActions) {
    const { owner, target, cost = 0, mpCost = 0, effect } = action;

    if (owner.ap >= cost && owner.mp >= mpCost && typeof effect === 'function') {
      owner.ap -= cost;
      owner.mp -= mpCost;
      effect(owner, target); // Execute the action or spell
    }
  }

  // 5. Regenerate resources (simple model: +1 AP, +brains*0.25 MP)
  regenerateResources(player1);
  regenerateResources(player2);

  // 6. Clear queues
  player1.queue = [];
  player2.queue = [];
}

function regenerateResources(player) {
  player.ap = Math.min(player.ap + 1, player.modifiedStats.ap); // Cap to base AP
  player.mp += Math.floor(player.character.rawStats.brains * 0.25);
}
