import Character from '../magician';

test('create Character ok', () => {
  const character = new Character('Oleg', 'Magician');
  const result = {
    name: 'Oleg',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(character).toMatchObject(result);
});
