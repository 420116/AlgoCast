const formatString = (s) => {
  let arr = [];
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], newStr);
    if (s[i] !== " " && s[i] !== "-") {
      newStr = newStr + s[i];
    }
    if (newStr.length === 3 || s.length - 1 === i) {
      arr.push(newStr);
      newStr = "";
    }
  }
  let length = arr.length;
  if (arr[length - 1].length < 2) {
    let secondLastPos = arr[length - 2];
    let lastPos = arr[length - 1];
    arr[length - 2] = secondLastPos.slice(0, 2);
    arr[length - 1] = a.slice(2) + lastPos;
  }

  console.log(arr.join(" "));
};

formatString("00-44 48 5555 8361");
