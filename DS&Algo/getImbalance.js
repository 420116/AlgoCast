const getCountImbalance = (arr) => {
  let count = 0;
  let tempArr = [];
  let max = 0;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    mapArr = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      tempArr.push(arr[j]);
      if (mapArr.length > 1) {
        max = Math.max(...mapArr);
        min = Math.min(...mapArr);
        if (max - min > 1) {
          count++;
        }
      }
    }
    mapArr = [];
  }
  console.log(count);
};

getCountImbalance([1, 2, 3, 4]);
