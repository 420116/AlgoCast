const getCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    //for single char
    count += checkCount(str, i, i);
    count += checkCount(str, i, i + 1);
  }
  return count;
};

const checkCount = (str, leftPointer, rightPointer) => {
  let count = 0;
  while (leftPointer >= 0 && rightPointer < str.length) {
    let newStr = str.substring(leftPointer, rightPointer + 1);
    if (isPalindrome(newStr)) {
      console.log(newStr);
      count++;
    }
    leftPointer--;
    rightPointer++;
  }
  return count;
};

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

//console.log(getCount("abccba"));
console.log(getCount("aabe"));
