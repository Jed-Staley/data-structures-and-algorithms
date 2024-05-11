'use strict';

class Node {
  constructor(data, pointer) {
    this.data = data;
    this.pointer = pointer;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let dynamicHead = this.head;
    while (dynamicHead) {
      if (dynamicHead.data === value) {
        return true;
      }
      dynamicHead = dynamicHead.pointer;
    }
    return false;
  }

  toString() {
    let dynamicHead = this.head;
    let str = '';
    while (dynamicHead) {
      str += `{ ${dynamicHead.data} } -> `;
      dynamicHead = dynamicHead.pointer;
    }
    str += 'NULL';
    return str;
  }
}

module.exports = LinkedList;
