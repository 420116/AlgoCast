const identicalBST = (root1, root2) => {
  //your code here
  if (root1 === null && root2 === null) {
    return true;
  }

  if (
    (root1 === null && root2 !== null) ||
    (root1 !== null && root2 === null)
  ) {
    return false;
  }

  if (
    root1.data === root2.data &&
    identicalBST(root1.right, root2.right) &&
    identicalBST(root1.left, root2.left)
  ) {
    return true;
  }
};

identicalBST(
  {
    data: 1,
    left: { data: 2, left: null, right: null },
    right: { data: 3, left: null, right: null },
  },
  {
    data: 1,
    left: { data: 2, left: null, right: null },
    right: { data: 3, left: null, right: null },
  }
);
