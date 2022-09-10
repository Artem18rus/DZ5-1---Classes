import { Character } from './Character.js';

class Swordsman extends Character { }

export const swordsman = new Swordsman('Витя', 'Swordsman', 100, 1, 40, 10);

//для теста:
const { level, attack, defence, health } = swordsman;
function funcSwordsman(level, attack, defence, health) {
  return {
    level: level+1,
    attack: attack*1.2,
    defence: defence*1.2,
    health: 100,
  }
}
export const receivedSwordsman = funcSwordsman(level, attack, defence, health);

function func2Swordsman(points) {
  return swordsman.health -= points * (1 - swordsman.defence / 100);
}
export const received2Swordsman = func2Swordsman(10);