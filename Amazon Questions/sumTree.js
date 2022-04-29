// Given a Binary Tree. Return true if, for every node X in the tree other than the leaves,
// its value is equal to the sum of its left subtree's
// value and its right subtree's value. Else return false.

// An empty tree is also a Sum Tree as the sum of an empty tree can be considered to be 0.
// A leaf node is also considered a Sum Tree.
// Input:
//     3
//   /   \
//  1     2

// Output: 1
// Explanation:
// The sum of left subtree and right subtree is
// 1 + 2 = 3, which is the value of the root node.
// Therefore,the given binary tree is a sum tree.

function Node(data, right, left) {
  this.data = data;
  this.left = left;
  this.right = right;
}

const isLeafNode = (oNode) => {
  if (oNode === null) {
    return false;
  }
  if (!oNode.left && !oNode.right) {
    return true;
  }
  return false;
};

const sumTree = (oNode) => {
  if (oNode == null) {
    return false;
  }

  let rightSum = sumTree(oNode.right);
  if (rightSum === -1) {
    return -1;
  }
  let leftSum = sumTree(oNode.left);
  if (leftSum === -1) {
    return -1;
  }

  if (isLeafNode(oNode) || rightSum + leftSum === oNode.data) {
    return ls + rs + oNode.data;
  }

  return -1;
};
