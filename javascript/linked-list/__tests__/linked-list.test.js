'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const testLL = new LinkedList();
    expect(testLL.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    expect(testLL.head.data).toEqual('1st Node');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    expect(testLL.head.pointer).toEqual(null);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    testLL.insert('2nd Node');
    testLL.insert('3rd Node');
    expect(testLL.head.data).toEqual('3rd Node');
    expect(testLL.head.pointer.data).toEqual('2nd Node');
    expect(testLL.head.pointer.pointer.data).toEqual('1st Node');
    expect(testLL.head.pointer.pointer.pointer).toEqual(null);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    testLL.insert('2nd Node');
    testLL.insert('3rd Node');
    expect(testLL.includes('2nd Node')).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    testLL.insert('2nd Node');
    testLL.insert('3rd Node');
    expect(testLL.includes('4th Node')).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    testLL.insert('2nd Node');
    testLL.insert('3rd Node');
    expect(testLL.toString()).toEqual('{ 3rd Node } -> { 2nd Node } -> { 1st Node } -> NULL');
  });
});
