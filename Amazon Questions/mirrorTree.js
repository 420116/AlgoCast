// Given a Binary Tree, convert it into its mirror.
// Input:
//       1
//     /  \
//    2    3
// Output: 3 1 2
// Explanation: The tree is
//    1    (mirror)  1
//  /  \    =>      /  \
// 2    3          3    2
// The inorder of mirror is 3 1 2

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const mirrorTree = (node) => {
  if (node === null) {
    return node;
  }
  let leftNode = mirrorTree(node.left);
  let rightNode = mirrorTree(node.right);

  //swap both the pointers.
  node.left = rightNode;
  node.right = leftNode;

  return node;
};
