'use strict';

const { Queue } = require('../class-10/index');

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
