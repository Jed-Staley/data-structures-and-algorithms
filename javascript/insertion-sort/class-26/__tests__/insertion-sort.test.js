const insertionSort = require('../index');

test('sorts an array of integers', () => {
  const input = [8, 4, 23, 42, 16, 15];
  const expectedOutput = [4, 8, 15, 16, 23, 42];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('sorts a reverse-sorted array', () => {
  const input = [20, 18, 12, 8, 5, -2];
  const expectedOutput = [-2, 5, 8, 12, 18, 20];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('sorts an array with few unique values', () => {
  const input = [5, 12, 7, 5, 5, 7];
  const expectedOutput = [5, 5, 5, 7, 7, 12];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('sorts a nearly-sorted array', () => {
  const input = [2, 3, 5, 7, 13, 11];
  const expectedOutput = [2, 3, 5, 7, 11, 13];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('returns an empty array when input is empty', () => {
  const input = [];
  const expectedOutput = [];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('sorts an array with a single element', () => {
  const input = [42];
  const expectedOutput = [42];
  expect(insertionSort(input)).toEqual(expectedOutput);
});
