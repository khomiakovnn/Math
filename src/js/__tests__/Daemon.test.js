import Daemon from '../Daemon.js';

test('Create instance', () => {
  expect(new Daemon('Ivan')).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Daemon',
  });
});

function levelUp() {
  const instance = new Daemon('Ivan', 'Daemon');
  instance.levelUp();
  return instance;
}

test('Level Up', () => {
  expect(levelUp()).toEqual({
    attack: 12, defence: 48, health: 100, level: 2, name: 'Ivan', type: 'Daemon',
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
    attack: 10, defence: 40, health, level: 1, name: 'Ivan', type: 'Daemon',
  });
});
