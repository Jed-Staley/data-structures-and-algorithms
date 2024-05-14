'use strict';

const { Stack, Queue } = require('../index');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top.data).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.data).toEqual(2);
    expect(stack.top.pointer.data).toEqual(1);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(popped.data).toEqual(2);
    expect(stack.top.data).toEqual(1);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toBeNull();
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(stack.pop()).toEqual(undefined);
    expect(stack.peek()).toEqual(undefined);
  });
});

describe('Queue', () => {
  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.data).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front.data).toEqual(1);
    expect(queue.back.data).toEqual(2);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    const dequeued = queue.dequeue();
    expect(dequeued).toEqual(1);
    expect(queue.front.data).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
  });

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toEqual(undefined);
    expect(queue.peek()).toEqual(undefined);
  });
});
