const { Stack } = require('../../../stacks-and-queues/class-10/index');
const lowestInStack = require('../index');

describe('lowestInStack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should return the lowest value in the stack', () => {
    stack.push(5);
    stack.push(2);
    stack.push(8);
    stack.push(1);
    stack.push(3);
    const result = lowestInStack(stack);
    expect(result).toBe(1);
  });

  test('should handle an empty stack', () => {
    const result = lowestInStack(stack);
    expect(result).toBeNull();
  });

  test('should handle a stack with a single element', () => {
    stack.push(42);
    const result = lowestInStack(stack);
    expect(result).toBe(42);
  });

  test('should return the correct value when all elements are the same', () => {
    stack.push(7);
    stack.push(7);
    stack.push(7);
    const result = lowestInStack(stack);
    expect(result).toBe(7);
  });

  test('should handle a stack with negative numbers', () => {
    stack.push(-3);
    stack.push(-1);
    stack.push(-7);
    stack.push(-5);
    const result = lowestInStack(stack);
    expect(result).toBe(-7);
  });
});
