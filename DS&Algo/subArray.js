// Given an unsorted array A of size N that contains only non-negative integers,
// find a continuous sub-array which adds to a given number S.
// In case of multiple subarrays, return the subarray which comes first on moving from left to right.
// Example 1:
// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.

const subArraySum = (arr, s) => {
  let leftPointer = 0;
  let currPointer = 0;
  let sum = 0;
  while (currPointer < arr.length) {
    sum = sum + arr[currPointer];
    while (sum > s) {
      sum = sum - arr[leftPointer];
      leftPointer++;
    }
    if (sum === s) {
      return [leftPointer + 1, currPointer + 1];
    }
    currPointer++;
  }
  return [-1];
};

console.log(
  subArraySum(
    [
      26, 144, 125, 24, 173, 62, 182, 4, 33, 106, 194, 126, 32, 93, 143, 23, 87,
      65,
    ],
    528
  )
);

//subArray2([1, 2, 3, 7, 10, 11], 21);
