export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = function (points) {
  const damage = points * (1 - this.defence / 100);

  if (damage >= this.health) {
    this.health = 0;
  } else {
    this.health -= damage;
  }

  if (this.health === 0) {
    console.log(`Персонаж ${this.name} убит`);
  }
};
