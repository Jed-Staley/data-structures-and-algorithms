'use strict';

const repeatedWord = require('../index');

describe('repeatedWord', () => {
  test('should return the first repeated word', () => {
    const str = "This is a test. This test is only a test.";
    expect(repeatedWord(str)).toBe('this');
  });

  test('should return the first repeated word ignoring case', () => {
    const str = "Hello hello world";
    expect(repeatedWord(str)).toBe('hello');
  });

  test('should return false when there is no repeated word', () => {
    const str = "No repeated words here";
    expect(repeatedWord(str)).toBe(false);
  });

  test('should handle an empty string', () => {
    const str = "";
    expect(repeatedWord(str)).toBe(false);
  });

  test('should handle a string with punctuation', () => {
    const str = "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
    expect(repeatedWord(str)).toBe('a');
  });

  test('should handle hyphenated words correctly', () => {
    const str = "State-of-the-art equipment was used in the state-of-the-art facility.";
    expect(repeatedWord(str)).toBe('state-of-the-art');
  });

  test('should return the first repeated word when multiple repetitions exist', () => {
    const str = "It was the best of times, it was the worst of times.";
    expect(repeatedWord(str)).toBe('it');
  });
});
