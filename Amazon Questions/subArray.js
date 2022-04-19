function subArraySum(arr, n, s) {
  let sum = 0;
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    if(sum === s){
        return [i+1,i+1];
    }
    if (subArray.length > 0) {
      return subArray;
    }
    for (let j = i+1; j < arr.length; j++) {
      if (sum > s) {
        break;
      }
      sum = sum + arr[j];
      if (sum === s) {
        subArray.push(i+1);
        subArray.push(j+1);
      }
    }
  }

  console.log(subArray);
}

subArraySum([26, 144, 125, 24, 173, 62, 182, 4, 33, 106, 194, 126, 32, 93, 143, 23, 87, 65 ], 100, 528);
