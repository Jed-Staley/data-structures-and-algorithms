'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    const newNode = new Node(value, null);
    if (this.head) {
      let dynamicHead = this.head;
      while (dynamicHead.next) {
        dynamicHead = dynamicHead.next;
      }
      dynamicHead.next = newNode;
    } else {
      this.insert(value);
    }
  }

  insertAfter(value, newValue) {
    let dynamicHead = this.head;
    while (dynamicHead) {
      if (dynamicHead.value === value) {
        dynamicHead.next = new Node(newValue, dynamicHead.next);
        break;
      }
      dynamicHead = dynamicHead.next;
    }
  }

  insertBefore(value, newValue) {
    let dynamicHead = this.head;
    if (dynamicHead.value === value) {
      this.insert(newValue);
      return;
    }
    while (dynamicHead) {
      if (dynamicHead.next.value === value) {
        dynamicHead.next = new Node(newValue, dynamicHead.next);
        break;
      }
      dynamicHead = dynamicHead.next;
    }
  }

  kthFromEnd(k) {
    let length = this.length();
    if (k >= length || k < 0 || k !== Math.floor(k) || length < 2) {
      return undefined;
    } else {
      let dynamicHead = this.head;
      for (let i = 0; i < (length - (k + 1)); i++) {
        dynamicHead = dynamicHead.next;
      }
      return dynamicHead.value;
    }
  }

  includes(value) {
    let dynamicHead = this.head;
    while (dynamicHead) {
      if (dynamicHead.value === value) {
        return true;
      }
      dynamicHead = dynamicHead.next;
    }
    return false;
  }

  length() {
    let length = 0;
    let dynamicHead = this.head;
    while(dynamicHead) {
      length++;
      dynamicHead = dynamicHead.next;
    }
    return length;
  }

  toString() {
    let dynamicHead = this.head;
    let str = '';
    while (dynamicHead) {
      str += `{ ${dynamicHead.value} } -> `;
      dynamicHead = dynamicHead.next;
    }
    str += 'NULL';
    return str;
  }

  zipLists(linkedList) {
    const result = new LinkedList();
    let dynamicHead1 = this.head;
    let dynamicHead2 = linkedList.head;
    while (dynamicHead1 && dynamicHead2) {
      result.append(dynamicHead1.value);
      dynamicHead1 = dynamicHead1.next;
      result.append(dynamicHead2.value);
      dynamicHead2 = dynamicHead2.next;
    }
    let finalHead = result.head;
    while (finalHead.next) {
      finalHead = finalHead.next;
    }
    finalHead.next = dynamicHead1 ? dynamicHead1 : dynamicHead2;
    return result;
  }
}

module.exports = LinkedList;
