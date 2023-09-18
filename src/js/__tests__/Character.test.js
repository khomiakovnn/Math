import Character from '../Character.js';

function typeTest() {
  return new Character('Ivan', 'Bowmann');
}
test('Incorrect type', () => {
  expect(typeTest).toThrow('Parameter "Type" is invalid!');
});

function smallName() {
  return new Character('I', 'Bowmann');
}
test('Too small name', () => {
  expect(smallName).toThrow('Parameter "Name" is invalid!');
});

function bigName() {
  return new Character('Ivannnnn123678', 'Bowmann');
}
test('Too big name', () => {
  expect(bigName).toThrow('Parameter "Name" is invalid!');
});

const typesDatalist = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

const typesHandler = test.each(typesDatalist);

typesHandler('Class Character for %s', (type) => {
  expect(new Character('Ivan', type)).toEqual({
    attack: undefined, defence: undefined, health: 100, level: 1, name: 'Ivan', type,
  });
});

function levelUp() {
  const instance = new Character('Ivan', 'Bowman');
  instance.levelUp();
  return instance;
}
test('Level Up', () => {
  expect(levelUp()).toEqual({
    attack: NaN, defence: NaN, health: 100, level: 2, name: 'Ivan', type: 'Bowman',
  });
});

function levelUpError() {
  const instance = new Character('Ivan', 'Bowman');
  instance.health = 0;
  instance.levelUp();
  return instance;
}
test('Level Up', () => {
  expect(levelUpError).toThrow('Character is dead now');
});

const damages = [
  [112, 0],
  [50, 55],
];

const damagesHandler = test.each(damages);

function damageTest(damage) {
  const instance = new Character('Ivan', 'Bowman');
  instance.damage(damage);
  return instance;
}

damagesHandler('Damage test for %s', (damage) => {
  expect(damageTest(damage)).toEqual({
    attack: undefined, defence: undefined, health: NaN, level: 1, name: 'Ivan', type: 'Bowman',
  });
});
