const anagram = (a, b) => {
  let mapA = {};
  let mapB = {};
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < b.length; i++) {
    if (!mapA[a[i]]) {
      mapA[a[i]] = 1;
    } else {
      mapA[a[i]] += 1;
    }
    if (!mapB[b[i]]) {
      mapB[b[i]] = 1;
    } else {
      mapB[b[i]] += 1;
    }
  }
  let arr = Object.keys(mapA);
  for (let i = 0; i < arr.length; i++) {
    if (mapA[arr[i]] !== mapB[arr[i]]) {
      return false;
    }
  }
  return true;
};
