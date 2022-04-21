let max_length = -1;
let arr = 0;

const leftView = (root, level) => {
  //your code here
  if (root === null) {
    return arr;
  }

  if (max_level < level) {
    arr.push(root.data);
    max_level = level;
  }

  leftView(root.left, level + 1);
  leftView(root.right, level + 1);
};
