// Inversion Count: For an array, inversion count indicates
// how far (or close) the array is from being sorted.
// If array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum.
// Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
// Example 1:
// Input: N = 5, arr[] = {2, 4, 1, 3, 5}
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5
// has three inversions (2, 1), (4, 1), (4, 3).

const split = (arr, start, end, invCount) => {
  if (end - start < 1) {
    return invCount;
  } else {
    let mid = parseInt((start + end) / 2);
    invCount =
      split(arr, start, mid, invCount) +
      split(arr, mid + 1, end, invCount) +
      merge(arr, mid, start, end, invCount);
    return invCount;
  }
};

const merge = (arr, mid, start, end, invCount) => {
  let leftPointer = 0;
  let rightPointer = 0;
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);
  for (let i = start; i <= end; i++) {
    if (leftPointer === left.length) {
      while (rightPointer < right.length) {
        arr[i] = right[rightPointer];
        rightPointer++;
        i++;
      }
      return invCount;
    }

    if (rightPointer === right.length) {
      while (leftPointer < left.length) {
        arr[i] = left[leftPointer];
        leftPointer++;
        i++;
      }
      return invCount;
    }

    if (left[leftPointer] <= right[rightPointer]) {
      arr[i] = left[leftPointer];
      leftPointer++;
    } else {
      invCount = invCount + (left.length - leftPointer);
      arr[i] = right[rightPointer];
      rightPointer++;
    }
  }

  return invCount;
};

//let arr = [7, 9, 12, 6, 8, 10];
let arr = [2, 4, 1, 3, 5];
let arr1 = [];

console.log(split(arr, 0, 4, 0), arr);
