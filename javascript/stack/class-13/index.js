'use strict';

const { Stack } = require('../class-10/index');

function validateBrackets(str) {
  const history = new Stack();
  const table = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const openingCheck = /[([{]/;
  const closingCheck = /[)\]}]/;

  for (let char of str) {
    if (openingCheck.test(char)) {
      history.push(char);
    } else if (closingCheck.test(char)) {
      if (history.pop()?.data !== table[char]) {
        return false;
      }
    }
  }

  return history.isEmpty();
}

module.exports = validateBrackets;
