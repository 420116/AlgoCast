// Given a string, eliminate all “b” and “ac” in the string,
// replace them in-place and iterate over the string once.

const removeChar = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== "b" &&
      !(str[i] === "a" && str[i + 1] === "c") &&
      !(str[i] === "c" && str[i - 1] === "a")
    ) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
};

removeChar("aacbacc");
