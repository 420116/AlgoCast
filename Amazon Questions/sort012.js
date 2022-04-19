const sort012 = (arr, N) => {
  let resultsObj = { 0: [], 1: [], 2: [] };
  for (let i = 0; i < arr.length; i++) {
    resultsObj[arr[i]].push(arr[i]);
  }

  console.log([...resultsObj[0], ...resultsObj[1], ...resultsObj[2]]);
};

sort012([0, 2, 1, 2, 0]);
