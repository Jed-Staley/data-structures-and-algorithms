'use strict';

const fizzBuzzTree = require('../index');

function createNode(value, children = []) {
  return {
    value: value,
    children: children
  };
}

const tree = {
  root: createNode(1, [
    createNode(3, [
      createNode(6),
      createNode(5)
    ]),
    createNode(15)
  ])
};

const expectedTree = {
  root: createNode('1', [
    createNode('Fizz', [
      createNode('Fizz'),
      createNode('Buzz')
    ]),
    createNode('FizzBuzz')
  ])
};

describe('fizzBuzzTree', () => {
  it('transforms the tree values correctly', () => {
    const result = fizzBuzzTree(tree);
    expect(result).toEqual(expectedTree);
  });

  it('handles an empty tree', () => {
    const emptyTree = { root: null };
    const result = fizzBuzzTree(emptyTree);
    expect(result).toEqual(emptyTree);
  });

  it('handles a single node tree', () => {
    const singleNodeTree = { root: createNode(2) };
    const expectedSingleNodeTree = { root: createNode('2') };
    const result = fizzBuzzTree(singleNodeTree);
    expect(result).toEqual(expectedSingleNodeTree);
  });

  it('handles a tree with all nodes divisible by 3', () => {
    const treeAllFizz = { root: createNode(3, [createNode(6), createNode(9)]) };
    const expectedTreeAllFizz = { root: createNode('Fizz', [createNode('Fizz'), createNode('Fizz')]) };
    const result = fizzBuzzTree(treeAllFizz);
    expect(result).toEqual(expectedTreeAllFizz);
  });

  it('handles a tree with all nodes divisible by 5', () => {
    const treeAllBuzz = { root: createNode(5, [createNode(10), createNode(20)]) };
    const expectedTreeAllBuzz = { root: createNode('Buzz', [createNode('Buzz'), createNode('Buzz')]) };
    const result = fizzBuzzTree(treeAllBuzz);
    expect(result).toEqual(expectedTreeAllBuzz);
  });

  it('handles a tree with nodes divisible by both 3 and 5', () => {
    const treeAllFizzBuzz = { root: createNode(15, [createNode(30), createNode(45)]) };
    const expectedTreeAllFizzBuzz = { root: createNode('FizzBuzz', [createNode('FizzBuzz'), createNode('FizzBuzz')]) };
    const result = fizzBuzzTree(treeAllFizzBuzz);
    expect(result).toEqual(expectedTreeAllFizzBuzz);
  });
});
