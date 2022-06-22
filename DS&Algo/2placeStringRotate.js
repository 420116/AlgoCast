// Given two strings a and b.
// The task is to find
// if the string 'b' can be obtained by rotating another string 'a' by exactly 2 places.

// Example 1:
// Input:
// a = amazon
// b = azonam
// Output: 1
// Explanation: amazon can be rotated anti
// clockwise by two places, which will make
// it as azonam.

const isRotated = (str1, str2) => {
  // code here
  if (str1.length !== str2.length) {
    return 0;
  }

  let n = str1.length;
  let left = str1.substring(2, n + 1) + str1.substring(0, 2);
  let right = str1.substring(n - 2, n + 1) + str1.substring(0, n - 2);
  // return 1;
  if (left === str2 || right === str2) {
    return 1;
  }
  //console.log(left,right);
  return 0;
};

isRotated("fsbcnuvqhffbsaqxwp", "wpfsbcnuvqhffbsaqx");
