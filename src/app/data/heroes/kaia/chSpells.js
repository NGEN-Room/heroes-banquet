import { getDistance, getRangeLevel } from "@/engine/movementEngine";
import { applyStatus } from "@/engine/statusWatch";

const chSpells = {
  firebolt: {
    name: "Firebolt",
    cost: 2,
    mpCost: 10,
    speed: 2,
    effect: (self, target) => {
      const range = getRangeLevel(getDistance(self, target));

      if (range <= 2) {
        let dmg = 15 + self.modifiedStats.brains * 2;
        if (range === 0) dmg *= 0.5; // too close = weak hit
        target.hp -= dmg;
      }
    }
  },

  stunArrow: {
    name: "Stun Arrow",
    cost: 2,
    mpCost: 15,
    speed: 1,
    effect: (self, target) => {

      const range = getRangeLevel(getDistance(self, target));
      
      if (range <= 2) {
        const stun = {
          name: "stunned",
          turnsRemaining: 1,
          canStack: false,
          effect: (target) => {
            target.queue = []; // cancel all actions
          }
        };
        applyStatus(target, stun);
      }
    }
  }
};

export default chSpells;