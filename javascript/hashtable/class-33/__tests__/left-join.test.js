'use strict';

const leftJoin = require('../index');

describe('leftJoin function', () => {
  let hash1, hash2;

  beforeEach(() => {
    hash1 = new Map();
    hash2 = new Map();
  });

  test('should return an array with keys from hash1 and corresponding values from both hash1 and hash2', () => {
    hash1.set('a', 'apple');
    hash1.set('b', 'banana');
    hash1.set('c', 'cherry');

    hash2.set('a', 'apricot');
    hash2.set('b', 'blueberry');

    const result = leftJoin(hash1, hash2);

    expect(result).toEqual([
      ['a', 'apple', 'apricot'],
      ['b', 'banana', 'blueberry'],
      ['c', 'cherry', null]
    ]);
  });

  test('should return null for values in hash2 when the key does not exist in hash2', () => {
    hash1.set('a', 'apple');
    hash1.set('b', 'banana');

    const result = leftJoin(hash1, hash2);

    expect(result).toEqual([
      ['a', 'apple', null],
      ['b', 'banana', null]
    ]);
  });

  test('should handle empty hash1 and hash2', () => {
    const result = leftJoin(hash1, hash2);
    expect(result).toEqual([]);
  });

  test('should handle non-empty hash1 and empty hash2', () => {
    hash1.set('a', 'apple');
    hash1.set('b', 'banana');

    const result = leftJoin(hash1, hash2);

    expect(result).toEqual([
      ['a', 'apple', null],
      ['b', 'banana', null]
    ]);
  });

  test('should handle empty hash1 and non-empty hash2', () => {
    hash2.set('a', 'apricot');
    hash2.set('b', 'blueberry');

    const result = leftJoin(hash1, hash2);

    expect(result).toEqual([]);
  });
});
