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
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let sum = 0;
  let total = 0;
  while (leftPointer <= rightPointer) {
    if (rightMax >= leftMax) {
      total = leftMax - arr[leftPointer];
      leftMax = Math.max(leftMax, arr[leftPointer]);
      leftPointer++;
    } else {
      total = rightMax - arr[rightPointer];
      rightMax = Math.max(rightMax, arr[rightPointer]);
      rightPointer--;
    }

    if (total > 0) {
      sum = sum + total;
    }
    total = 0;
  }

  return sum;
};

//console.log(getTRW([3, 0, 0, 2, 0, 4]));
console.log(getTRW([6, 1, 8, 9, 2, 7, 9, 5, 4, 3]));
