const validParanthesis = (str) => {
  let stack = [-1];
  let arrOpen = ["{", "[", "("];
  let arrClose = ["}", "]", ")"];
  let map = { "}": "{", "]": "[", ")": "(" };
  for (let i = 0; i < str.length; i++) {
    if (arrOpen.includes(str[i])) {
      if (stack[0] === -1) {
        stack = [];
      }
      stack.push(str[i]);
    }
    if (arrClose.includes(str[i])) {
      if (stack.length > 0 && stack[stack.length - 1] === map[str[i]]) {
        stack.pop();
      } else {
        stack.push(-1);
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
};

//validParanthesis("([)]");
validParanthesis("{}{(}))}");
