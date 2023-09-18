import Zombie from '../Zombie.js';

test('Create instance', () => {
  expect(new Zombie('Ivan')).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Ivan', type: 'Zombie',
  });
});

function levelUp() {
  const instance = new Zombie('Ivan', 'Zombie');
  instance.levelUp();
  return instance;
}

test('Level Up', () => {
  expect(levelUp()).toEqual({
    attack: 48, defence: 12, health: 100, level: 2, name: 'Ivan', type: 'Zombie',
  });
});

function levelUpError() {
  const instance = new Zombie('Ivan', 'Zombie');
  instance.health = 0;
  instance.levelUp();
  return instance;
}
test('Level Up', () => {
  expect(levelUpError).toThrow('Character is dead now');
});

const damages = [
  [200, 0],
  [50, 55],
];

const damagesHandler = test.each(damages);

function damageTest(damage) {
  const instance = new Zombie('Ivan', 'Zombie');
  instance.damage(damage);
  return instance;
}

damagesHandler('Damage test for %s', (damage, health) => {
  expect(damageTest(damage)).toEqual({
    attack: 40, defence: 10, health, level: 1, name: 'Ivan', type: 'Zombie',
  });
});
