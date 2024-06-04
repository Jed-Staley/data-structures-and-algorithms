'use strict';

function insert(sorted, value) {
  let i = 0;
  while (i < sorted.length && sorted[i] > value) {
    i++;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
}

function insertionSort(input) {
  if (input.length === 0) return [];
  let sorted = [input[0]];
  for (let i = 0; i < (input.length - 1); i++) {
    insert(sorted, input[i + 1]);
  }
  return sorted;
}

module.exports = insertionSort;
