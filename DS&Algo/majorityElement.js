// Given an array A of N elements.
// Find the majority element in the array.
// A majority element in an array A of size N is an element that appears more than N/2 times in the array.

// Input:
// N = 5
// A[] = [3,1,3,3,2]
// Output:
// 3

const getMajority = (arr, size) => {
  let map = {};
  for (let i = 0; i < size; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
    if (size / 2 < map[arr[i]]) {
      return arr[i];
    }
  }

  return -1;
};
