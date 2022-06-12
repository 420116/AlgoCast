const getCount = (arr, num) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
  }

  console.log(map[num]);
};

let arr = [1, 2, 4, 5, 1, 2, 2, 2, 2, 2, 2, 2];

getCount(arr, 2);
