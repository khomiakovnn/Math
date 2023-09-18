import Character from './Character.js';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }

  get newAttack() {
    return this.attack;
  }

  set newAttack(length) {
    if (this.stoned) {
      this.attack = this.attack * (1 - (length - 1) / 10) - Math.log2(length) * 5;
    } else {
      this.attack *= (1 - (length - 1) / 10);
    }
  }
}
