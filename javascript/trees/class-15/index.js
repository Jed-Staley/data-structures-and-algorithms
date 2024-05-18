'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const arr = [];

    function retrieve(node) {
      if (node) {
        arr.push(node.data);
        retrieve(node.left);
        retrieve(node.right);
      }
    }

    retrieve(this.root);

    return arr;
  }

  inOrder() {
    const arr = [];

    function retrieve(node) {
      if (node) {
        retrieve(node.left);
        arr.push(node.data);
        retrieve(node.right);
      }
    }

    retrieve(this.root);

    return arr;
  }

  postOrder() {
    const arr = [];

    function retrieve(node) {
      if (node) {
        retrieve(node.left);
        retrieve(node.right);
        arr.push(node.data);
      }
    }

    retrieve(this.root);

    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    function search(node) {
      if (node) {
        if (value === node.data) { return false; }
        let newBranch = (value < node.data) ? node.left : node.right;
        if (search(newBranch)) {
          if (value < node.data) {
            node.left = new Node(value);
          } else {
            node.right = new Node(value);
          }
        }
        return false;
      } else {
        return true;
      }
    }

    search(this.root);
    return;
  }

  contains(value) {
    function search(node) {
      if (node) {
        if (value === node.data) { return true; }
        let newBranch = (value < node.data) ? node.left : node.right;
        return search(newBranch);
      } else {
        return false;
      }
    }

    return search(this.root);
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
