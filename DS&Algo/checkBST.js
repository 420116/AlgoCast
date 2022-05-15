const isBST = (root, arr) => {
  if (root === null) {
    return true;
  } else {
    arr.push(root.data);
  }
  if (
    root.left !== null &&
    root.left.data > root.data &&
    arr.indexOf(root.left.data) === -1 //check for duplicate in the BST
  ) {
    return false;
  }

  if (
    root.right !== null &&
    root.right.data < root.data &&
    arr.indexOf(root.left.data) === -1
  ) {
    return false;
  }

  if (!isBST(root.right,arr) || !isBST(root.left,arr)) {
    return false;
  }

  return true;
};
