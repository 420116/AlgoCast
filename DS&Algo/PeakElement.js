// An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
// Given an array arr[] of size N, find the index of any one of its peak elements.
// Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0.

// Input:
// N = 3, arr[] = {1,2,3}
// Output: 2
// Explanation: index 2 is 3.
// It is the peak element as it is
// greater than its neighbour 2.

const getPeakElement = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      count = i;
      console.log(count);
      return count;
    }

    if (i === arr.length - 1 && arr[i - 1] < arr[i]) {
      count = i;
      console.log(count, 1);
      return count;
    }
  }
  console.log(count);
  return count;
};

getPeakElement([
  10, 13, 16, 14, 11, 2, 10, 19, 6, 15, 12, 11, 12, 10, 14, 16, 9, 1, 2,
]);
