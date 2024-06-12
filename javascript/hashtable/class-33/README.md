# Left Join

This file defines a function to perform a left join on two hash tables using their keys. The function is implemented in JavaScript and can be imported as `leftJoin`.

## Process

### Overview

The `leftJoin` function takes two hash tables as input and returns an array that contains all the keys from the first hash table and their corresponding values from both hash tables. If a key from the first hash table does not exist in the second hash table, the corresponding value from the second hash table will be `null`.

### Steps

1. **Define `leftJoin` Function**
   - The function takes two hash tables, `hash1` and `hash2`, as input.
   - It initializes an empty array, `returnArr`, to store the result.
   - It defines a helper function `retrieveHash2Value` to get the value associated with a key from `hash2`. If the key does not exist in `hash2`, it returns `null`.
   - It iterates over all keys in `hash1`, retrieves the corresponding values from both `hash1` and `hash2`, and pushes an array of `[key, hash1_value, hash2_value]` into `returnArr`.
   - Finally, it returns the `returnArr`.

2. **Export the Function**
   - The `leftJoin` function is exported for use in other modules.

## Example Usage

Below is an example of how to use the `leftJoin` function:

```javascript
const leftJoin = require('./leftJoin');

const hash1 = new Map();
const hash2 = new Map();

hash1.set('a', 'apple');
hash1.set('b', 'banana');
hash1.set('c', 'cherry');

hash2.set('a', 'apricot');
hash2.set('b', 'blueberry');

const result = leftJoin(hash1, hash2);

console.log(result);
// Output: [
//   ['a', 'apple', 'apricot'],
//   ['b', 'banana', 'blueberry'],
//   ['c', 'cherry', null]
// ]
```
