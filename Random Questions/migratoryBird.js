const migrateBird = (arr) => {
  let resultObj = {};
  let count = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    }
    if (arr[i] !== arr[i + 1]) {
      if (!resultObj[count]) {
        resultObj[count] = [arr[i]];
      } else {
        resultObj[count].push(arr[i]);
      }
      count = 0;
    }
  }
  let key = Object.keys(resultObj).length-1;
  console.log(key, Object.values(resultObj)[key][0]);
};
migrateBird([1, 4, 4, 4, 5, 3]);
//migrateBird([1, 2, 3, 4, 5, 4, 3,2,1, 3, 4]);


//   for (let i = 0; i < arr.length; i++) {
//     if (!resultObj[arr[i]]) {
//       resultObj[arr[i]] = 1;
//     } else {
//       resultObj[arr[i]] += 1;
//     }
//   }
