addStringNum = (str1, str2) => {
  let carry = "0";
  let str = "";
  if (str1.length < str2.length) {
    str = str1.padStart(str2.length, "0");
    str1 = str2;
    str2 = str;
    str = "";
    let i = str1.length - 1;
    let sum = 0;
    while (i >= 0) {
      //adding numbers
      if (str2.length > i) {
        sum = Number(str1[i]) + Number(str2[i]) + Number(carry);
      } else {
        sum = Number(str1[i]) + Number(carry);
      }
      //Taking carry forward number
      if (sum > 9 && i > 0) {
        carry = sum.toString()[0];
        str = sum.toString()[1] + str;
      } else {
        str = sum.toString() + str;
      }
      i--;
    }
  }

  console.log(str);
};

addStringNum("123", "999999999999999999");
