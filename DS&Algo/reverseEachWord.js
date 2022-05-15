// Given a String. Reverse each word in
// it where the words are separated by dots.
// Example 1:
// Input:
let S = "i.like.this.program.very.much";
// Output:
// i.ekil.siht.margorp.yrev.hcum

const rev = (s) => {
  let newStr = "";
  let revStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ".") {
      revStr = revStr + newStr + ".";
      newStr = "";
    } else {
      newStr = s[i] + newStr;
    }
  }
  //add final word without dot
  revStr = revStr + newStr;
  return revStr;
};
