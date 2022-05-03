// There are N students in a class. Some of them are friends,others are not.
// Their friendship is transitive; if A is a direct friend of B, and B is a direct friend of C,then A is an indirect friend of C.
// A friend circle is defined as a group of students who are direct or indirect friends.
// The input matrix will have a number of rows and columns equal to the number of students in a class.
// A cell [i,j] will hold the value 1 if student i and student j are friends; otherwise, the cell will hold the value 0.
// For example, if the input is:
let arr = [
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
];

let arr2 = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

const FOF = (arr, visited) => {
  let l = arr[0].length;
  let h = arr.length;
  let counter = 0;
  for (let i = 0; i < h; i++) {
    for (j = 0; j < l; j++) {
      if (arr[i][j] === 1 && !visited[i][j]) {
        counter = counter + 1;
        DFS(arr, i, j, visited, h, l);
      }
    }
  }
  return counter;
};

const DFS = (arr, row, col, visited, h, l) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= h ||
    col >= l ||
    visited[row][col] ||
    arr[row][col] !== 1
  ) {
    return;
  }
  visited[row][col] = true;
  DFS(arr, row + 1, col, visited, h, l); //UP
  DFS(arr, row - 1, col, visited, h, l); //DOWN
  DFS(arr, row, col + 1, visited, h, l); //Right
  DFS(arr, row, col - 1, visited, h, l); //LEFT
};

let visited = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

console.log(FOF(arr, visited)); // Output 2
console.log(FOF(arr2, visited)); // Output 3
