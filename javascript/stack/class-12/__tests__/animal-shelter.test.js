'use strict';

const AnimalShelter = require('../index');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('enqueue should add a dog or cat to the shelter', () => {
    const dog = { species: 'dog', name: 'Rex' };
    const cat = { species: 'cat', name: 'Whiskers' };

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    expect(shelter.queue.dog.front.data).toEqual(dog);
    expect(shelter.queue.cat.front.data).toEqual(cat);
  });

  test('enqueue should return undefined for improper animal', () => {
    const invalidAnimal = { species: 'bird', name: 'Tweety' };
    const result = shelter.enqueue(invalidAnimal);

    expect(result).toBeUndefined();
  });

  test('dequeue should return the first dog in the queue', () => {
    const dog1 = { species: 'dog', name: 'Rex' };
    const dog2 = { species: 'dog', name: 'Spot' };

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    expect(shelter.dequeue('dog')).toEqual(dog1);
  });

  test('dequeue should return the first cat in the queue', () => {
    const cat1 = { species: 'cat', name: 'Whiskers' };
    const cat2 = { species: 'cat', name: 'Tom' };

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    expect(shelter.dequeue('cat')).toEqual(cat1);
  });

  test('dequeue should return null if pref is not dog or cat', () => {
    const dog = { species: 'dog', name: 'Rex' };
    shelter.enqueue(dog);

    expect(shelter.dequeue('bird')).toBeNull();
  });

  test('dequeue should return undefined if no animal of pref type is available', () => {
    const dog = { species: 'dog', name: 'Rex' };
    shelter.enqueue(dog);

    expect(shelter.dequeue('cat')).toBeUndefined();
  });

  test('enqueue and dequeue should maintain correct order', () => {
    const dog1 = { species: 'dog', name: 'Rex' };
    const cat1 = { species: 'cat', name: 'Whiskers' };
    const dog2 = { species: 'dog', name: 'Spot' };
    const cat2 = { species: 'cat', name: 'Tom' };

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);

    expect(shelter.dequeue('dog')).toEqual(dog1);
    expect(shelter.dequeue('cat')).toEqual(cat1);
    expect(shelter.dequeue('dog')).toEqual(dog2);
    expect(shelter.dequeue('cat')).toEqual(cat2);
  });
});
