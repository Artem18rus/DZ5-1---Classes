export class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = (function func() {
      if (name.length >= 2 && name.length <= 10) {
        return name;
      }
      throw new Error('Некорректное значение "name"!');
    }());
    this.type = (function func() {
      if (typeof type === 'string') {
        return type;
      }
      throw new Error('Некорректное значение "type"!');
    }());
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
  //2-ая задача:
  levelUp() {
    if(this.health != 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
      return
    } 
    throw new Error('Нельзя повысить лвл умершего!');
  }
  damage(points){
    if(this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      //console.log(this.health)
      return
    }
    throw new Error('Ваш персонаж умер!');
  }
}
