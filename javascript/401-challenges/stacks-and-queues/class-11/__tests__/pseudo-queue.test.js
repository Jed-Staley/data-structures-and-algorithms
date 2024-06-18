'use strict';

const PseudoQueue = require('../index');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  test('should enqueue a value to an empty PseudoQueue', () => {
    pseudoQueue.enqueue(1);
    expect(pseudoQueue.queue.peek()).toBe(1);
  });

  test('should enqueue multiple values to the PseudoQueue', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.queue.peek()).toBe(2);
  });

  test('should dequeue a value from the PseudoQueue', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    const dequeuedValue = pseudoQueue.dequeue();
    expect(dequeuedValue).toBe(1);
  });

  test('should dequeue multiple values from the PseudoQueue in FIFO order', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);

    expect(pseudoQueue.dequeue()).toBe(1);
    expect(pseudoQueue.dequeue()).toBe(2);
    expect(pseudoQueue.dequeue()).toBe(3);
  });

  test('should return undefined when dequeueing from an empty PseudoQueue', () => {
    expect(pseudoQueue.dequeue()).toBe(undefined);
  });

  test('should maintain the correct order of elements after multiple enqueues and dequeues', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    pseudoQueue.dequeue();
    pseudoQueue.enqueue(4);

    expect(pseudoQueue.dequeue()).toBe(2);
    expect(pseudoQueue.dequeue()).toBe(3);
    expect(pseudoQueue.dequeue()).toBe(4);
  });
});
