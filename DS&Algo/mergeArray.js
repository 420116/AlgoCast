// Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order.
// Merge them in sorted order without using any extra space.
// Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

// Example 1:
// Input:
// n = 4, arr1[] = [1 3 5 7]
// m = 5, arr2[] = [0 2 6 8 9]
// Output:
// arr1[] = [0 1 2 3]
// arr2[] = [5 6 7 8 9]

// [1 3 5 7] [0 2 6 8 9]
// [0,1,2,3][5,7,6,8,9]

const mergeArray = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    swap(arr1, arr2, 0, arr2.length, i);
  }

  return [arr1, arr2];
};

const swap = (arr1, arr2, start, end, i) => {
  if (start === arr2.length - 1 || end === 0 || start > end) {
    return;
  }
  console.log(start, end, arr1[i]);
  let mid = Math.floor(start + end / 2);
  if (arr2[mid] > arr1[i]) {
    return swap(arr1, arr2, start, mid - 1, i);
  } else if (arr2[mid] < arr1[i]) {
    return swap(arr1, arr2, mid + 1, end, i);
  }
};

let arr2 = [6, 9, 13, 15, 20, 25, 29, 46];

console.log(mergeArray([1, 35], [6, 9, 13, 15, 20, 25, 29, 46]));
