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

const mergeArray = (arr1, arr2, N) => {
  //your code here
  for (let i = 0; i < N; i++) {
    if (arr1[i] >= arr2[0]) {
      let temp = arr1.pop();
      let first = arr1.slice(0, i);
      let second = arr1.slice(i, N);
      first.push(arr2.shift());
      arr1 = [...first, ...second];
      arr2.push(temp);
    }
    //arr2.sort();
  }
  //mlog(m)
  arr2.sort((a, b) => {
    return a - b;
  });
  return [...arr1, ...arr2];
};

console.log(mergeArray([1, 35], [6, 9, 13, 15, 20, 25, 29, 46], 2));
