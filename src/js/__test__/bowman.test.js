import Character from '../bowman';

test('create Character ok', () => {
  const character = new Character('Oleg', 'Bowman');
  const result = {
    name: 'Oleg',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
