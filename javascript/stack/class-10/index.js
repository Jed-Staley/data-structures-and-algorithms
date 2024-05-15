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
    return (this.top === null);
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    this.back = new Node(value, this.back);
    if (!this.front) {
      this.front = this.back;
    }
  }

  dequeue() {
    if (this.back === null) {
      return undefined;
    }
    const node = this.front;
    if (this.back.pointer === null) {
      this.back = null;
      this.front = null;
      return node.data;
    }
    this.front = this.back;
    while (this.front.pointer !== node) {
      this.front = this.front.pointer;
    }
    this.front.pointer = null;
    return node.data;
  }

  peek() {
    return this.front ? this.front.data : undefined;
  }

  isEmpty() {
    return (this.front !== null);
  }
}

module.exports = { Stack, Queue };
