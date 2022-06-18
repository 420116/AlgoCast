// Given an unsorted array Arr of size N of positive integers.
// One number 'A' from set {1, 2, …N}
// is missing and one number 'B' occurs twice in array. Find these two numbers.
// Example 1:
// Input:
// N = 2
// Arr[] = {2, 2}
// Output: 2 1
// Explanation: Repeating number is 2 and
// smallest positive missing number is 1.

const getMissRepeat = (arr, n) => {
  let map = {};

  for (let i = 0; i < n; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
  }
  let missing = 1;
  let repeating = 1;
  for (let i = 1; i < n + 1; i++) {
    if (!map[i]) {
      missing = i;
    }
    if (map[i] && map[i] > 1) {
      repeating = arr[i - 1];
    }
  }
  return [missing, repeating];
};

console.log(getMissRepeat([2, 2], 2));
console.log(getMissRepeat([1, 3, 3], 3));
