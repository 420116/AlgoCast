// Given an array arr[] of N non-negative
// integers representing the height of blocks.
// If width of each block is 1,
// compute how much water can be trapped between the blocks during the rainy season.

// Example 1:
// Input:
// N = 6
// arr[] = {3,0,0,2,0,4}
// Output:
// 10

const getTRW = (arr) => {
  let leftMax = arr[0];
  let rightMax = arr[arr.length - 1];
  let counter = 0;
  let sum = 0;
  let total = 0;
  while (counter < arr.length) {
    if (rightMax > leftMax) {
      total = leftMax - arr[counter];
      leftMax = Math.max(leftMax, arr[counter]);
    } else {
      total = total + rightMax - arr[counter];
      rightMax = Math.max(rightMax, arr[counter]);
    }

    if (total > 0) {
      sum = sum + total;
      total = 0;
    }
    counter++;
  }

  return sum;
};

console.log(getTRW([3, 0, 0, 2, 0, 4]));
