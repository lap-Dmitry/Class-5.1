import Character from '../app';

test('create Character name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('a1234567890', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create type error ', () => {
  function CharacterExpectError() {
    return new Character('Bowman', 'Oleg');
  }
  expect(CharacterExpectError).toThrow(new Error('Тип задан неверно'));
});

test('create Character name ok', () => {
  const character = new Character('Oleg', 'Magician');
  expect(character.name).toBe('Oleg');
});

test('create Character type ok', () => {
  const character = new Character('Oleg', 'Magician');
  expect(character.type).toBe('Magician');
});

test('create Character ok', () => {
  const character = new Character('Oleg', 'Magician');
  const result = {
    name: 'Oleg',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});
