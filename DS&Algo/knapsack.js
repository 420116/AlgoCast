


const getKnapSack = () => {
  if (j < w[i]) {
    T[i][j] = T[i - 1][j];
  } else {
    T[i][j] = Math.max(val[i] + T[i - 1][j - w[i]]);
  }
};
