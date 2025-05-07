const chActions = {
    powerStrike: {
      name: "Power Strike",
      cost: 2,
      damage: 20,
      effect: (user, target) => {
        target.hp -= 20 + user.modifiedStats.brawn * 2;
        user.class.rage += 1;
      }
    },
    bash: {
      name: "Shield Bash",
      cost: 1,
      damage: 10,
      effect: (user, target) => {
        target.hp -= 10 + user.modifiedStats.brawn;
        target.status.push("stunned");
      }
    }
  };
  
  export default chActions;