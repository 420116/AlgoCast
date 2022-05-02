const DFS = (arr, visited) => {
  let l = arr[0].length;
  let h = arr.length;
  DFSUtil(arr, 0, 0, visited, h, l);
  return visited;
};

const DFSUtil = (arr, row, col, visited, h, l) => {
  if (row < 0 || col < 0 || row >= h || col >= l || visited[row][col]) {
    return;
  }
  visited[row][col] = true;
  DFSUtil(arr, row + 1, col, visited, h, l); //UP
  DFSUtil(arr, row - 1, col, visited, h, l); //DOWN
  DFSUtil(arr, row, col + 1, visited, h, l); //Right
  DFSUtil(arr, row, col - 1, visited, h, l); //LEFT
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
