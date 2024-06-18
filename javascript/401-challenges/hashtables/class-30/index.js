'use strict';

class Hashtable {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }

  // Hash function to convert key into an index
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  // Set key-value pair in the table
  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        bucket[1] = value;
        return;
      }
    }
    this.buckets[index].push([key, value]);
  }

  // Get value by key from the table
  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return undefined;
    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
    return undefined;
  }

  // Check if a key exists in the table
  has(key) {
    return this.get(key) !== undefined;
  }

  // Get collection of keys
  keys() {
    const keysCollection = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [key] of bucket) {
          keysCollection.push(key);
        }
      }
    }
    return keysCollection;
  }
}

module.exports = Hashtable;
