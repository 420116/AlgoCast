const sumDivPair = (n, k, arr) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum % k === 0) {
        results.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(results);
};

sumDivPair(6, 5, [1, 2, 3, 4, 5, 6]);
