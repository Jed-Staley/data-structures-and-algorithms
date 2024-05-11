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

  append(value) {
    const newNode = new Node(value, null);
    if (this.head) {
      let dynamicHead = this.head;
      while (dynamicHead.pointer) {
        dynamicHead = dynamicHead.pointer;
      }
      dynamicHead.pointer = newNode;
    } else {
      this.insert(value);
    }
  }

  insertAfter(value, newValue) {
    let dynamicHead = this.head;
    while (dynamicHead) {
      if (dynamicHead.data === value) {
        dynamicHead.pointer = new Node(newValue, dynamicHead.pointer);
        break;
      }
      dynamicHead = dynamicHead.pointer;
    }
  }

  insertBefore(value, newValue) {
    let dynamicHead = this.head;
    if (dynamicHead.data === value) {
      this.insert(newValue);
      return;
    }
    while (dynamicHead) {
      if (dynamicHead.pointer.data === value) {
        dynamicHead.pointer = new Node(newValue, dynamicHead.pointer);
        break;
      }
      dynamicHead = dynamicHead.pointer;
    }
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
