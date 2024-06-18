# Most Used Word

This file defines a function to find the most frequently used word in a given string. The function is implemented in JavaScript and can be imported as `mostUsedWord`.

## Process

### Overview

The `mostUsedWord` function takes a string as input and returns the word that occurs most frequently. It uses a hash table to count the occurrences of each word.

### Steps

1. **Define `mostUsedWord` Function**
   - The function takes a string `str` as input.
   - It extracts all words from the string using a regular expression that matches words containing letters, apostrophes, and hyphens.
   - It initializes a hash table, `wordCounts`, to store the word counts and a variable `highest` to track the most frequent word.
   - It iterates over all words in the extracted word list:
     - Converts each word to lowercase.
     - Checks if the word is already in the hash table:
       - If yes, increments the count for that word and updates `highest` if the current word's count exceeds the count of the previously most frequent word.
       - If no, adds the word to the hash table with a count of 1 and updates `highest` if it is the first word processed.
   - Finally, it returns the most frequently occurring word.

2. **Export the Function**
   - The `mostUsedWord` function is exported for use in other modules.

## Example Usage

Below is an example of how to use the `mostUsedWord` function:

```javascript
const mostUsedWord = require('./mostUsedWord');

const text = "The quick brown fox jumps over the lazy dog. The fox was quick and the dog was lazy.";
const result = mostUsedWord(text);

console.log(result);
// Output: 'the'
```

### Dependencies

- The function relies on a custom `Hashtable` class that is required from the `../class-30/index` module.

### Notes

- The `Hashtable` class should be implemented to support basic operations such as `set`, `get`, and `has`.
- The function ignores case by converting all words to lowercase before processing.
- Punctuation and special characters are ignored, focusing only on words consisting of letters, apostrophes, and hyphens.
