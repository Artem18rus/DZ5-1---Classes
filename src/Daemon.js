import { Character } from './Character.js';

class Daemon extends Character { }

export const daemon = new Daemon('Витя', 'Daemon', 100, 1, 10, 40);

//для теста:
const { level, attack, defence, health } = daemon;
function funcDaemon(level, attack, defence, health) {
  return {
    level: level+1,
    attack: attack*1.2,
    defence: defence*1.2,
    health: 100,
  }
}
export const receivedDaemon = funcDaemon(level, attack, defence, health);

function func2Daemon(points) {
  return daemon.health -= points * (1 - daemon.defence / 100);
}
export const received2Daemon = func2Daemon(10);