import { applyStatus } from "@/engine/statusWatch";

const chSpells = {
  rallyCry: {
    name: "Rally Cry",
    cost: 2,
    mpCost: 5,
    speed: 1,
    effect: (self) => {
      self.ap += 1; // Bonus AP next turn
      self.class.adrenalineStacks += 1;
    }
  },

  stunSmash: {
    name: "Stun Smash",
    cost: 2,
    mpCost: 10,
    speed: 2,
    effect: (self, target) => {
      const stun = {
        name: "stunned",
        turnsRemaining: 1,
        canStack: false,
        effect: (target) => {
          target.queue = [];
        }
      };

      target.hp -= 10 + self.modifiedStats.brawn * 1.5;
      applyStatus(target, stun);
    }
  }
};

export default chSpells;