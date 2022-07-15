// You are given an array arr[] of N integers including 0.
// The task is to find the smallest positive number missing from the array.

// Example 1:

// Input:
// N = 5
// arr[] = {1,2,3,4,5}
// Output: 6
// Explanation: Smallest positive missing
// number is 6.

const missingNumber = (arr, n) => {
  //your code here
  let count = 1;
  // arr.sort((a,b)=> {return a-b});
  let map = {};
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      if (!map[arr[i]]) {
        map[arr[i]] = 1;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!map[i]) {
      return i;
    }
  }
  //return count;
};
