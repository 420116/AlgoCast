const subArray = (s, d, m) => {
  let arr = s;
  let comArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let combArray = [];
    for (let j = i; j < m + i; j++) {
      //Reset
      sum = sum + arr[j];
      combArray.push(arr[j]);
      if (sum > d) {
        break;
      }
      if (sum === d && combArray.length === m) {
        comArr.push(combArray);
      }
    }
  }
  console.log(comArr, comArr.length);
};

subArray([1, 2, 1, 3, 2], 3, 2);
