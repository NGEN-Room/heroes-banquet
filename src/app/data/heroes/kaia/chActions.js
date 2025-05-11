import { moveLeft, moveRight } from "@/engine/movementEngine";
import { getDistance, getRangeLevel } from "@/engine/movementEngine";

const chActions = {
  left: {
    name: "Left",
    cost: 1,
    effect: (self) => {
      moveLeft(self); // try move left on grid
    },
},

right: {
        name: "Right",
        cost: 1,
        effect: (self) => {
          moveRight(self); // try move left on grid
        },

  },

  arcaneSlap: {
    name: "Arcane Slap",
    cost: 1,
    speed: 3,
    effect: (self, target) => {
      const range = getRangeLevel(getDistance(self, target));
      if (range === 0) {
        target.hp -= 5 + self.modifiedStats.brains;
      }
    }
  }
};

export default chActions;