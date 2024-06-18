# Array Insert Shift

Write a function BinarySearch that finds the index of an item in a sorted array of numbers given its value.

## Whiteboard Process

![Whiteboard](Binary%20Search.png)

## Approach & Efficiency

I used a binary search alogrithm, which is commonplace for its efficiency and low memory usage. It gives O(logN).

## Solution

This block of code should declare the described function.

```javascript
function BinarySearch(arr, val) {
  let index = 0;
  let range = arr.length;
  while (range > 1) {
    let fulcrum = index + Math.floor(range / 2);
    if (val >= fulcrum) {
      index = fulcrum;
      range -= Math.floor(range / 2);
    } else {
      range -= Math.ceil(range / 2);
    }
  }
  if (arr[index] === val) {
    return index;
  } else {
    return -1;
  }
}
```
