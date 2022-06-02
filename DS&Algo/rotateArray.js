// Given an unsorted array arr[] of size N.
// Rotate the array to the left (counter-clockwise direction)
// by D steps, where D is a positive integer.

// Example 1:
// Input:
// N = 5, D = 2
// arr[] = [1,2,3,4,5]
// Output: 3 4 5 1 2
// Explanation: 1 2 3 4 5  when rotated by 2 elements, it becomes 3 4 5 1 2.

function rotateArray(arr, d, n) {
  for (let i = 0; i < d; i++) {
    let element = arr[0];
    arr = arr.slice(1, n);
    arr.push(element);
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2, 5));
