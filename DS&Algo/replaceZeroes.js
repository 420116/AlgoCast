const convertFive = (num) => {
  // code here
  let res = "";
  for (let i = 0; i < num.length; i++) {
    //console.log(1);
    if (num[i] === "0") {
      res = res + 5;
      continue;
    }
    res = res + num[i];
  }
  return res;
};

console.log(convertFive("1002"));
