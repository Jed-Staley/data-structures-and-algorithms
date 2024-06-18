'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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
    this.top = this.top.next;
    return top;
  }

  peek() {
    return (this.top !== null) ? this.top.value : undefined;
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
    if (this.back.next === null) {
      this.back = null;
      this.front = null;
      return node.value;
    }
    this.front = this.back;
    while (this.front.next !== node) {
      this.front = this.front.next;
    }
    this.front.next = null;
    return node.value;
  }

  peek() {
    return this.front ? this.front.value : undefined;
  }

  isEmpty() {
    return (this.front !== null);
  }
}

module.exports = { Stack, Queue };
