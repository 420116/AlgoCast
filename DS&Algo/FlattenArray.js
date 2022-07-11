// Given an array consisting many inner arrays, flatten the array into
// one: example: input: [[6,4,7,[9,5,4,[2,4,8]]],[2,2,7],[9,0,7,[9,3,1,8,5]]]
// output: [6,4,7,9,5,4,2,4,8,2,2,7,9,0,7,9,3,1,8,5]

const flatArray = (arr, res) => {
  if (arr.length === 0) {
    return res;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length && arr[i].length > 0) {
      flatArray(arr[i], res);
      continue;
    }
    res.push(arr[i]);
  }
  return res;
};

console.log(
  flatArray(
    [
      [6, 4, 7, [9, 5, 4, [2, 4, 8]]],
      [2, 2, 7],
      [9, 0, 7, [9, 3, 1, 8, 5]],
    ],
    []
  )
);
