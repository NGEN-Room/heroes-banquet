//funcitons nomral
function fireball(self, opp){
    const dmg = 15


    // a certain numner off opp health 
    opp.hp -= dmg 

    // we also want to add on modifiers
    + self.modifier.brain
}

//object funciton

const spellbook = {
    fireball: {
        name: "Fireball",
        cost: 5,
        dmg: 15,
        effect: (self, opp) => {     // arrow function
            opp.hp -= 15 + self.modifier.brain
        }
    },
    
}