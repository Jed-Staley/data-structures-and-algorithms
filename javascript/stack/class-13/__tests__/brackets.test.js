'use strict';

const validateBrackets = require('../index');

describe('validateBrackets', () => {
  test('returns true for balanced brackets "{}"', () => {
    expect(validateBrackets('{}')).toBe(true);
  });

  test('returns true for balanced brackets "{}(){}"', () => {
    expect(validateBrackets('{}(){}')).toBe(true);
  });

  test('returns true for balanced brackets "()[[Extra Characters]]"', () => {
    expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
  });

  test('returns true for balanced brackets "(){}[[]]"', () => {
    expect(validateBrackets('(){}[[]]')).toBe(true);
  });

  test('returns true for balanced brackets "{}{Code}[Fellows](())"', () => {
    expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
  });

  test('returns false for unbalanced brackets "[({}]"', () => {
    expect(validateBrackets('[({}]')).toBe(false);
  });

  test('returns false for unbalanced brackets "(]"', () => {
    expect(validateBrackets('(]')).toBe(false);
  });

  test('returns false for unbalanced brackets "{(})"', () => {
    expect(validateBrackets('{(})')).toBe(false);
  });

  test('returns false for unbalanced brackets "{"', () => {
    expect(validateBrackets('{')).toBe(false);
  });

  test('returns false for unbalanced brackets ")"', () => {
    expect(validateBrackets(')')).toBe(false);
  });

  test('returns false for unbalanced brackets "[}"', () => {
    expect(validateBrackets('[}')).toBe(false);
  });
});
