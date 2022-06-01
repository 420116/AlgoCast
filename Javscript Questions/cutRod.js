// Given a rod of length n inches and an array of prices
// that includes prices of all pieces of size smaller than n.
// Determine the maximum value obtainable by cutting up the rod and selling the pieces.
//For example, if the length of the rod is 8 and the values of different pieces are given as the following,
//then the maximum obtainable value is 22 (by cutting in two pieces of lengths 2 and 6)

// length   | 1   2   3   4   5   6   7   8   --->[2,6]  [3,5],[1,...]
// --------------------------------------------
// price    | 1   5   8   9  10  17  17  20   -->
// And if the prices are as following,
//then the maximum obtainable value is 24 (by cutting in eight pieces of length 1)

// length   | 1   2   3   4   5   6   7   8
// --------------------------------------------
// price    | 3   5   8   9  10  17  17  20

const getMaxSum = (arr, N, i, price) => {
  if (i === N - 1) {
    return price;
  } //8-1 = 7
  // sum = 7-arr[i+1];
  price = Math.max(price, arr[i] + getMaxSum(arr, N, i + 1, price));
  return price;
};

// const rodCut = (price, n) => {
//   let results = new Array(n).fill(0);
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j < i + 1; j++) {
//       results[i] = Math.max(results[i], price[j - 1] + results[i - j]);
//     }
//   }

//   return results;
// };

console.log(getMaxSum([1, 5, 8, 9, 10, 17, 17, 20], 8, 0, 0));
