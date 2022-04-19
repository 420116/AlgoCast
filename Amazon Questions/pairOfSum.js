const getNum = (arr, k) => {
  //code here
  let count = 0;
  let n = arr.length;
  let hasMap = {};
  for (let i = 0; i < n; i++) {
    if (!hasMap[arr[i]]) {
      hasMap[arr[i]] = 1;
    } else {
      hasMap[arr[i]] += 1;
    }
  }
  let sum = 0;
  for (let j = 0; j < n; j++) {
    sum = k - arr[j];
    if (hasMap[sum]) {
      console.log(sum);
      count = count + hasMap[sum];
      if (arr[j] === sum) {
        count = count - 1;
      }
    }
  }

  console.log(count / 2);
};

getNum([1, 1, 1, 1], 2);
