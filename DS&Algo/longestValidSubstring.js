// Given a string S consisting only of opening and closing parenthesis
// 'ie '('  and ')',
// find out the length of the longest valid(well-formed) parentheses substring.
// NOTE: Length of the smallest valid substring ( ) is 2.

getValidSub = (str) => {
  let start = "(";
  let end = ")";
  let stack = [-1];
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === start) {
      stack.push(i);
    }
    if (str[i] === end) {
      if (stack.length > 0) {
        stack.pop();
      }
      if (stack.length > 0) {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  console.log(maxLength);
};

//getValidSub("()(())");
//getValidSub("))()(()");
getValidSub("))(()((())");
