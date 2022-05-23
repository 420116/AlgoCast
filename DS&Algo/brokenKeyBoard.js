const solution = (text, letters) => {
  let arr = text.split(" ");
  let count = 0;
  let specialChars = [
    "+",
    "-",
    "&&",
    "||",
    "!",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "^",
    "~",
    "*",
    "?",
    ":",
    ",",
    "=",
  ];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let match = true;
  console.log(arr);
  arr.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (
        specialChars.includes(element[i].toLowerCase()) ||
        numbers.includes(element[i].toLowerCase())
      ) {
        continue;
      }

      if (!letters.includes(element[i].toLowerCase())) {
        match = false;
        break;
      }
    }
    if (match) {
      count += 1;
    }
    match = true;
  });

  return count;
};

console.log(solution("a + b = ab", []));
