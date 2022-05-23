//To increase efficiency amazon shipping team will group packages being shipped according to weight
// They will merge a lighter package to heavy package, which eliminates to need for shipment
// consider n pacakges where arr[i] represent package at ith position
// you can combine(sum) ith and i+1 th package if  arr[i]<arr[i+1] and discard ith package
// Find the maximum possible weight of a package that can be acheived after merging operations
const packageWeight = (arr) => {
  //console.log(findMaxSum(arr, true));
  return findMaxSum(arr, true);
};

const findMaxSum = (arr, reset) => {
  let max = 0;
  let start = 0;
  let end = 0;
  if (!reset) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i + 1] > arr[i]) {
      if (arr[i + 1] + arr[i] > max) {
        max = arr[i + 1] + arr[i];
        start = i;
        end = i + 1;
      }
    }
  }

  if (start === 0 && end === 0) {
    reset = false;
    return findMaxSum(arr, reset);
  }
  arr[end] = max;
  let newArray = arr.filter((item, index) => start !== index);
  return findMaxSum(newArray, reset);
};

packageWeight([2, 9, 10, 3, 7]); //[21,10]
packageWeight([20, 13, 8, 9]); //[50]
