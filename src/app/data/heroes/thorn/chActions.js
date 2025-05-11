import { moveRight } from "@/engine/movementEngine";
import { getDistance, getRangeLevel } from "@/engine/movementEngine";

const chActions = {
  stab: {
    name: "Stab",
    cost: 1,
    speed: 3,
    effect: (self, target) => {
      const range = getRangeLevel(getDistance(self, target));
      if (range === 0) {
        target.hp -= 10 + self.modifiedStats.brawn;
      }
    }
  },

  charge: {
    name: "Charge Forward",
    cost: 1,
    effect: (self) => {
      moveRight(self);
      self.class.rage += 1;
    }
  }
};

export default chActions;