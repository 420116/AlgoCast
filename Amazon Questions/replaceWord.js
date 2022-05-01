const replace = (str, newW, oldW) => {
  let arr = [];
  let l = 2;
  let result = "";
  let subStr = "";
  for (let i = 0; i < str.length; i++) {
    subStr = str.substring(i, i + l);
    //console.log(subStr);
    if (subStr === oldW) {
      result = result + newW;
      i = i + l - 1;
      subStr = "";
    } else {
      result = result + str[i];
    }
  }
  console.log(result);
};

replace("xxforxx xx for xx", "geeks", "xx");
