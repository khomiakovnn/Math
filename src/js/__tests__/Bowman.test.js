import Bowman from '../Bowman.js';

test('Create instance', () => {
  expect(new Bowman('Ivan')).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Ivan', type: 'Bowman',
  });
});

function levelUp() {
  const instance = new Bowman('Ivan', 'Bowman');
  instance.levelUp();
  return instance;
}
test('Level Up', () => {
  expect(levelUp()).toEqual({
    attack: 30, defence: 30, health: 100, level: 2, name: 'Ivan', type: 'Bowman',
  });
});

function levelUpError() {
  const instance = new Bowman('Ivan', 'Bowman');
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
  const instance = new Bowman('Ivan', 'Bowman');
  instance.damage(damage);
  return instance;
}

damagesHandler('Damage test for %s', (damage, health) => {
  expect(damageTest(damage)).toEqual({
    attack: 25, defence: 25, health, level: 1, name: 'Ivan', type: 'Bowman',
  });
});
