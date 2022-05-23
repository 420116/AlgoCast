const solution = (a) => {
  let arr = a;
  let newArr = [];
  arr.forEach((element) => {
    element = "" + element;
    newArr.push(
      element
        .split("")
        .sort(function (a, b) {
          return b - a;
        })
        .join("")
    );
  });
  console.log(newArr);
};

solution([25, 35, 872, 228, 53, 278, 872]);


function solution(a) {
    var input = [];
    a.forEach((element) => {
     input.push("" + element);
   });
 var words = input.split(", ");
 
 let count =0;
 for (var i = 0; i < words.length; i++) {
   var word = words[i];
   var alphabetical = word.split("").sort().join("");
   for (var j = 0; j < words.length; j++) {
 
     if (i === j) {
       continue;
     }
 
     var other = words[j];
     if (alphabetical === other.split("").sort().join("")) {
       if(i<j){
         count+=1;
       }
     }
   }
   
 
  }
  
  return count;
 }