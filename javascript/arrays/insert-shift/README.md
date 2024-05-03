# Array Insert Shift

Write a function insertShiftArray that inserts a given value into the middle index of the array, and then shifts the following items.

## Whiteboard Process

![Whiteboard](Array%20Insert%20Shift.png)

## Approach & Efficiency

The simplest solution to reverse it in place seemed to be to manually shift the following items from back to front (to avoid temp values) and then assigning the value. This method gives O(N).

## Solution

This block of code should declare the described function.

```javascript
function insertShiftArray(arr = [], val) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    arr[arr.length - i] = arr[arr.length - (i + 1)];
  }

  arr[Math.floor(arr.length / 2)] = val;

  return arr;
}
```
