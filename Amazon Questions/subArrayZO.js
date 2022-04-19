const subArray = (arr) => {
  let count = 0;
  let hasMap = {};
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count = count + 1;
    } else {
      count = count - 1;
    }
    if (!hasMap[count]) {
      hasMap[count] = i;
    } else {
      maxLen = Math.max(maxLen, i - hasMap[count]);
    }

    if (count === 0) {
      console.log(maxLen, i);
      maxLen = Math.max(maxLen, i + 1);
    }
    //console.log(hasMap);
  }
  //console.log(maxLen);
};

// subArray([
//   1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0,
//   1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1,
//   1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0,
//   1, 0, 1, 0, 0, 0, 0,
// ]);

//subArray([0,0,1,0,1,0,1,1,0,0,1,1,1]);

//subArray([0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);

//subArray([0, 1, 0, 1]);

subArray([
  0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1,
  0, 0, 1,
]);
