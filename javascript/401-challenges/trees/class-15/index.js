'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  #retrieve(order, node, logsArray) {
    if (node) {
      const readNode = () => logsArray.push(node.value);
      const searchLeft = () => this.#retrieve(order, node.left, logsArray);
      const searchRight = () => this.#retrieve(order, node.right, logsArray);

      switch(order) {
        case 'pre':
          readNode();
          searchLeft();
          searchRight();
          break;
        case 'in':
          searchLeft();
          readNode();
          searchRight();
          break;
        case 'post':
          searchLeft();
          searchRight();
          readNode();
          break;
      }
    }
  }

  preOrder() {
    const arr = [];
    this.#retrieve('pre', this.root, arr);
    return arr;
  }

  inOrder() {
    const arr = [];
    this.#retrieve('in', this.root, arr);
    return arr;
  }

  postOrder() {
    const arr = [];
    this.#retrieve('post', this.root, arr);
    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  #findParent(value) {
    function search(node) {
      if (node) {
        if (value === node.value) {
          return false;
        } else {
          const ladderValue = search((value < node.value) ? node.left : node.right);
          if (ladderValue) {
            return ladderValue;
          } else {
            return node;
          }
        }
      } else {
        return false;
      }
    }

    const parent = search(this.root);
    return (parent) ? parent : null;
  }

  add(value) {
    const parent = this.#findParent(value);
    if (parent) {
      const branch = (value < parent.value) ? 'left' : 'right';
      if (!parent[branch]) {
        parent[branch] = new Node(value);
      }
    } else {
      this.root = new Node(value);
    }
  }

  contains(value) {
    const parent = this.#findParent(value);
    if (parent) {
      const branch = (value < parent.value) ? 'left' : 'right';
      return !!parent[branch];
    } else {
      return value === this.root.value;
    }
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
