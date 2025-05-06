export function applyModifiers(character) {
    let modified = { ...character };
  
    const { brawn, brains, speed } = character.rawStats;
  
    // Apply age-based stat modifiers
    if (character.age <= 20) {
      modified.rawStats = {
        brawn: brawn + 2,
        brains: brains - 2,
        speed: speed + 1
      };
    } else if (character.age >= 41 && character.age <= 60) {
      modified.rawStats = {
        brawn: brawn - 2,
        brains: brains + 2,
        speed: speed - 1
      };
    }
  
    // Apply class bonuses (simplified)
    switch (character.class) {
      case "Warrior":
        modified.baseStats.hp += 30;
        modified.baseStats.ap += 1;
        break;
      case "Mage":
        modified.baseStats.hp -= 10;
        modified.baseStats.mp += 40;
        break;
      case "Ranger":
        modified.baseStats.hp += 10;
        modified.baseStats.mp += 10;
        modified.baseStats.ap += 2;
        break;
    }
  
    return modified;
  }