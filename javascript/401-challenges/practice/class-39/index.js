'use strict';

function sumOfQueue(queue) {
  if (queue.peek()) {
    const value = queue.dequeue();
    const nextSum = (typeof value === 'number') ? Number(sumOfQueue(queue)) : sumOfQueue(queue);
    return value + nextSum;
  }
  return '';
}

module.exports = sumOfQueue;
