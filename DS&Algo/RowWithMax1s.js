// Given a boolean 2D array of n x m dimensions where each row is sorted.
// Find the 0-based index of the first row that has the maximum number of 1's.

// Example 1:

// Input:
// N = 4 , M = 4
// Arr[][] = {{0, 1, 1, 1},
//            {0, 0, 1, 1},
//            {1, 1, 1, 1},
//            {0, 0, 0, 0}}
// Output: 2
// Explanation: Row 2 contains 4 1's (0-based
// indexing).

const rowWithMax1s = (arr, n, m) => {
  // code here
  let max = 0;
  let row = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        if (max < m - j) {
          row = i;
          max = m - j;
        }
        j = m;
      }
    }
  }
  return row;
};
