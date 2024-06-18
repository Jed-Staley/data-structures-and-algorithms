'use strict';

const LinkedList = require('../../linked-lists/index')

function reverseLinkedList(list) {
  if (!list.head) { return list; }

  let current = list.head.next;
  list.head.next = null;

  while (current) {
    list.insert(current.value);
    current = current.next;
  }

  return list;
}

module.exports = reverseLinkedList;

