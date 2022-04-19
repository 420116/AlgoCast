const MissingNumber = (array, n) => {
  let sumOfAvailable = 0;
  let sumofKeys = 0;
  for (let i = 0; i < n; i++) {
    if (array[i] !== undefined) {
      sumOfAvailable = sumOfAvailable + array[i];
    }
    sumofKeys = sumofKeys + (i + 1);
  }

  console.log(sumofKeys-sumOfAvailable,);
};

//MissingNumber([1], 2);
MissingNumber([1, 2, 3, 5], 5);
