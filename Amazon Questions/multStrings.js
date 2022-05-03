// Multiple two string using reverse array

// 1  2  3  4  *  4  3  2  1
// -------------------------
//                1  2  3  4
//             1  4  6  8
//          3  6  9 12
//       4  8 12 16
// -------------------------
//       5  3  2  2  1  1  4

const mult = (num1, num2) => {
  if (num2 === "0" || num2 === "0") {
    return 0;
  }

  let res = new Array(num1.length + num2.length + 1);
  res.fill(0);
  console.log(num1, num2);
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
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

  console.log(res);
};

mult("10", "11");
