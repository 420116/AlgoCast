// Given a binary tree, find if it is height balanced or not. 
// A tree is height balanced if difference between heights of left and right subtrees is not more than one for all nodes of tree. 

// A height balanced tree
//         1
//      /     \
//    10      39
//   /
// 5

// An unbalanced tree
//         1
//      /    
//    10   
//   /
// 5

const balancedTree = (root) => {
  //Function to check whether a binary tree is balanced or not.

  //your code here
  return this.DFS(root)[0];
};

const DFS = (node) => {
  if (node === null) {
    return [true, 0];
  }
  let left = this.DFS(node.left);
  let right = this.DFS(node.right);
  let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
  return [balanced, 1 + Math.max(left[1], right[1])];
};
