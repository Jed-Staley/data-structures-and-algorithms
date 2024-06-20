const { Queue } = require('../../../stacks-and-queues/class-10/index');
const sumOfQueue = require('../index');

describe('sumOfQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should return the sum of all numeric values in the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    const result = sumOfQueue(queue);
    expect(result).toBe(10);
  });

  test('should return an empty string for an empty queue', () => {
    const result = sumOfQueue(queue);
    expect(result).toBe('');
  });

  test('should handle a queue with a single numeric element', () => {
    queue.enqueue(5);
    const result = sumOfQueue(queue);
    expect(result).toBe(5);
  });

  test('should throw an error if numbers and strings are mixed', () => {
    queue.enqueue(3);
    queue.enqueue('a');
    queue.enqueue(5);
    queue.enqueue('b');
    queue.enqueue(7);
    const result = sumOfQueue(queue);
    expect(result).toBe(NaN);
  });

  test('should handle a queue with all non-numeric values', () => {
    queue.enqueue('x');
    queue.enqueue('y');
    queue.enqueue('z');
    const result = sumOfQueue(queue);
    expect(result).toBe('xyz');
  });
});
