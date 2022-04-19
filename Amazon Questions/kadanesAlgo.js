// Given an array Arr[] of N integers.
// Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

const subArray = (arr) => {
  let sum = arr[0];
  let maxSum = arr[0];
  let initial = 0;
  let end = arr.length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i] + sum) {
      sum = arr[i];
      initial = i;
    } else {
      sum = arr[i] + sum;
    }

    if (maxSum < sum) {
      maxSum = sum;
      end = i;
    }
  }
  //console.log(initial,end);
  return maxSum;
};

subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
