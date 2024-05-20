'use strict';

const BinaryTree = require('../index');

describe('BinaryTree', () => {

  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.root = {
      data: 10,
      left: {
        data: 5,
        left: {
          data: 3,
          left: null,
          right: null
        },
        right: {
          data: 7,
          left: null,
          right: null
        }
      },
      right: {
        data: 20,
        left: {
          data: 15,
          left: null,
          right: null
        },
        right: {
          data: 25,
          left: null,
          right: null
        }
      }
    };
  });

  test('findMax should return the maximum value in the tree', () => {
    expect(tree.findMax()).toBe(25);
  });

  test('findMax should handle an empty tree', () => {
    tree.root = null;
    expect(tree.findMax()).toBe(0);
  });

  test('findMax should handle a tree with a single node', () => {
    tree.root = { data: 42, left: null, right: null };
    expect(tree.findMax()).toBe(42);
  });

});
