'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

const createDefaultTestLinkedList = () => {
  const testLL = new LinkedList();
  testLL.insert('1st Node');
  testLL.insert('2nd Node');
  testLL.insert('3rd Node');
  return testLL;
};

const arrayToLinkedList = (arr) => {
  const linkedList = new LinkedList();
  for (let i = 0; i < arr.length; i++) {
    linkedList.insert(arr[i]);
  }
  return linkedList;
};

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const testLL = new LinkedList();
    expect(testLL.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    expect(testLL.head.value).toEqual('1st Node');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    expect(testLL.head.next).toEqual(null);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const testLL = createDefaultTestLinkedList();
    expect(testLL.head.value).toEqual('3rd Node');
    expect(testLL.head.next.value).toEqual('2nd Node');
    expect(testLL.head.next.next.value).toEqual('1st Node');
    expect(testLL.head.next.next.next).toEqual(null);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const testLL = createDefaultTestLinkedList();
    expect(testLL.includes('2nd Node')).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const testLL = createDefaultTestLinkedList();
    expect(testLL.includes('4th Node')).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const testLL = createDefaultTestLinkedList();
    expect(testLL.toString()).toEqual('{ 3rd Node } -> { 2nd Node } -> { 1st Node } -> NULL');
  });
});


describe('Linked List Class 06', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const testLL = createDefaultTestLinkedList();
    testLL.append('0th Node');
    expect(testLL.toString()).toEqual('{ 3rd Node } -> { 2nd Node } -> { 1st Node } -> { 0th Node } -> NULL');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const testLL = createDefaultTestLinkedList();
    testLL.append('0th Node');
    testLL.append('-1st Node');
    testLL.append('-2nd Node');
    expect(testLL.toString()).toEqual('{ 3rd Node } -> { 2nd Node } -> { 1st Node } -> { 0th Node } -> { -1st Node } -> { -2nd Node } -> NULL');
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const testLL = createDefaultTestLinkedList();
    testLL.insertBefore('2nd Node', '2.5th Node');
    expect(testLL.toString()).toEqual('{ 3rd Node } -> { 2.5th Node } -> { 2nd Node } -> { 1st Node } -> NULL');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const testLL = createDefaultTestLinkedList();
    testLL.insertBefore('3rd Node', '4th Node');
    expect(testLL.toString()).toEqual('{ 4th Node } -> { 3rd Node } -> { 2nd Node } -> { 1st Node } -> NULL');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const testLL = createDefaultTestLinkedList();
    testLL.insertAfter('2nd Node', '1.5th Node');
    expect(testLL.toString()).toEqual('{ 3rd Node } -> { 2nd Node } -> { 1.5th Node } -> { 1st Node } -> NULL');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const testLL = createDefaultTestLinkedList();
    testLL.insertAfter('1st Node', '0th Node');
    expect(testLL.toString()).toEqual('{ 3rd Node } -> { 2nd Node } -> { 1st Node } -> { 0th Node } -> NULL');
  });
});

describe('Linked List Class 07', () => {
  it('Where k is greater than the length of the linked list', () => {
    const testLL = createDefaultTestLinkedList();
    expect(testLL.kthFromEnd(4)).toEqual(undefined);
  });

  it('Where k and the length of the list are the same', () => {
    const testLL = createDefaultTestLinkedList();
    expect(testLL.kthFromEnd(3)).toEqual(undefined);
  });

  it('Where k is not a nonnegative integer', () => {
    const testLL = createDefaultTestLinkedList();
    expect(testLL.kthFromEnd(-1)).toEqual(undefined);
    expect(testLL.kthFromEnd(2.5)).toEqual(undefined);
    expect(testLL.kthFromEnd('Hello World')).toEqual(undefined);
  });

  it('Where the linked list is of a size 1', () => {
    const testLL = new LinkedList();
    testLL.insert('1st Node');
    expect(testLL.kthFromEnd(0)).toEqual(undefined);
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const testLL = createDefaultTestLinkedList();
    expect(testLL.kthFromEnd(1)).toEqual('2nd Node');
  });
});


describe('Linked List Class 08', () => {
  it('Merges correctly when the lists are the same length', () => {
    const testLL1 = arrayToLinkedList([5, 3, 1]);
    const testLL2 = arrayToLinkedList([6, 4, 2]);
    expect(testLL1.zipLists(testLL2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  it('Merges correctly when the first list is longer by 1', () => {
    const testLL1 = arrayToLinkedList([7, 5, 3, 1]);
    const testLL2 = arrayToLinkedList([6, 4, 2]);
    expect(testLL1.zipLists(testLL2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> NULL');
  });

  it('Merges correctly when the first list is longer by more than 1', () => {
    const testLL1 = arrayToLinkedList([10, 9, 8, 7, 5, 3, 1]);
    const testLL2 = arrayToLinkedList([6, 4, 2]);
    expect(testLL1.zipLists(testLL2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> { 9 } -> { 10 } -> NULL');
  });

  it('Merges correctly when the second list is longer by 1', () => {
    const testLL1 = arrayToLinkedList([5, 3, 1]);
    const testLL2 = arrayToLinkedList([7, 6, 4, 2]);
    expect(testLL1.zipLists(testLL2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> NULL');
  });

  it('Merges correctly when the second list is longer by more than 1', () => {
    const testLL1 = arrayToLinkedList([5, 3, 1]);
    const testLL2 = arrayToLinkedList([10, 9, 8, 7, 6, 4, 2]);
    expect(testLL1.zipLists(testLL2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> { 9 } -> { 10 } -> NULL');
  });
});
