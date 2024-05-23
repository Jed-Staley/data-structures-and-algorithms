'use strict';

function fizzBuzzTree(tree) {
  function traverse(node) {
    let newStr = '';
    newStr += (node.value % 3 === 0) ? 'Fizz' : '';
    newStr += (node.value % 5 === 0) ? 'Buzz' : '';
    newStr += (newStr === '') ? node.value : '';
    node.value = newStr;
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  traverse(tree.root);
  return tree;
}
