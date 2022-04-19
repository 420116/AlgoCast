function selectionSort(aInput){
    var iLength = aInput.length;
    if(iLength === 1){
        return;
    }
for(var j=0;j<iLength;j++){
    for(var i=j+1;i<iLength;i++){
        var initialPosition = aInput[j];
            var nextPosition = aInput[i];
        if(initialPosition>nextPosition){
            aInput[j] = nextPosition;
            aInput[i] = initialPosition;
        }
    }
}
return aInput;
}

var aInput = [10,15,23,2,9,28,1,36];


function selectionSortA(aInput){
    var smallestNum;
    for(var i=0;i<aInput.length;i++){
        smallestNum = aInput[i];
        for(var j=i+1;j<aInput.length;j++){
            if(smallestNum> aInput[j]){
                smallestNum = aInput[j];
                aInput[j] = aInput[i];
                aInput[i] = smallestNum;
            }
        }
    }
    return aInput;
}




