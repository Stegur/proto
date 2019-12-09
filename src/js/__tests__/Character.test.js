import Character from '../Character';

const exepted = {
  attack: 10,
  defence: 40,
  health: 9,
  name: 'Melisa',
  type: 'Daemon',
};

describe('Character', () => {
  test('should get damage 15 points', () => {
    const hero = new Character('Melisa', 'Daemon');
    hero.damage(15);
    expect(hero).toEqual(exepted);
  });
});
