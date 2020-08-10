import { characters, sortByHealth } from '../app';

test('are not the exact same can', () => {
  expect([...characters].sort(sortByHealth)).not.toBe(
    [...characters].sort((a, b) => b.health - a.health),
  );
});

test('sorting an array of characters', () => {
  expect([...characters].sort(sortByHealth)).not.toEqual(characters);
});

test('have all the same properties', () => {
  expect([...characters].sort(sortByHealth)).toEqual(
    [...characters].sort((a, b) => b.health - a.health),
  );
});
