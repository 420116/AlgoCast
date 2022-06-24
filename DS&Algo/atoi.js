// Your task  is to implement the function atoi.
// The function takes a string(str) as argument and converts it to an integer and returns it.

// Note: You are not allowed to use inbuilt function.
// Example 1:
// Input:
// str = 123
// Output: 123
// Example 2:

// Input:
// str = 21a
// Output: -1
// Explanation: Output is -1 as all
// characters are not digit only.

const atoi = (s) => {
  //code here
  let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let res = "";
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "-" && count === 1) {
      count = -1 * count;
      continue;
    }
    if (!arr.includes(s[i])) {
      return -1;
    }
    res += s[i];
  }
  return count * res;
};
