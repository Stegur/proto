import Character from '../Character';

const exepted1 = {
  attack: 10,
  defence: 40,
  health: 91,
  name: 'Melisa',
  type: 'Daemon',
};

const exepted2 = {
  attack: 10,
  defence: 40,
  health: 0,
  name: 'Melisa',
  type: 'Daemon',
};

describe('Character', () => {
  test('should get damage 15 points', () => {
    const hero = new Character('Melisa', 'Daemon');
    hero.damage(15);
    expect(hero).toEqual(exepted1);
  });

  test('should get damage 170 points and die', () => {
    const hero = new Character('Melisa', 'Daemon');
    hero.damage(15);
    hero.damage(155);
    expect(hero).toEqual(exepted2);
  });
});
