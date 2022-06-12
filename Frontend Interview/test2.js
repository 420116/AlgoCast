const largestSecNum = (arr) => {
  let largestNum = 0;
  let seconNum = 0;
  let thirdNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      thirdNum = seconNum;
      seconNum = largestNum;
      largestNum = arr[i];
    }
  }
  console.log(largestNum, seconNum, thirdNum);
};

largestSecNum([23, 32, 3, 89, 11, 29]);
