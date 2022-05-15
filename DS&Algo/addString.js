addStringNum = (str1, str2) => {
  let carry = "0";
  let str = "";
  if (str1.length < str2.length) {
    str = str1.padStart(str2.length, "0");
    str1 = str2;
    str2 = str;
    str = "";
  } else {
    str2 = str2.padStart(str1.length, "0");
  }

  let i = str1.length - 1;
  let sum = 0;
  while (i >= 0) {
    //adding numbers
    if (str2.length > i) {
      sum = Number(str1[i]) + Number(str2[i]) + Number(carry);
    } else {
      sum = Number(str1[i]) + Number(carry);
    }
    //console.log(carry, str1[i], str2[i]);
    //Reset to zero
    carry = "0";
    //Taking carry forward number
    if (sum > 9 && i > 0) {
      carry = sum.toString()[0];
      str = sum.toString()[1] + str;
    } else {
      str = sum.toString() + str;
    }
    i--;
  }

  console.log(str);
};

addStringNum("7777555511111111", "3332222221111");
