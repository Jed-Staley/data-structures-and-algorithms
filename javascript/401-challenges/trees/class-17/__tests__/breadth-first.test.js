const BinaryTree = require('../index');

describe('BinaryTree breadthFirst method', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  test('should return an empty array for an empty tree', () => {
    expect(binaryTree.breadthFirst()).toEqual([]);
  });

  test('should return an array with a single element for a tree with one node', () => {
    binaryTree.root = { value: 1, left: null, right: null };
    expect(binaryTree.breadthFirst()).toEqual([1]);
  });

  test('should return an array in breadth-first order for a tree with multiple nodes', () => {
    binaryTree.root = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    };
    expect(binaryTree.breadthFirst()).toEqual([1, 2, 3]);

    binaryTree.root.left.left = { value: 4, left: null, right: null };
    binaryTree.root.left.right = { value: 5, left: null, right: null };
    binaryTree.root.right.left = { value: 6, left: null, right: null };
    binaryTree.root.right.right = { value: 7, left: null, right: null };

    expect(binaryTree.breadthFirst()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should handle a more complex tree structure', () => {
    binaryTree.root = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null }
      },
      right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: {
          value: 7,
          left: { value: 8, left: null, right: null },
          right: null
        }
      }
    };
    expect(binaryTree.breadthFirst()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
