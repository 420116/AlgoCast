const isBST = (root) => {
  if (root === null) {
    return true;
  }
  if (root.left !== null && root.left.data > root.data) {
    return false;
  }

  if (root.right !== null && root.right.data < root.data) {
    return false;
  }
  if (!isBST(root.right) || !isBST(root.left)) {
    return false;
  }

  return true;
};
