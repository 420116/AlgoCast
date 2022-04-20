// Given a string S consisting only of opening and closing parenthesis
// 'ie '('  and ')',
// find out the length of the longest valid(well-formed) parentheses substring.
// NOTE: Length of the smallest valid substring ( ) is 2.

getValidSub = (str) => {
  let start = "(";
  let end = ")";
  let count = 0;
  let maxLength = 0;
  let isOpen = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === end) {
      maxLength = Math.max(maxLength, count);
      isOpen = false;
    }
    if (str[i] === start) {
      isOpen = !isOpen;
    }
    if (isOpen) {
      count = count + 1;
    }
  }
  return maxLength;
};

getValidSub("()(())");
