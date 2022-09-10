import { Character } from './Character.js';

class Magician extends Character { }

export const magician = new Magician('Витя', 'Magician', 100, 1, 10, 40);

//для теста:
const { level, attack, defence, health } = magician;
function funcMagician(level, attack, defence, health) {
  return {
    level: level+1,
    attack: attack*1.2,
    defence: defence*1.2,
    health: 100,
  }
}
export const receivedMagician = funcMagician(level, attack, defence, health);

function func2Magician(points) {
  return magician.health -= points * (1 - magician.defence / 100);
}
export const received2Magician = func2Magician(10);