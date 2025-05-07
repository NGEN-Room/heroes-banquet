const chSpells = {
    rallyCry: {
      name: "Rally Cry",
      cost: 10,
      damage: 0,
      effect: (caster) => {
        caster.baseStats.ap += 1;
        caster.class.adrenalineStacks += 1;
      }
    }
  };
  
  export default chSpells;