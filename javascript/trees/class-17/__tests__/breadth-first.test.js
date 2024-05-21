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
    binaryTree.root = { data: 1, left: null, right: null };
    expect(binaryTree.breadthFirst()).toEqual([1]);
  });

  test('should return an array in breadth-first order for a tree with multiple nodes', () => {
    binaryTree.root = {
      data: 1,
      left: { data: 2, left: null, right: null },
      right: { data: 3, left: null, right: null }
    };
    expect(binaryTree.breadthFirst()).toEqual([1, 2, 3]);

    binaryTree.root.left.left = { data: 4, left: null, right: null };
    binaryTree.root.left.right = { data: 5, left: null, right: null };
    binaryTree.root.right.left = { data: 6, left: null, right: null };
    binaryTree.root.right.right = { data: 7, left: null, right: null };

    expect(binaryTree.breadthFirst()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should handle a more complex tree structure', () => {
    binaryTree.root = {
      data: 1,
      left: {
        data: 2,
        left: { data: 4, left: null, right: null },
        right: { data: 5, left: null, right: null }
      },
      right: {
        data: 3,
        left: { data: 6, left: null, right: null },
        right: {
          data: 7,
          left: { data: 8, left: null, right: null },
          right: null
        }
      }
    };
    expect(binaryTree.breadthFirst()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
