// eslint-disable-next-line no-unused-vars
import { Character } from '../src/Character';
import { bowerman, receivedBowerman, received2Bowerman } from '../src/Bowerman';
import { daemon, receivedDaemon, received2Daemon } from '../src/Daemon';
import { magician, receivedMagician, received2Magician } from '../src/Magician';
import { swordsman, receivedSwordsman, received2Swordsman } from '../src/Swordsman';
import { undead, receivedUndead, received2Undead } from '../src/Undead';
import { zombie, receivedZombie, received2Zombie } from '../src/Zombie';

test('name-bowerman', () => {
  expect(typeof bowerman.name).toBe('string');
});
test('name-bowerman-error', () => {
  expect(bowerman.name).toThrow();
});
test('type-bowerman', () => {
  expect(typeof bowerman.type).toBe('string');
});
test('type-bowerman-error', () => {
  expect(bowerman.type).toThrow();
});

test('name-daemon', () => {
  expect(typeof daemon.name).toBe('string');
});
test('name-daemon-error', () => {
  expect(daemon.name).toThrow();
});
test('type-daemon', () => {
  expect(typeof daemon.type).toBe('string');
});
test('type-daemon-error', () => {
  expect(daemon.type).toThrow();
});

test('name-magician', () => {
  expect(typeof magician.name).toBe('string');
});
test('name-magician-error', () => {
  expect(magician.name).toThrow();
});
test('type-magician', () => {
  expect(typeof magician.type).toBe('string');
});
test('type-magician-error', () => {
  expect(magician.type).toThrow();
});

test('name-swordsman', () => {
  expect(typeof swordsman.name).toBe('string');
});
test('name-swordsman-error', () => {
  expect(swordsman.name).toThrow();
});
test('type-swordsman', () => {
  expect(typeof swordsman.type).toBe('string');
});
test('type-swordsman-error', () => {
  expect(swordsman.type).toThrow();
});

test('name-undead', () => {
  expect(typeof undead.name).toBe('string');
});
test('name-undead-error', () => {
  expect(undead.name).toThrow();
});
test('type-undead', () => {
  expect(typeof undead.type).toBe('string');
});
test('type-undead-error', () => {
  expect(undead.type).toThrow();
});

test('name-zombie', () => {
  expect(typeof zombie.name).toBe('string');
});
test('name-zombie-error', () => {
  expect(zombie.name).toThrow();
});
test('type-zombie', () => {
  expect(typeof zombie.type).toBe('string');
});
test('type-zombie-error', () => {
  expect(zombie.type).toThrow();
});

// 2-ая задача:
test('levelUp-bowerman', () => {
  expect(receivedBowerman).toEqual({
    level: 2,
    attack: 30,
    defence: 30,
    health: 100,
  });
});

test('levelUp-daemon', () => {
  expect(receivedDaemon).toEqual({
    level: 2,
    attack: 12,
    defence: 48,
    health: 100,
  });
});

test('levelUp-magician', () => {
  expect(receivedMagician).toEqual({
    level: 2,
    attack: 12,
    defence: 48,
    health: 100,
  });
});

test('levelUp-swordsman', () => {
  expect(receivedSwordsman).toEqual({
    level: 2,
    attack: 48,
    defence: 12,
    health: 100,
  });
});

test('levelUp-undead', () => {
  expect(receivedUndead).toEqual({
    level: 2,
    attack: 30,
    defence: 30,
    health: 100,
  });
});

test('levelUp-zombie', () => {
  expect(receivedZombie).toEqual({
    level: 2,
    attack: 48,
    defence: 12,
    health: 100,
  });
});

test('damage-bowerman', () => {
  expect(received2Bowerman).toBe(92.5);
});

test('damage-daemon', () => {
  expect(received2Daemon).toBe(94);
});

test('damage-magician', () => {
  expect(received2Magician).toBe(94);
});

test('damage-swordsman', () => {
  expect(received2Swordsman).toBe(91);
});

test('damage-undead', () => {
  expect(received2Undead).toBe(92.5);
});

test('damage-zombie', () => {
  expect(received2Zombie).toBe(91);
});
