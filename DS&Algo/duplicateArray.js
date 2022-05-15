const duplicate = (a, n) => {
  let results = [];
  let resultsObj = {};
  for (let i = 0; i < a.length; i++) {
    if (!resultsObj[a[i]]) {
      resultsObj[a[i]] = 1;
    } else {
      resultsObj[a[i]] += 1;
      if (results.indexOf(a[i]) === -1) {
        results.push(a[i]);
      }
    }
  }
  console.log(results);
  return results;
};

duplicate([
  13, 9, 25, 1, 1, 0, 22, 13, 22, 20, 3, 8, 11, 25, 10, 3, 15, 11, 19, 20, 2, 4,
  25, 14, 23, 14,
]);
