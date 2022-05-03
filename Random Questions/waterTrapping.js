// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it is able to trap after raining.
// Examples:
// Input: arr[]   = {2, 0, 2}
// Output: 2
// Input: arr[]= [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

const waterTrap = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let maxleft = arr[leftPointer];
  let maxRight = arr[rightPointer];
  let total = 0;
  let sum = 0;
  while (leftPointer < rightPointer) {
    if (maxleft <= maxRight) {
      total = maxleft - arr[leftPointer];
      if (total > 0) {
        sum = sum + total;
      }
      maxleft = Math.max(arr[leftPointer], maxleft);
      leftPointer++;
    } else {
      total = maxRight - arr[rightPointer];
      if (total > 0) {
        sum = sum + total;
      }
      maxRight = Math.max(arr[rightPointer], maxRight);
      rightPointer--;
    }
  }

  return sum;
};

console.log(waterTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6

console.log(waterTrap([2, 0, 2])); //6
