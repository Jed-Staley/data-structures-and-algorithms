'use strict';

const mostUsedWord = require('../index');

describe('mostUsedWord', () => {
  test('should return the most used word in a simple sentence', () => {
    const str = 'This is a test. This test is only a test.';
    expect(mostUsedWord(str)).toBe('test');
  });

  test('should return the most used word in a sentence with different cases', () => {
    const str = 'This is a Test. This test is only a Test.';
    expect(mostUsedWord(str)).toBe('test');
  });

  test('should handle an empty string', () => {
    const str = '';
    expect(mostUsedWord(str)).toBeNull();
  });

  test('should handle a string with no repeating words', () => {
    const str = 'Each word appears once';
    expect(mostUsedWord(str)).toBe('each');
  });

  test('should handle a string with multiple words tied for most used', () => {
    const str = 'Tie tie break break';
    expect(['tie', 'break']).toContain(mostUsedWord(str));
  });
});
