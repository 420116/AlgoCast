function fizzBuzz() {
    var tempArray = [];
    var count = 1;
    for(var i=0;i<100;i++){
      if(count%3 === 0 && count%5===0){
          tempArray[i]= "FizzBuzz";
      }else if(count%3===0){
       tempArray[i]= "Fizz";
      }
      else if(count%5===0){
        tempArray[i] = "Buzz";
      }
      else{
        tempArray[i]=count;
        }
      count = count +1;
    }
    console.log(tempArray);
    return tempArray;
  }
  
  fizzBuzz();