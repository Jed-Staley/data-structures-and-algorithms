'use strict';

const { Stack } = require('../class-10/index');

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
