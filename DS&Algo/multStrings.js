// Multiple two string using reverse array

// 1  2  3  4  *  4  3  2  1
// -------------------------
//                1  2  3  4
//             1  4  6  8
//          3  6  9 12
//       4  8 12 16
// -------------------------
//       5  3  2  2  1  1  4

const mult = (s1, s2) => {
  if (num2 === "0" || num2 === "0") {
    return 0;
  }

  //code here
  let num1 = s1;
  let num2 = s2;
  let count = 1;
  if (s1 === "0" || s2 === "0") {
    return 0;
  }

  let res = new Array(num1.length + num2.length + 1);
  res.fill(0);

  num1 =
    s1.length > s2.length
      ? s1.split("").reverse().join("")
      : s2.split("").reverse().join("");
  num2 =
    s1.length > s2.length
      ? s2.split("").reverse().join("")
      : s1.split("").reverse().join("");
  // console.log(num1, num2);
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (num1[i] === "-" || num2[j] === "-") {
        continue;
      }
      res[i + j] += num1[i] * num2[j];
      if (res[i + j] > 9) {
        if (!res[i + j + 1]) {
          res[i + j + 1] = 0;
        }
        res[i + j + 1] += Math.floor(res[i + j] / 10);
        res[i + j] %= 10;
      }
    }
  }

  while (res.length > 1 && res[res.length - 1] === 0) res.pop();
  res = res.reverse().join("");
  if (parseInt(s1) < 0) {
    count = -1 * count;
  }

  if (parseInt(s2) < 0) {
    count = -1 * count;
  }

  if (count < 0) {
    return "-" + res;
  }

  return res;
};

mult("10", "11");
