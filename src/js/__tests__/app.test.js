import { characters, sortByHealth } from '../app';

const sortCharacters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { ame: 'мечник', health: 10 },
];

test('are not the exact same can', () => {
  expect([...characters].sort(sortByHealth)).not.toBe(sortCharacters);
});

test('sorting an array of characters', () => {
  expect([...characters].sort(sortByHealth)).not.toEqual(characters);
});

test('have all the same properties', () => {
  expect([...characters].sort(sortByHealth)).toEqual(sortCharacters);
});
