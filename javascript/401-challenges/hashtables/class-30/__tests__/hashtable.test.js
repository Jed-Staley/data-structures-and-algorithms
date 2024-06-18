const Hashtable = require('../index');

describe('Hashtable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new Hashtable();
  });

  test('Setting a key/value to your hashtable results in the value being in the value structure', () => {
    hashTable.set('key1', 'value1');
    expect(hashTable.get('key1')).toBe('value1');
  });

  test('Retrieving based on a key returns the value stored', () => {
    hashTable.set('key1', 'value1');
    expect(hashTable.get('key1')).toBe('value1');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashTable.get('nonExistentKey')).toBeUndefined();
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    expect(hashTable.keys()).toEqual(expect.arrayContaining(['key1', 'key2']));
  });

  test('Successfully handle a collision within the hashtable', () => {
    hashTable.set('key1', 'value1');
    hashTable.set('key1_collision', 'value2');
    expect(hashTable.get('key1')).toBe('value1');
    expect(hashTable.get('key1_collision')).toBe('value2');
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    hashTable.set('key1', 'value1');
    hashTable.set('key1_collision', 'value2');
    expect(hashTable.get('key1_collision')).toBe('value2');
  });

  test('Successfully hash a key to an in-range value', () => {
    const index = hashTable.hash('key1');
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(hashTable.size);
  });
});
