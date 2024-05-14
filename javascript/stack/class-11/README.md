# Pseudo Queue

Write a class PseudoQueue that emulates a queue with enqueue and dequeue methods, but built with 2 stacks.

## Whiteboard Process

![Whiteboard](./pseudo-queue.png)

## Approach & Efficiency

The forced solution, due to having to use two stacks, was to juggle the data between the stacks when dequeueing an item. This method results in O(N).

## Solution

![Code](./index.js)

## Contributions

All tests were written using OpenAI's ChatGPT 4o. A link to the instance that generated these tests can be found here:

![ChatGPT Chat](https://chat.openai.com/share/82cd7fe7-99da-4ca7-8104-e817bee9f50f)
