// get the permutation of [1,2,3];
//Output --> [[1,2,3],[2,3,1],[1,3,2],[3,2,1],[2,1,3],[3,1,2]];

const getPermut = (arr, results) => {
  if (arr.length === 0) {
    return [...results];
  }

  for (let i = 0; i < arr.length; i++) {
    let n = arr.shift();
    let perms = getPermut(arr, results);
    for (let perm in perms) {
      perm.push(n);
    }
    results.push(perms);
    arr.push(n);
  }
};

console.log(getPermut([1, 2, 3], []));
