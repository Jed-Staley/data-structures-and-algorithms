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

  kthFromEnd(k) {
    let length = this.length();
    if (k >= length || k < 0 || k !== Math.floor(k) || length < 2) {
      return undefined;
    } else {
      let dynamicHead = this.head;
      for (let i = 0; i < (length - (k + 1)); i++) {
        dynamicHead = dynamicHead.pointer;
      }
      return dynamicHead.data;
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

  length() {
    let length = 0;
    let dynamicHead = this.head;
    while(dynamicHead) {
      length++;
      dynamicHead = dynamicHead.pointer;
    }
    return length;
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
