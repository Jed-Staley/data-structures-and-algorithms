# Code Challenge 27

Merge Sort

## Pseudo Code

ALGORITHM Mergesort(arr)
  DECLARE n <-- arr.length

  if n > 1
    DECLARE mid <-- n/2
    DECLARE left <-- arr[0...mid]
    DECLARE right <-- arr[mid...n]
    // sort the left side
    Mergesort(left)
    // sort the right side
    Mergesort(right)
    // merge the sorted left and right sides together
    Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
  DECLARE i <-- 0
  DECLARE j <-- 0
  DECLARE k <-- 0

  while i < left.length && j < right.length
    if left[i] <= right[j]
      arr[k] <-- left[i]
      i <-- i + 1
    else
      arr[k] <-- right[j]
      j <-- j + 1

  k <-- k + 1

  if i = left.length
    set remaining entries in arr to remaining values in right
  else
    set remaining entries in arr to remaining values in left

## Trace

Initial: [8, 4, 23, 42, 16, 15]
Split: [8, 4, 23] [42, 16, 15]
Split: [8] [4, 23] [42] [16, 15]
Split: [8] [4] [23] [42] [16] [15]
Merge: [4, 23] [42] [15, 16]
Merge: [4, 8, 23] [15, 16, 42]
Final Merge: [4, 8, 15, 16, 23, 42]

## Implementation

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

## Testing

const reverseSortedArray = [20, 18, 12, 8, 5, -2];
const fewUniquesArray = [5, 12, 7, 5, 5, 7];
const nearlySortedArray = [2, 3, 5, 7, 13, 11];

console.log("Reverse sorted array:", mergeSort(reverseSortedArray));
console.log("Few uniques array:", mergeSort(fewUniquesArray));
console.log("Nearly sorted array:", mergeSort(nearlySortedArray));
