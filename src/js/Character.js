export class Character {
  constructor(name, health, level) {
    this.name = (function func() {
      if (name.length >= 2 && name.length <= 10) {
        return name;
      }
      throw new Error('Некорректное значение "name"!');
    }());
    this.health = health;
    this.level = level;
  }
}
