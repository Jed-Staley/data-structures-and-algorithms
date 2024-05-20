'use strict';

const { BinaryTree } = require('../class-15/index');

BinaryTree.prototype.findMax = function() {
  function search(node) {
    if (node) {
      const leftBranch = search(node.left);
      const rightBranch = search(node.right);
      const largerBranch = (leftBranch < rightBranch) ? rightBranch : leftBranch;
      return (largerBranch < node.data) ? node.data : largerBranch;
    } else {
      return 0;
    }
  }

  return search(this.root);
}

module.exports = BinaryTree;
