'use strict';

class Node {
  constructor(value, pointer) {
    this.data = value;
    this.pointer = pointer;
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
}

class AnimalShelter {
  constructor() {
    this.queue = { dog: new Queue(), cat: new Queue() };
  }

  enqueue(animal) {
    // improper animal case
    if (typeof animal !== 'object' || (animal.species !== 'dog' && animal.species !== 'cat') || typeof animal.name !== 'string') {
      return undefined;
    }

    this.queue[animal.species].enqueue(animal);
  }

  dequeue(pref) {
    // improper pref case
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }

    return this.queue[pref].dequeue();
  }
}

module.exports = AnimalShelter;
