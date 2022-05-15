const getMin = (arr, N, K) => {
  let max = 0;
  let min = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] - K > 0) {
      arr[i] = arr[i] - K;
    } else {
      arr[i] = K + arr[i];
    }
    if (i === 0) {
      max = arr[i];
      min = arr[i];
    } else {
      max = Math.max(max, arr[i]);
      min = Math.min(min, arr[i]);
    }
  }
  console.log(arr, max - min);
  return max - min;
};

getMin([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5);
