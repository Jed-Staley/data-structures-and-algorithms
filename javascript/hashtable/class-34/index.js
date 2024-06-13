'use strict';

const Hashtable = require('../class-30/index');

function mostUsedWord(str) {
  const words = str.match(/[a-zA-Z'-]+/g);
  if (!words) { return null;}

  const wordCounts = new Hashtable(words.length);
  let highest = '';

  for (let word of words) {
    word = word.toLowerCase();

    if (wordCounts.has(word)) {

      let hashValue = wordCounts.get(word) + 1;
      wordCounts.set(word, hashValue);
      highest = hashValue > wordCounts.get(highest) ? word : highest;
    } else {

      wordCounts.set(word, 1);
      highest = highest === '' ? word : highest;
    }
  }

  return highest;
}

module.exports = mostUsedWord;
