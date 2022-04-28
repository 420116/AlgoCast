// Inversion Count: For an array, inversion count indicates
// how far (or close) the array is from being sorted.
// If array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum.
// Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
// Example 1:
// Input: N = 5, arr[] = {2, 4, 1, 3, 5}
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5
// has three inversions (2, 1), (4, 1), (4, 3).

const getCount = (arr) => {};

const split = (arr, start, end, arr1, count) => {
  if (end - start < 1) {
    return;
  } else {
    let mid = parseInt((start + end) / 2);
    split(arr, start, mid, arr1, count);
    count = count + 1;
    split(arr, mid + 1, end, arr1, count);
    count = count + 1;
    merge(arr, mid, start, end, arr1, count);
    count = count + 1;
    //console.log(arr1);
  }
};

const merge = (arr, mid, start, end, arr1, count) => {
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
      return;
    }

    if (rightPointer === right.length) {
      while (leftPointer < left.length) {
        arr[i] = left[leftPointer];
        leftPointer++;
        i++;
      }
      return;
    }

    if (left[leftPointer] <= right[rightPointer]) {
      //arr1.push([right[rightPointer], left[leftPointer]]);
      arr[i] = left[leftPointer];
      leftPointer++;
    } else {
      arr1.push([left[leftPointer], right[rightPointer]]);
      //count = count + 1;
      //console.log(count);
      arr[i] = right[rightPointer];
      rightPointer++;
    }
  }
};

let arr = [2, 4, 1, 3, 5];
let arr1 = [];
let count = 0;
split(arr, 0, 4, arr1, count);
console.log(arr1, arr, count);
