//GeeksForGeek
// Given an array A of n positive numbers. The task is to find the first Equilibium Point in the array.
// Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
// A[] = {1,3,5,2,2}
// Output: 3
// Explanation: For second test case
// equilibrium point is at position 3
// as elements before it (1+3) =
// elements after it (2+2).

const getEquiPoint = (arr) => {
  let sum = 0;
  let leftSum = 0;
  if (arr.length === 0) {
    return 1;
  }
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    sum = sum - arr[i];
    if (sum - leftSum === 0) {
      return i + 1;
    }
    leftSum = leftSum + arr[i];
  }

  return -1;
};

getEquiPoint([1, 3, 5, 2, 2]);
