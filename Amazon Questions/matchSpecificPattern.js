const mapString = (str) => {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]] += 1;
    }
  }
  return map;
};

const matchPattern = (dic, n, pattern) => {
  let mapPattern = mapString(pattern);
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (dic[i].length === pattern.length) {
      let currentStringMap = mapString(dic[i]);
      if (
        Object.values(currentStringMap).join("") ===
        Object.values(mapPattern).join("")
      ) {
        arr.push(dic[i]);
      }
    }
  }
  console.log(arr);
  return arr;
};

matchPattern(["abb", "abc", "xyz", "xyy"], 4, "foo");
