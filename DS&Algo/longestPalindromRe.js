const rearrange = (str) => {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]] += 1;
    }
  }
  let count = 0;
  let arr = Object.keys(map);
  let isOdd = false;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) {
      isOdd = true;
    } else {
      if (map[arr[i]] % 2 === 0) {
        count = count + 2;
      } else if (map[arr[i]] > 2) {
        let num = map[arr[i]] - (map[arr[i]] % 2);
        count = count + num;
      }
    }
  }

  if (isOdd) {
    count = count + 1;
  }
};
