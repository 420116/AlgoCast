// Given an array of integers, find the length of the
// longest (strictly) increasing subsequence from the given array.
// Input:
// N = 16
// A[]={0,8,4,12,2,10,6,14,1,9,5
//      13,3,11,7,15}
// Output: 6
// Explanation:Longest increasing subsequence
// 0 2 6 9 13 15, which has length 6

const getLSubs = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let results = {};
  let maxNum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    results[i] = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        results[i] = Math.max(results[i], 1 + results[j]);
      }
    }
    maxNum = Math.max(results[i], maxNum);
  }

  return maxNum;
};

getLSubs([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]); // Output 6
