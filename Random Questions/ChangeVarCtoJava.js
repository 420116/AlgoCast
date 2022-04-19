const changeConv = (sString) => {
  let newString = "";
  let isUpperCase = false;
  //
  if (sString.indexOf("_") !== -1) {
    for (let i = 0; i < sString.length; i++) {
      let charAt = sString[i];
      if (isUpperCase) {
        charAt = sString[i].toUpperCase();
        isUpperCase = false;
      }
      if (sString[i] === "_") {
        isUpperCase = true;
      } else {
        newString = newString + charAt;
      }
      
    }
  } else {
    newString = sString[0];
    for (let i = 1; i < sString.length; i++) {
        let charAt = sString[i];
        if(sString[i].toUpperCase() === sString[i]){
            charAt = "_"+sString[i].toLowerCase();
        }
        newString = newString + charAt;
    }
  }
  console.log(newString);
  return newString;
};


//changeConv("This_is_it");
changeConv("ThisIsIt");