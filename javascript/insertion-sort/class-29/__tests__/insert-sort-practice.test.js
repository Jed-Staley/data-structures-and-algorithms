const insertionSort = require('../index');

describe('Insertion Sort', () => {
  test('sorts an array of positive and negative integers', () => {
    const arr = [5, 2, 9, 1, 5, -3];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([-3, 1, 2, 5, 5, 9]);
  });

  test('sorts an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an array with all identical elements', () => {
    const arr = [2, 2, 2, 2, 2];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([2, 2, 2, 2, 2]);
  });

  test('sorts an empty array', () => {
    const arr = [];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([]);
  });

  test('sorts an array with one element', () => {
    const arr = [1];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1]);
  });

  test('sorts an array with negative integers', () => {
    const arr = [-3, -1, -2, -5, -4];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([-5, -4, -3, -2, -1]);
  });
});
