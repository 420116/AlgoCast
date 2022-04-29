// Given a binary tree, find its level order traversal.
// Level order traversal of a tree is breadth-first
// traversal for the tree.

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const preOrder = (node, levelMap, level) => {
  if (node === null) {
    return;
  }
  if (!levelMap[level]) {
    levelMap[level] = [node.data];
  } else {
    levelMap[level].push(node.data);
  }
  preOrder(node.left, levelMap, level + 1);
  preOrder(node.rightlevelMap, level + 1);
};

const levelOrder = (node) => {
  let levelMap = {};
  let arr = [];
  let results = [];
  preOrder(node, levelMap, 1);
  arr = Object.keys(levelMap);
  for (let i = 0; i < arr.length; i++) {
    let tempArr = levelMap[arr[i]];
    if (tempArr.length > 0) {
      for (let j = 0; j < tempArr.length; j++) {
        results.push(tempArr[j]);
      }
    }
  }
  return results;
};
