import { Character } from './Character.js';

class Zombie extends Character { }

export const zombie = new Zombie('Витя', 'Zombie', 100, 1, 40, 10);

//для теста:
const { level, attack, defence, health } = zombie;
function funcZombie(level, attack, defence, health) {
  return {
    level: level+1,
    attack: attack*1.2,
    defence: defence*1.2,
    health: 100,
  }
}
export const receivedZombie = funcZombie(level, attack, defence, health);

function func2Zombie(points) {
  return zombie.health -= points * (1 - zombie.defence / 100);
}
export const received2Zombie = func2Zombie(10);