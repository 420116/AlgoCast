// get the permutation of [1,2,3];
//Output --> [[1,2,3],[2,3,1],[1,3,2],[3,2,1],[2,1,3],[3,1,2]];

// const getPermut = (arr, results) => {
//   if (arr.length === 0) {
//     return [...results];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let n = arr.shift();
//     let perms = getPermut(arr, results);
//     //console.log(n);
//     perms.forEach((item) => {
//       item.push(n);
//       //results.push(item);
//       console.log(item, 1);
//     });
//     console.log(results);
//     results = [...perms, ...results];
//     arr.unshift(n);
//   }
//   return [...results];
// };

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
  return arr;
};

const permut = (arr, start, end) => {
  if (start === end) {
    console.log(arr);
  } else {
    for (let i = 0; i < arr.length; i++) {
      swap(arr, start, i);
      permut(arr, start + 1, end);
      swap(arr, i, start);
    }
  }
};

console.log(permut([1, 2, 3], 0, 2));
