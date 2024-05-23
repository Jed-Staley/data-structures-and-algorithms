function compareTrees(tree1, tree2) {
  if (!(tree1 && tree2)) { return false }
  function traverse(node, count) {
    if (node) {
      const leftValue = traverse(node.left);
      const rightValue = traverse(node.right);
      if (leftValue && rightValue) {
        count++;
      }
      return false;
    } else {
      return true;
    }
  }
  let count1 = 0;
  let count2 = 0;
  traverse(tree1.root, count1);
  traverse(tree2.root, count2);
  return (count1 === count2);
}
