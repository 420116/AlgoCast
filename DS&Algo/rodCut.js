// Given a rod of length N inches and an array of prices, price[] that contains prices of all pieces of size smaller than N.
// Determine the maximum value obtainable by cutting up the rod and selling the pieces.
// Example 1:
// Input:
// N = 8
// Price[] = {1, 5, 8, 9, 10, 17, 17, 20}
// Output:
// 22

const rodCut = (price, n) => {
  let maxPrice = 0;
  let cache = new Array(n + 1);
  cache[0] = 0;
  for (let i = 1; i <= n; i++) {
    maxPrice = 0;
    for (let j = 0; j < i; j++) {
      maxPrice = Math.max(maxPrice, price[j] + cache[i - j - 1]);
    }
    cache[i] = maxPrice;
  }
  return cache[n];
};

console.log(rodCut([1, 5, 8, 9, 10, 17, 17, 20], 8));
