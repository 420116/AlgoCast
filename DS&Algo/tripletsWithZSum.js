// Given an array arr[] of n integers.
// Check whether it contains a triplet that sums up to zero.
// Example 1:
// Input: n = 5, arr[] = {0, -1, 2, -3, 1}
// Output: 1
// Explanation: 0, -1 and 1 forms a triplet
// with sum equal to 0.

const findTriplets = (arr, n) => {
  //your code here
  let map = {};
  for (let i = 0; i < n; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
  }
  let res = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      sum = arr[i] + arr[j];
      sum = 0 - sum;
      if (map[sum] && sum !== arr[i] && sum !== arr[j]) {
        return 1;
      }
    }
  }

  return 0;
};

//console.log(findTriplets([4, -16, 43, 4, 7, -36, 18]));
console.log(findTriplets([60, -65, 5, -21, 8, 93], 6));
