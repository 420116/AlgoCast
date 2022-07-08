// Given a rod of length N inches and an array of prices, price[] that contains prices of all pieces of size smaller than N.
// Determine the maximum value obtainable by cutting up the rod and selling the pieces.
// Example 1:
// Input:
// N = 8
// Price[] = {1, 5, 8, 9, 10, 17, 17, 20}
// Output:
// 22

//brute Force solution
// const rodCut = (price, N) => {
//   let maxPrice = 0;

//   for (let i = 0; i < N; i++) {
//     for (let j = i + 1; j < N; j++) {
//       if (i + j + 2 === N) {
//         maxPrice = Math.max(maxPrice, price[i] + price[j]);
//       }
//     }
//   }
//   console.log(maxPrice);
// };

//rodCut([1, 5, 8, 9, 10, 17, 17, 20], 8);

//DFS Solution
const cutRod = (price, N) => {
 
  
  return maxPrice;
};
//   return maxPrice;
// };

console.log(cutRod([1, 5, 8, 9, 10, 17, 17, 20], 8, 0, 0));
