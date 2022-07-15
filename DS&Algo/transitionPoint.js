// Given a sorted array containing only 0s and 1s,
// find the transition point.

// Example 1:

// Input:
// N = 5
// arr[] = {0,0,0,1,1}
// Output: 3
// Explanation: index 3 is the transition
// point where 1 begins.

const transitionPoint = (arr, n) => {
  //code here
  let initial = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }

  return -1;
};
