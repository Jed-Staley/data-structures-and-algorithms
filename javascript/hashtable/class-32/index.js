'use strict';

const Hashtable = require('../class-30/index');

function tree_intersection(tree1, tree2) {

  function traverse(node, operation) {
    if (node) {
      traverse(node.left, operation);
      operation(node.value);
      traverse(node.right, operation);
    }
  }

  const tree1Hash = new Hashtable;
  function tree1Iteration(value) {
    tree1Hash.set(value, true);
  }

  const values = [];
  function tree2Iteration(value) {
    if (tree1Hash.get(value)) {
      values.push(value);
    }
  }

  traverse(tree1.root, tree1Iteration);
  traverse(tree2.root, tree2Iteration);

  if (!values.length) {
    return undefined;
  } else {
    return values;
  }
}

module.exports = tree_intersection;
