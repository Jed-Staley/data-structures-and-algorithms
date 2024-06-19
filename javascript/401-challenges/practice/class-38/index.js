'use strict';

function lowestInStack(stack) {
  if (stack.peek()) {
    let current = stack.pop();
    let lowest = current;
    while (stack.peek()) {
      current = stack.pop();
      lowest = current > lowest ? current : lowest;
    }
    return lowest;
  }
  return null;
}

module.exports = lowestInStack;
