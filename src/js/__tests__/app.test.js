import { sortByHealth } from '../app';

const sortCharacters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'лучник', health: 80 },
  { ame: 'мечник', health: 10 },
];

const unsortCharacters = [
  { name: 'лучник', health: 80 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { ame: 'мечник', health: 10 },
];

const reverseSortCharacters = [
  { ame: 'мечник', health: 10 },
  { name: 'лучник', health: 80 },
  { name: 'лучник', health: 80 },
  { name: 'маг', health: 100 },
];

test('sorting unsort list not to be sort list', () => {
  expect([...unsortCharacters].sort(sortByHealth)).not.toBe(sortCharacters);
});

test('sorting sort list to equal sort list', () => {
  expect([...sortCharacters].sort(sortByHealth)).toEqual(sortCharacters);
});

test('sorting reverse sort list to equal sort list', () => {
  expect([...reverseSortCharacters].sort(sortByHealth)).toEqual(sortCharacters);
});

test('sorting reverse sort list not to equal unsort list', () => {
  expect([...reverseSortCharacters].sort(sortByHealth)).not.toEqual(unsortCharacters);
});

test('sorting unsort list not to equal reverse sort list', () => {
  expect([...unsortCharacters].sort(sortByHealth)).not.toEqual(reverseSortCharacters);
});

test('sorting sort list not to equal reverse sort list', () => {
  expect([...sortCharacters].sort(sortByHealth)).not.toEqual(reverseSortCharacters);
});

test('sorting unsort list to equal sort list', () => {
  expect([...unsortCharacters].sort(sortByHealth)).toEqual(sortCharacters);
});
