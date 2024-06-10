'use strict';

const Hashtable = require('../class-30/index');

function repeatedWord(str) {
  if (str.length === 0) {return false;}

  // For storing seen words
  const seenWords = new Hashtable();

  // For iterating through words
  const words = str.match(/[a-zA-Z'-]+/g);

  // Returns a word if it has already been assigned as a key in the hash table
  for (let word of words) {
    const normalizedWord = word.toLowerCase();
    console.log(normalizedWord);
    if (seenWords.has(normalizedWord)) {
      return normalizedWord;
    }
    seenWords.set(normalizedWord, true);
  }

  return false;
}

module.exports = repeatedWord;
