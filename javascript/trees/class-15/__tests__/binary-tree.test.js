const { Node, BinaryTree, BinarySearchTree } = require('../index');

describe('BinaryTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  test('Can successfully instantiate an empty tree', () => {
    expect(tree.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    tree.root = new Node(1);
    expect(tree.root.data).toBe(1);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);

    expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);

    expect(tree.inOrder()).toEqual([4, 2, 5, 1, 3]);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);

    expect(tree.postOrder()).toEqual([4, 5, 2, 3, 1]);
  });
});

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('Can successfully add a left child and right child properly to a node', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.root.data).toBe(10);
    expect(bst.root.left.data).toBe(5);
    expect(bst.root.right.data).toBe(15);
  });

  test('Contains method returns true for an existing node value', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
  });

  test('Contains method returns false for a non-existing node value', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.contains(20)).toBe(false);
    expect(bst.contains(0)).toBe(false);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);

    expect(bst.preOrder()).toEqual([10, 5, 2, 7, 15]);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);

    expect(bst.inOrder()).toEqual([2, 5, 7, 10, 15]);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);

    expect(bst.postOrder()).toEqual([2, 7, 5, 15, 10]);
  });
});
