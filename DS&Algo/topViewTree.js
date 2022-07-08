//Function to return a list of nodes visible from the top view
//from left to right in Binary Tree.
const topView = (root) => {
  //your code here
  let m = {};
  let levelMap = {};
  this.fillMap(root, 0, 0, m, levelMap);
  let arr = Object.keys(levelMap);
  let levelArr = [];
  arr.forEach((index) => {
    levelArr = [...levelArr, ...levelMap[index]];
  });
  arr = Object.keys(m);
  arr.sort(function (a, b) {
    return a - b;
  });
  let res = [];
  arr.forEach((index) => {
    let t = m[index];
    let i = 100000;
    t.forEach((item) => {
      i = Math.min(levelArr.indexOf(item), i);
    });
    res.push(levelArr[i]);
  });

  return res;
};

const fillMap = (root, d, l, m, levelMap) => {
  if (root === null) return;

  if (!m[d]) {
    m[d] = [root.data];
  } else {
    m[d].push(root.data);
  }

  if (!levelMap[l]) {
    levelMap[l] = [root.data];
  } else {
    levelMap[l].push(root.data);
  }

  this.fillMap(root.left, d - 1, l + 1, m, levelMap);
  this.fillMap(root.right, d + 1, l + 1, m, levelMap);
};
