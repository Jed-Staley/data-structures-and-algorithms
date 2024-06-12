'use strict';

function leftJoin(hash1, hash2) {
  const returnArr = [];

  function retrieveHash2Value(key) {
    const value = hash2.get(key);
    if (value) {
      return value;
    } else {
      return null;
    }
  }

  const keys = hash1.keys();
  for (let key of keys) {
    returnArr.push([key, hash1.get(key), retrieveHash2Value(key)]);
  }

  return returnArr;
}

module.exports = leftJoin;
