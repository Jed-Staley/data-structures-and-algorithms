const { BinaryTree } = require('../class-15/index');
const { Queue } = require('../../stacks-and-queues/class-10/index');

BinaryTree.prototype.breadthFirst = function() {
  const print = [];
  let depth = new Queue();
  let nextDepth = new Queue();
  nextDepth.enqueue(this.root);
  while (nextDepth.peek()) {
    depth = nextDepth;
    nextDepth = new Queue();
    while(depth.peek()) {
      const node = depth.dequeue();
      print.push(node.value);
      if (node.left) {
        nextDepth.enqueue(node.left);
      }
      if (node.right) {
        nextDepth.enqueue(node.right);
      }
    }
  }
  return print;
}

module.exports = BinaryTree;
