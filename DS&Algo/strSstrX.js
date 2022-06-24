// Your task is to implement the function strstr.
// The function takes two strings as arguments (s,x)
// and  locates the occurrence of the string x in the string s.
// The function returns and integer denoting the first occurrence of the string x in s (0 based indexing).

// Note: You are not allowed to use inbuilt function.

// Example 1:

// Input:
// s = GeeksForGeeks, x = Fr
// Output: -1
// Explanation: Fr is not present in the
// string GeeksForGeeks as substring.

const strstr = (s, x) => {
  // code here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === x[count]) {
      let index = i;
      while (count < x.length) {
        if (s[i] !== x[count]) {
          i = index + 1;
          count = 0;
          break;
        }
        i++;
        count++;
      }
      if (count === length) {
        return index;
      }
    }
  }
  return -1;
};
