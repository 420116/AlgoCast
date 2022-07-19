// Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element.
// Find the minimum number of jumps to reach the end of the array (starting from the first element).
// If an element is 0, then you cannot move through that element.

// Note: Return -1 if you can't reach the end of the array.

// Example 1:

// Input:
// N = 11
// arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3
// Explanation:
// First jump from 1st element to 2nd
// element with value 3. Now, from here
// we jump to 5th element with value 9,
// and from here we will jump to the last.

const getMinStep = (arr, n) => {
  let max = 0,
    minSteps = 0,
    cur = 0;
  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, arr[i] + i);
    if (i === cur) {
      //console.log(cur);
      cur = max;
      minSteps++;
    }
  }
  //if current not reaches the end then return -1
  if (cur < n - 1) {
    return -1;
  }
  return minSteps;
};

//console.log(getMinStep([2, 3, 1, 1, 2, 4, 2, 0, 1, 1], 10));
console.log(getMinStep([9, 10, 1, 2, 3, 4, 8, 0, 0, 0, 0, 0, 0, 0, 1], 15));
