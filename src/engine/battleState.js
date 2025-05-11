// engine/battleState.js

import thornTemplate from "@/data/heroes/Thorn/export";
import kaiaTemplate from "@/data/heroes/Kaia/export";
import { applyModifiers } from "./applyModifiers";

// Function to spawn a live character instance from a hero template
export function spawnCharacter(template, startingPosition) {
  const modifiedTemplate = applyModifiers(template);

  return {
    character: template,            // original template (for reference)
    modifiedStats: modifiedTemplate.modifiedStats, // include brawn/brains/speed + hp/mp/ap
    hp: modifiedTemplate.modifiedStats.hp,
    mp: modifiedTemplate.modifiedStats.mp,
    ap: modifiedTemplate.modifiedStats.ap,
    position: startingPosition,
    status: [],                     // active status effects
    queue: []                       // queued actions/spells this turn
  };
}

// Initialize the battle state
const battleState = {
  player1: spawnCharacter(thornTemplate, 0), // Thorn starts on left
  player2: spawnCharacter(kaiaTemplate, 4)   // Kaia starts on right
};

export default battleState;
