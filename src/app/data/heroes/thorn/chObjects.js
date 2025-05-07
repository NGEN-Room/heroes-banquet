const thorn = {
    name: "Thorn Ironfist",
    age: 35,
    class: {
      className: "Warrior",
      rage: 0,             // Can be used for special attacks
      blockChance: 0.15,   // 15% chance to block physical damage
      adrenalineStacks: 0  // Grows on damage taken, boosts AP later
    },
    status: [], 
    baseStats: {
      hp: 120,
      mp: 20,
      ap: 4
    },
    rawStats: {
      brawn: 8,
      brains: 3,
      speed: 4
    }
  };
  
  export default thorn;