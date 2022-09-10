import { Character } from './Character.js';

class Undead extends Character { }

export const undead = new Undead('Витя', 'Undead', 100, 1, 25, 25);

//для теста:
const { level, attack, defence, health } = undead;
function funcUndead(level, attack, defence, health) {
  return {
    level: level+1,
    attack: attack*1.2,
    defence: defence*1.2,
    health: 100,
  }
}
export const receivedUndead = funcUndead(level, attack, defence, health);

function func2Undead(points) {
  return undead.health -= points * (1 - undead.defence / 100);
}
export const received2Undead = func2Undead(10);