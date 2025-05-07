export function applyModifiers(character) {
  const modified = JSON.parse(JSON.stringify(character)); // Deep clone to avoid mutation

  const { age, class: classObj, rawStats, baseStats } = character;

  // ----------- Stat Modifier Base -----------
  let brawn = rawStats.brawn;
  let brains = rawStats.brains;
  let speed = rawStats.speed;

  // ----------- Age Modifiers -----------
  if (age <= 20) {
    brawn += 2;
    brains -= 2;
    speed += 1;
  } else if (age >= 41 && age <= 60) {
    brawn -= 2;
    brains += 2;
    speed -= 1;
  } else if (age > 60) {
    brawn -= 3;
    brains += 3;
    speed -= 2;
  }

  // ----------- Class Modifiers -----------
  let hp = baseStats.hp;
  let mp = baseStats.mp;
  let ap = baseStats.ap;

  switch (classObj.className) {
    case "Warrior":
      hp += 30;
      ap += 1;
      break;
    case "Mage":
      hp -= 10;
      mp += 40;
      break;
    case "Hunter":
    case "Ranger":
      hp += 10;
      mp += 10;
      ap += 2;
      break;
    default:
      break;
  }

  // Finalize modified stats
  modified.modifiedStats = {
    brawn,
    brains,
    speed,
    hp,
    mp,
    ap
  };

  return modified;
}
