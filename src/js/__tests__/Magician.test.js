import Magician from '../Magician.js';

test('Create instance', () => {
  expect(new Magician('Ivan')).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Magician',
  });
});

function levelUp() {
  const instance = new Magician('Ivan', 'Magician');
  instance.levelUp();
  return instance;
}

test('Level Up', () => {
  expect(levelUp()).toEqual({
    attack: 12, defence: 48, health: 100, level: 2, name: 'Ivan', type: 'Magician',
  });
});

function levelUpError() {
  const instance = new Magician('Ivan', 'Magician');
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
  const instance = new Magician('Ivan', 'Magician');
  instance.damage(damage);
  return instance;
}

damagesHandler('Damage test for %s', (damage, health) => {
  expect(damageTest(damage)).toEqual({
    attack: 10, defence: 40, health, level: 1, name: 'Ivan', type: 'Magician',
  });
});
