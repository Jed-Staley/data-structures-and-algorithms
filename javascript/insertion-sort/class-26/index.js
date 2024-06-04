'use strict';

function insert(sorted, value) {
  let i = sorted.length - 1;
  while (i >= 0 && sorted[i] > value) {
    sorted[i + 1] = sorted[i];
    i--;
  }
  sorted[i + 1] = value;
}

function insertionSort(input) {
  if (input.length === 0) return [];
  let sorted = [input[0]];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
}

module.exports = insertionSort;
