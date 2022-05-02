//Depth First Search of 2D array

const DFS = (arr, visited) => {
  let stack = [[0, 0]];
  let current = [];
  let h = arr.length;
  let l = arr[0].length;
  while (stack.length > 0) {
    current = stack.pop();
    let row = current[0];
    let col = current[1];

    if (row < 0 || col < 0 || col >= l || row >= h || visited[row][col]) {
      continue;
    }
    visited[row][col] = true;
    stack.push([row, col - 1]);
    stack.push([row, col + 1]);
    stack.push([row + 1, col]);
    stack.push([row - 1, col]);
  }
  return visited;
};

let arr = [
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
];

let visited = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

console.log(DFS(arr, visited));
