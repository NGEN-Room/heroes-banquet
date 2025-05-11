// engine/movementEngine.js

// Get the tile distance between two players
export function getDistance(battleCharA, battleCharB) {
    return Math.abs(battleCharA.position - battleCharB.position);
  }
  
  // Convert distance to a range level: 0 (close), 1 (mid), 2 (far)
  export function getRangeLevel(distance) {
    if (distance === 0) return 0;
    if (distance === 1) return 1;
    return 2; // distance 2 or greater
  }
  
  // Check if a target is in range for a given range level
  export function isInRange(attacker, target, requiredRange) {
    const distance = getDistance(attacker, target);
    return getRangeLevel(distance) <= requiredRange;
  }
  
  // Move the player left on the grid (min 0)
  export function moveLeft(battleChar) {
    battleChar.position = Math.max(0, battleChar.position - 1);
  }
  
  // Move the player right on the grid (max 5)
  export function moveRight(battleChar) {
    battleChar.position = Math.min(5, battleChar.position + 1);
  }
  
  // Example usage:
  // moveRight(player1);
  // if (isInRange(player1, player2, 1)) doAttack();