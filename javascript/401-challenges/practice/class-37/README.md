# Reverse Linked List

This file defines a function to reverse a linked list. The function is implemented in JavaScript and can be imported as `reverseLinkedList`.

Below is a screenshot of the challenge
[Challenge](./challenge-37.png)

## Process

### Whiteboard

[Whiteboard](./whiteboard-37.png)

### Overview

The `reverseLinkedList` function reverses the order of nodes in a linked list.

### Steps

1. **Import LinkedList Class**
   - Ensure the `LinkedList` class is correctly imported from the specified path.

2. **Define `reverseLinkedList` Function**
   - The function takes a linked list as input and initializes the `current` pointer to the second node.
   - It sets the `next` pointer of the head node to `null` to mark the new end of the list.
   - It iterates over the remaining nodes, re-inserting each node at the beginning of the list.

3. **Export the Function**
   - The `reverseLinkedList` function is exported for use in other modules.

## Example Usage

Below is an example of how to use the `reverseLinkedList` function:

```javascript
const reverseLinkedList = require('./reverseLinkedList');
const LinkedList = require('../../linked-lists/index');

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log('Original List:', list.toString());
const reversedList = reverseLinkedList(list);
console.log('Reversed List:', reversedList.toString());
```

## Tests

To ensure the correctness of the `reverseLinkedList` function, Jest tests have been created. The tests validate the reversal of various linked list scenarios, including empty lists and single-node lists.

### Running the Tests

To run the tests, ensure you have Jest installed and run the following command:

```bash
npm test reverse-list.test.js
```
