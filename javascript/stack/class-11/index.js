'use strict';

class Node {
  constructor(value, pointer) {
    this.data = value;
    this.pointer = pointer;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
  }

  pop() {
    if (this.top === null) {
      return undefined;
    }
    const top = this.top;
    this.top = this.top.pointer;
    return top;
  }

  peek() {
    return (this.top !== null) ? this.top.data : undefined;
  }

  isEmpty() {
    return (this.top !== null);
  }
}

class PseudoQueue {
  constructor() {
    this.queue = new Stack();
    this.dump = new Stack();
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    while (this.queue.peek()) {
      const topValue = this.queue.pop().data;
      this.dump.push(topValue);
    }
    const dequeuedValue = this.dump.pop();
    while (this.dump.peek()) {
      const topValue = this.dump.pop().data;
      this.queue.push(topValue);
    }
    return (dequeuedValue) ? dequeuedValue.data : undefined;
  }
}

module.exports = PseudoQueue;
