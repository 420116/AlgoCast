// You are given weights and values of N items,
// put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
// Note that we have only one quantity of each item.
// In other words, given two integer arrays val[0..N-1] and wt[0..N-1] which represent values and weights associated with N items respectively.
// Also given an integer W which represents knapsack capacity,
// find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W.
// You cannot break an item, either pick the complete item or dont pick it (0-1 property).

// Example 1:
// Input:
// N = 3
// W = 4
// values[] = {1,2,3}
// weight[] = {4,5,1}
// Output: 3

const knapSack = (W, wt, val, n) => {
  let K = new Array(n + 1);
  // Build table K[][] in bottom up manner
  for (let i = 0; i <= n; i++) {
    K[i] = new Array(W + 1);
    for (let j = 0; j <= W; j++) {
      if (i == 0 || j == 0) {
        K[i][j] = 0;
      } else if (wt[i - 1] <= j) {
        K[i][j] = Math.max(val[i - 1] + K[i - 1][j - wt[i - 1]], K[i - 1][j]);
      } else {
        K[i][j] = K[i - 1][j];
      }
    }
  }

  return K[n][W];
};
