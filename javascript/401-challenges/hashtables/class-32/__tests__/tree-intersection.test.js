'use strict';

const tree_intersection = require('../index');

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

describe('tree_intersection', () => {
  it('should return common values in two binary trees', () => {
    const tree1 = new BinaryTree(
      new Node(1, new Node(2), new Node(3))
    );

    const tree2 = new BinaryTree(
      new Node(3, new Node(2), new Node(4))
    );

    expect(tree_intersection(tree1, tree2)).toEqual([2, 3]);
  });

  it('should return undefined if no common values exist', () => {
    const tree1 = new BinaryTree(
      new Node(1, new Node(2), new Node(3))
    );

    const tree2 = new BinaryTree(
      new Node(4, new Node(5), new Node(6))
    );

    expect(tree_intersection(tree1, tree2)).toBeUndefined();
  });

  it('should handle trees with one node each', () => {
    const tree1 = new BinaryTree(new Node(1));
    const tree2 = new BinaryTree(new Node(1));

    expect(tree_intersection(tree1, tree2)).toEqual([1]);
  });

  it('should handle one empty tree', () => {
    const tree1 = new BinaryTree(new Node(1, new Node(2), new Node(3)));
    const tree2 = new BinaryTree();

    expect(tree_intersection(tree1, tree2)).toBeUndefined();
  });

  it('should handle both trees empty', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    expect(tree_intersection(tree1, tree2)).toBeUndefined();
  });
});
