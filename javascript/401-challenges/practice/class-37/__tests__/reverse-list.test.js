const LinkedList = require('../../../linked-lists/index');
const reverseLinkedList = require('../index');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
  });

  test('should reverse the linked list', () => {
    const reversedList = reverseLinkedList(list);
    const values = [];
    let current = reversedList.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    expect(values).toEqual([4, 3, 2, 1]);
  });

  test('should handle an empty linked list', () => {
    const emptyList = new LinkedList();
    const reversedEmptyList = reverseLinkedList(emptyList);
    expect(reversedEmptyList.head).toBeNull();
  });

  test('should handle a single-node linked list', () => {
    const singleNodeList = new LinkedList();
    singleNodeList.append(5);
    const reversedSingleNodeList = reverseLinkedList(singleNodeList);
    expect(reversedSingleNodeList.head.value).toBe(5);
  });

  test('should handle reversing a linked list with multiple nodes', () => {
    list.append(5);
    list.append(6);
    const reversedList = reverseLinkedList(list);
    const values = [];
    let current = reversedList.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    expect(values).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
