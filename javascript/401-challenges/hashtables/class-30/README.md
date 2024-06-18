# Hashtable

This file creates a hashtable data structure with appropriate methods that can be imported as "Hashtable."

## Process

### Overview

The implementation of the `Hashtable` class in JavaScript was designed to efficiently store and retrieve key-value pairs using a hash table data structure. The process involved creating methods for setting, getting, checking existence, retrieving keys, and hashing keys.

### Steps

1. **Class Definition and Initialization**
   - Created a `Hashtable` class with a constructor that initializes an array (buckets) to store the key-value pairs.
   - Defined the size of the hash table with a default value of 50.

2. **Hash Function**
   - Implemented a hash function (`hash(key)`) to convert a key into an index in the array. The function calculates a hash code based on the characters of the key and ensures it fits within the array size.

3. **Setting Key-Value Pairs**
   - Developed the `set(key, value)` method to add key-value pairs to the hash table.
   - Utilized the hash function to determine the correct index for the key.
   - Handled collisions by checking if the key already exists in the bucket at the calculated index. If it does, updated the value; otherwise, added a new key-value pair.

4. **Retrieving Values**
   - Created the `get(key)` method to retrieve the value associated with a given key.
   - Used the hash function to find the index and then searched the bucket for the key.

5. **Checking Key Existence**
   - Added the `has(key)` method to check if a key exists in the hash table.
   - Leveraged the `get(key)` method to determine the existence of the key.

6. **Retrieving All Keys**
   - Implemented the `keys()` method to return a collection of all keys stored in the hash table.
   - Iterated through all buckets and collected keys from non-empty buckets.

## Example Usage

Below is an example of how to use the `Hashtable` class:

```javascript
const hashTable = new Hashtable();

hashTable.set("key1", "value1");
hashTable.set("key2", "value2");
hashTable.set("key1", "newValue1");

console.log(hashTable.get("key1")); // Output: newValue1
console.log(hashTable.has("key2")); // Output: true
console.log(hashTable.keys()); // Output: ["key1", "key2"]
console.log(hashTable.hash("key1")); // Output: Index in the collection
```
