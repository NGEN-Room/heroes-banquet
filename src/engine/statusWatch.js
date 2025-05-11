 // engine/statusWatch.js

 //battleCharacter = The battle state of the hero, NOT template
 // statusObj = the status object EFFECT (ones we build) we are pushing on to the status array


// Apply a new status (helper function)
export function applyStatus(battleCharacter, statusObj) {
    // map array for if there is a status that already exisit with the same name
    const alreadyExists = battleCharacter.status.find(s => s.name === statusObj.name);
  
    // If statusObj.canStack is true, allow duplicates
    if (statusObj.canStack || !alreadyExists) {
      battleCharacter.status.push(statusObj);
    }
  }
  
  // Process all statuses
  export function resolveStatuses(battleCharacter) {
    battleCharacter.status.forEach(status => {
      if (typeof status.effect === 'function') {
        status.effect(battleCharacter); // Run custom logic (bleed, stun, etc.)
      }
  
      status.turnsRemaining -= 1;
    });
  
    clearExpiredStatuses(battleCharacter);
  }
  
  function clearExpiredStatuses(battleCharacter) {
    battleCharacter.status = battleCharacter.status.filter(s => s.turnsRemaining > 0);
  }