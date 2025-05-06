const chSpells = {
    firebolt: {
      name: "Firebolt",
      cost: 10,
      damage: 25,
      effect: (caster, target) => {
        target.hp -= 25 + caster.modifiedStats.brains * 2;
      }
    }
  };
  
  export default chSpells;