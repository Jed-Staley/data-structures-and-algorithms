# Array Reverse

Write a function reverseArray that reverses the items in an array

## Whiteboard Process

![Whiteboard](Array%20Reverse.png)

## Approach & Efficiency

The simplest solution to reverse it in place seemed to be to manually switch each pair of indexes, which gives O(N).

## Solution

This block of code should declare the described function.

```javascript
function reverseArray(arr) {
  if (arr.length === 0) {return null;}

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = temp;
  }

  return arr;
}
```
