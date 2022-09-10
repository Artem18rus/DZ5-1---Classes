import { Character } from './Character.js';

class Bowerman extends Character { }

export const bowerman = new Bowerman('Витя', 'Bowman', 100, 1, 25, 25);

//для теста:
const { level, attack, defence, health } = bowerman;
function funcBowerman(level, attack, defence, health) {
  return {
    level: level+1,
    attack: attack*1.2,
    defence: defence*1.2,
    health: 100,
  }
}
export const receivedBowerman = funcBowerman(level, attack, defence, health);

function func2Bowerman(points) {
   return bowerman.health -= points * (1 - bowerman.defence / 100);
}
export const received2Bowerman = func2Bowerman(10);
