function solve24(numStr) {
  var strArray = numStr.split("");
  var intArray = [];
  strArray.forEach(function (num) {
    //add all the numbers
    intArray.push(parseInt(num, 10));
  });
  //Sort all the array
  intArray.sort();

  //add
  if (add(intArray)) {
    return (
      strArray[0] + "+" + strArray[1] + "+" + strArray[2] + "+" + strArray[3]
    );
  }
  //multiple
  if (multi(intArray)) {
    console.log(intArray[0] * intArray[1] * intArray[2] * intArray[3]);
    return (
      strArray[0] + "*" + strArray[1] + "*" + strArray[2] + "*" + strArray[3]
    );
  }

  //else
}

function add(aInput) {
  return aInput[0] + aInput[1] + aInput[2] + aInput[3] === 24;
}

function multi(aInput) {
  return aInput[0] * aInput[1] * aInput[2] * aInput[3] === 24;
}

//function

solve24("1234");
