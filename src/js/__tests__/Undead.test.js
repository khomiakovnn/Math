import Undead from '../Undead.js';

test('Create instance', () => {
  expect(new Undead('Ivan')).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Ivan', type: 'Undead',
  });
});

function levelUp() {
  const instance = new Undead('Ivan', 'Undead');
  instance.levelUp();
  return instance;
}

test('Level Up', () => {
  expect(levelUp()).toEqual({
    attack: 30, defence: 30, health: 100, level: 2, name: 'Ivan', type: 'Undead',
  });
});

function levelUpError() {
  const instance = new Undead('Ivan', 'Undead');
  instance.health = 0;
  instance.levelUp();
  return instance;
}
test('Level Up', () => {
  expect(levelUpError).toThrow('Character is dead now');
});

const damages = [
  [200, 0],
  [50, 62.5],
];

const damagesHandler = test.each(damages);

function damageTest(damage) {
  const instance = new Undead('Ivan', 'Undead');
  instance.damage(damage);
  return instance;
}

damagesHandler('Damage test for %s', (damage, health) => {
  expect(damageTest(damage)).toEqual({
    attack: 25, defence: 25, health, level: 1, name: 'Ivan', type: 'Undead',
  });
});
