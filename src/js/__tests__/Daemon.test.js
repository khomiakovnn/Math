import Daemon from '../Daemon.js';

test('Create instance', () => {
  expect(new Daemon('Ivan')).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Daemon', stoned: false,
  });
});

function levelUp() {
  const instance = new Daemon('Ivan', 'Daemon');
  instance.levelUp();
  return instance;
}

test('Level Up', () => {
  expect(levelUp()).toEqual({
    attack: 12, defence: 48, health: 100, level: 2, name: 'Ivan', type: 'Daemon', stoned: false,
  });
});

function levelUpError() {
  const instance = new Daemon('Ivan', 'Daemon');
  instance.health = 0;
  instance.levelUp();
  return instance;
}
test('Level Up', () => {
  expect(levelUpError).toThrow('Character is dead now');
});

const damages = [
  [200, 0],
  [50, 70],
];

const damagesHandler = test.each(damages);

function damageTest(damage) {
  const instance = new Daemon('Ivan', 'Daemon');
  instance.damage(damage);
  return instance;
}

damagesHandler('Damage test for %s', (damage, health) => {
  expect(damageTest(damage)).toEqual({
    attack: 10, defence: 40, health, level: 1, name: 'Ivan', type: 'Daemon', stoned: false,
  });
});

test('Stoned', () => {
  const daemon = new Daemon('Ivan');
  daemon.stoned = true;
  expect(daemon.stoned).toEqual(true);
});

test('Attak property', () => {
  const daemon = new Daemon('Ivan');
  expect(daemon.newAttack).toEqual(10);
});

const levels = [
  [1, false, 100],
  [2, false, 90],
  [3, false, 80],
  [4, false, 70],
  [5, false, 60],
  [6, false, 50],
  [7, false, 40],
  [8, false, 30],
  [9, false, 20],
  [10, false, 10],
  [1, true, 100],
  [2, true, 85],
  [3, true, 72.08],
  [4, true, 60],
  [5, true, 48.39],
  [6, true, 37.08],
  [7, true, 25.96],
  [8, true, 15],
  [9, true, 4.15],
  [10, true, -6.61],
];

const levelsHandler = test.each(levels);

function levelsTest(level, stoned) {
  const instance = new Daemon('Ivan', 'Daemon');
  instance.attack = 100;
  instance.stoned = stoned;
  instance.newAttack = level;
  return instance.attack;
}

levelsHandler('Attak test for %s level and stoned - %s', (level, stoned, result) => {
  expect(Number(levelsTest(level, stoned).toFixed(2))).toBe(result);
});
