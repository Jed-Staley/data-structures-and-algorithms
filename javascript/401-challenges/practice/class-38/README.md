# Lowest in Stack

This file defines a function to find the lowest value in a stack. The function is implemented in JavaScript and can be imported as `lowestInStack`.

Below is a screenshot of the challenge
[Challenge](./challenge-38.png)

## Author

Jedidiah Staley

## Process

### Whiteboard

[Whiteboard](./whiteboard-38.png)

### Overview

The `lowestInStack` function returns the lowest value from a given stack.

### Steps

1. **Check if Stack is Empty**
   - Use the `peek` method to check if the stack is empty. If the stack is empty, return `null`.

2. **Initialize `lowest` Variable**
   - Pop the top value from the stack and initialize it as `lowest`.

3. **Iterate Through Stack**
   - Continue popping values from the stack, updating the `lowest` variable if a lower value is found.

4. **Return Lowest Value**
   - After iterating through the stack, return the lowest value found.

## Example Usage

Below is an example of how to use the `lowestInStack` function:

```javascript
const lowestInStack = require('./lowestInStack');

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return null;
    return this.items.pop();
  }

  peek() {
    if (this.items.length == 0) return null;
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(5);
stack.push(8);

console.log('Lowest in Stack:', lowestInStack(stack));
```

## Tests

To ensure the correctness of the `lowestInStack` function, Jest tests have been created. The tests validate the function with various stack scenarios, including empty stacks and stacks with a single element.

### Running the Tests

To run the tests, ensure you have Jest installed and run the following command:

```bash
npm test lowest-in-stack.test.js
```

## Credits

All tests were written by OpenAI's ChatGPT 4o.
