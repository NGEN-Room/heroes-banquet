


const chActions = {
 wack: {
    name: "Wack",
    cost: 2,
    dmg: 5,
    effect: (self, opp)=>{
        // use ap
        self.ap -= 2
        // dmg opp
        opp.hp -= 5 + self.modifier.brawn
    },

    gutterPig: {
        name: "Gutter Pig",
        cost: 5,
        dmg: 4,
        effect: (self, opp)=>{

            self.ap -= 5
            opp.hp -=4

            const bleed = {
                name: "bleed",
                lasts: 5,
                effect: (target)=>{
                    target.hp -= 1
                }
            }
        opp.status.push(bleed)
        }
    },

    rapidFire: {
        name: "Rapid Fire",
        cost: 5,
        dmg: 12,
        effect: (self, opp) =>{


            self.ap -= 5

            let totalDmg = 0
            let message = []


            for(let i = 1; i <= 3; i++){
                if(Math.random() < 0.2) {
                    totalDmg += 6
                    message.push("arrow has hit for 6")
                } else {
                    message.push("Awh dang")
                }
            }
            
            opp.hp -= totalDmg
            return message

        }
    }


 }
  };
  
  export default chActions;


