# Sum of Queue

This file defines a function to calculate the sum of all numerical values in a queue. The function is implemented in JavaScript and can be imported as `sumOfQueue`.

Below is a screenshot of the challenge
[Challenge](./challenge-39.png)

## Author

Jedidiah Staley

## Process

### Whiteboard

[Whiteboard](./whiteboard-39.png)

### Overview

The `sumOfQueue` function returns the sum of all numerical values in a given queue.

### Steps

1. **Check if Queue is Empty**
   - Use the `peek` method to check if the queue is empty. If the queue is empty, return an empty string.

2. **Pop Value from Queue**
   - Pop the front value from the queue.

3. **Check if Value is a Number**
   - If the value is a number, convert it to a number type and recursively call `sumOfQueue` on the remaining queue.

4. **Calculate Sum**
   - Add the current value to the sum of the remaining queue.

5. **Return Sum**
   - Return the total sum of numerical values in the queue.

## Example Usage

Below is an example of how to use the `sumOfQueue` function:

```javascript
const sumOfQueue = require('./sumOfQueue');

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length == 0) return null;
    return this.items.shift();
  }

  peek() {
    if (this.items.length == 0) return null;
    return this.items[0];
  }

  pop() {
    return this.dequeue();
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(5);
queue.enqueue('Hello');
queue.enqueue(8);

console.log('Sum of Queue:', sumOfQueue(queue));
```

## Tests

To ensure the correctness of the `sumOfQueue` function, Jest tests have been created. The tests validate the function with various queue scenarios, including empty queues, queues with non-numeric values, and queues with a single numeric value.

### Running the Tests

To run the tests, ensure you have Jest installed and run the following command:

```bash
npm test sum-of-queue.test.js
```

## Credits

All tests were written by OpenAI's ChatGPT 4o.
