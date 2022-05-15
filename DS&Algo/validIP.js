// Write a program to Validate an IPv4 Address.
// According to Wikipedia, IPv4 addresses are canonically represented in dot-decimal notation,
// which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1 .
// A valid IPv4 Address is of the form x1.x2.x3.x4 where 0 <= (x1, x2, x3, x4) <= 255.
// Thus, we can write the generalized form of an IPv4 address as (0-255).(0-255).(0-255).(0-255).

//code here
const checkIP = () => {
  let arr = s.split(".");
  if (arr.length !== 4) {
    return 0;
  }
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i]);
    let isleadingZero = arr[i].length > 1 && arr[i][0] === "0";
    if (!isleadingZero && arr[i].length <= 3 && num >= 0 && num <= 255) {
      ans = 1;
    } else {
      return 0;
    }
  }
  return ans;
};

checkIP("222.111.111.111");
