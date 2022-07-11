// Given a rod of length N inches and an array of prices, price[] that contains prices of all pieces of size smaller than N.
// Determine the maximum value obtainable by cutting up the rod and selling the pieces.
// Example 1:
// Input:
// N = 8
// Price[] = {1, 5, 8, 9, 10, 17, 17, 20}
// Output:
// 22

//brute Force solution
const rodCut = (price, N) => {
  let maxPrice = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (i + j + 2 === N) {
        maxPrice = Math.max(maxPrice, price[i] + price[j]);
      }
    }
  }
  console.log(maxPrice);
};

rodCut([3, 5, 8, 9, 10, 17, 17, 20], 8);

//DFS Solution
const cutRod = (price, index, N) => {
  if (index === 0) {
    return N * price[0];
  }

  const notCut = cutRod(price, index - 1, N);
  let cut = 0;
  let rod_length = index + 1;
  if (rod_length <= N) {
    cut = price[index] + cutRod(price, index, N - rod_length);
  }

  return Math.max(notCut, cut);
};
//   return maxPrice;
// };

console.log(cutRod([1, 5, 8, 9, 10, 17, 17, 20], 0, 8));
