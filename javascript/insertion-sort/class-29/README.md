# Insertion Sort

This file creates a function to implement the insertion sort algorithm, which can be imported as `insertionSort`.

## Process

### Overview

The implementation of the `insertionSort` function in JavaScript was designed to efficiently sort an array of integers using the insertion sort algorithm. The process involved iterating through the array, comparing the current element with the elements before it, and inserting it in the correct position.

### Steps

1. **Function Definition**
   - Defined the `insertionSort` function, which takes an array as its parameter and returns the sorted array.
   - Initialized the function to start iterating from the second element of the array.

2. **Iterating and Comparing**
   - For each element, stored it in a variable (`key`) and compared it with the elements before it in the array.
   - Shifted elements that are greater than the `key` one position ahead of their current position.

3. **Inserting the Key**
   - After finding the correct position, inserted the `key` in its correct position within the sorted part of the array.

4. **Returning the Sorted Array**
   - Returned the modified array after all elements have been correctly placed.

## Example Usage

Below is an example of how to use the `insertionSort` function:

```javascript
function insertionSort(arr) {
  // Iterate over each element in the array
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];  // Store the current element
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;  // Place the key at its correct position
  }
  return arr;  // Return the sorted array
}

// Example usage:
const exampleArray = [5, 2, 9, 1, 5, -3];
console.log(insertionSort(exampleArray)); // Output: [-3, 1, 2, 5, 5, 9]
```
