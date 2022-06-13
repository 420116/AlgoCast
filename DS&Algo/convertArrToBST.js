// Given a sorted array. Convert it into a Height balanced Binary Search Tree (BST).
// Find the preorder traversal of height balanced BST.
// If there exist many such balanced BST consider the tree whose preorder is lexicographically smallest.
// Height balanced BST means a binary tree in which the depth of the left subtree and the right subtree of every node never differ by more than 1.

// Example 1:
// Input: nums = {1, 2, 3, 4}
// Output: {2, 1, 3, 4}
// Explanation:
// The preorder traversal of the following
// BST formed is {2, 1, 3, 4}:
//            2
//          /   \
//            1     3
//                \
//                 4

const arrToBST = (arr, leftPointer, rightPointer, results) => {
  if (leftPointer > rightPointer) {
    return results;
  }

  let mid = Math.floor((leftPointer + rightPointer) / 2);
  results.push(arr[mid]);
  arrToBST(arr, leftPointer, mid - 1, results);
  arrToBST(arr, mid + 1, rightPointer, results);
  return results;
};

console.log(arrToBST([1, 2, 3, 4], 0, 3, [])); //[2, 1, 3, 4]
