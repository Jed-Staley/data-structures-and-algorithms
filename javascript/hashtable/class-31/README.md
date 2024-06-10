# Repeated Word Detection

This file defines a function to detect the first repeated word in a string using a hashtable data structure. The function is implemented in JavaScript and can be imported as `repeatedWord`.

## Process

### Overview

The `repeatedWord` function identifies the first word that repeats in a given string. The implementation uses a hashtable to efficiently track the words encountered during the iteration over the string.

### Steps

1. **Import Hashtable Class**
   - Ensure the `Hashtable` class is correctly imported from the specified path.

2. **Define `repeatedWord` Function**
   - The function takes a string as input and initializes a new instance of `Hashtable` to store seen words.
   - It uses a regular expression to match all words in the string, ignoring punctuation and case sensitivity.
   - It iterates over the matched words, checking each word's existence in the hashtable. If a word is found, it returns that word as the first repeated word. If no repeated word is found, it returns `false`.

3. **Export the Function**
   - The `repeatedWord` function is exported for use in other modules.

## Example Usage

Below is an example of how to use the `repeatedWord` function:

```javascript
const repeatedWord = require('./repeatedWord');

const str = "This is a test. This test is only a test.";

console.log(repeatedWord(str)); // Output: "this"
```
