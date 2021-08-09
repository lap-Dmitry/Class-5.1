import Character from '../swordsman';

test('create Character ok', () => {
  const character = new Character('Oleg', 'Swordsman');
  const result = {
    name: 'Oleg',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
