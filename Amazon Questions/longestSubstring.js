const getSubstring = (str) => {
  let arr = [];
  let newStr = "";
  let tempStr = "";
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (!newStr.includes(str[i])) {
      newStr = newStr + str[i];
    } else {
      if (!arr.includes(newStr)) {
        arr.push(newStr);
        maxLength = Math.max(newStr.length, maxLength);
      }
      counter = newStr.length - 1;
      while (counter >= 0) {
        if (newStr[counter] === str[i]) {
          newStr = tempStr;
          tempStr = "";
          break;
        }
        tempStr = newStr[counter] + tempStr;
        counter--;
      }
      newStr = newStr + str[i];
    }
  }
  if (newStr.length > 0) {
    arr.push(newStr);
    maxLength = Math.max(newStr.length, maxLength);
  }
  console.log(arr, maxLength);
};

getSubstring("geeksforgeeks");
