function subArraySum(arr, n, s) {
  let sum = 0;
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    if (sum === s) {
      return [i + 1, i + 1];
    }
    if (subArray.length > 0) {
      return subArray;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (sum > s) {
        break;
      }
      sum = sum + arr[j];
      if (sum === s) {
        subArray.push(i + 1);
        subArray.push(j + 1);
      }
    }
  }

  console.log(subArray);
}

const subArray2 = (arr, sum) => {
  let pointer = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    while (sum < currentSum) {
      currentSum = currentSum - arr[pointer];
      //console.log(currentSum, sum);
      pointer += 1;
    }
    if (currentSum === sum) {
      console.log(pointer, i);
      return currentSum;
    }
  }
  return -1;
};

subArray2(
  [
    26, 144, 125, 24, 173, 62, 182, 4, 33, 106, 194, 126, 32, 93, 143, 23, 87,
    65,
  ],
  528
);

//subArray2([1, 2, 3, 7, 10, 11], 21);
