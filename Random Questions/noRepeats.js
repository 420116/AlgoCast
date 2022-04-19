function noRepeats(str,aComb,count){
    var strArray = str.split('');
    for(var i=0;i<strArray.length;i++){
            var sTemp = strArray[i];
            if(i===0){
            strArray[0] = str[count];
            strArray[count] = sTemp;
    }else{
      strArray[i] = str[count];
      strArray[i-1] = sTemp;
    }
        //if(aComb.indexOf(strArray.join(''))=== -1){
             aComb.push(strArray.join(''));
          //}
          
        }
        var finalArray = [];
    if(str.length === count){  
      aComb.forEach(function(element){
        console.log(element,checkConsecAlp(element))
        if(checkConsecAlp(element)){
           finalArray.push(element);
        }
      });   
      console.log(aComb,finalArray); 
        return;
    }
    var num = count + 1;
    //console.log(aComb);
    noRepeats(str,aComb,num);
}


function checkConsecAlp(str){
   var aStr =  str.split('');
   for(var j=0;j<aStr.length;j++){
        if(str[j]=== str[j+1]){
            return false;
        }
   }
   return true;
}


function permAlone(str){
    //var aCombArray =  noRepeats(str,[],0);
    console.log(noRepeats(str,[],0));
    //return  noRepeats(str,[],0);
}

permAlone('aab');  



a a b   --> str[count]
a a b   --> strArray[count] = strArray[i] 

strArray[i] = str[count];


strArray[i-1]

a a b b     count 
a a b b     i-1<> i
a b a b-0
a b b a 
a a b b
a a b b 
a b a b - 0
a b b a
b a b a -+
a b b a
a b b a
a b a b - -
b a b a - +
a b b a
a b b a
a b a b - -



 

