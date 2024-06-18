'use strict';

const BinaryTree = require('../index');

describe('BinaryTree', () => {

  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.root = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      },
      right: {
        value: 20,
        left: {
          value: 15,
          left: null,
          right: null
        },
        right: {
          value: 25,
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
    tree.root = { value: 42, left: null, right: null };
    expect(tree.findMax()).toBe(42);
  });

});
