const minEditDist = (str1, str2) => {
  let matrix = [];
  let arr = [0];
  for (let i = 0; i < str1.length; i++) {
    arr.push(i + 1);
  }
  matrix.push(arr);
  for (let j = 0; j < str2.length; j++) {
    matrix.push([j + 1]);
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) +
          1;
      }
    }
  }
  return matrix[matrix.length - 1][matrix[0].length - 1];
};

console.log(minEditDist("march", "cart"));
