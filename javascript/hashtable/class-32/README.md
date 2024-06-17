# Tree Intersection

This file defines a function to find the intersection of values in two binary trees using a hashtable data structure. The function is implemented in JavaScript and can be imported as `tree_intersection`.

## Process

## Whiteboard

[Whiteboard](./tree-intersection.png)

### Overview

The `tree_intersection` function identifies the common values present in both binary trees. The implementation uses a hashtable to efficiently track the values encountered during the traversal of the trees.

### Steps

1. **Import Hashtable Class**
   - Ensure the `Hashtable` class is correctly imported from the specified path.

2. **Define `tree_intersection` Function**
   - The function takes two binary trees as input and initializes a new instance of `Hashtable` to store values from the first tree.
   - It defines a `traverse` helper function to perform an in-order traversal on the tree nodes, applying a given operation to each node's value.
   - It iterates over the first tree, storing each value in the hashtable.
   - It iterates over the second tree, checking each value's existence in the hashtable. If a value is found, it adds that value to the result list.
   - If no common values are found, it returns `undefined`. Otherwise, it returns the list of common values.

3. **Export the Function**
   - The `tree_intersection` function is exported for use in other modules.

## Example Usage

Below is an example of how to use the `tree_intersection` function:

```javascript
const tree_intersection = require('./tree_intersection');
const BinaryTree = require('./BinaryTree');

const tree1 = new BinaryTree();
// Add values to tree1
tree1.add(10);
tree1.add(20);
tree1.add(30);

const tree2 = new BinaryTree();
// Add values to tree2
tree2.add(15);
tree2.add(20);
tree2.add(25);

console.log(tree_intersection(tree1, tree2)); // Output: [20]
```
