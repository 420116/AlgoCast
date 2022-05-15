// Given a string which is basically a
// sentence without spaces between words.
// However the first letter of every word is in uppercase.
// You need to print this sentence after following amendments:
// (i) Put a single space between these words
// (ii) Convert the uppercase letters to lowercase.
// Note: The first character of the string can be both uppercase/lowercase.

const amendSent = (str) => {
  let newStr = 0;
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr = str[i].toLowerCase();
    } else if (str[i].toUpperCase() === str[i]) {
      newStr = newStr + " " + str[i].toLowerCase();
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
};

let s = "BruceWayneIsBatman";

console.log(amendSent(s));
