function bubbleSort (aInput){
    var bCallAgain = false;
    for(i=0;i<aInput.length;i++){
        var firstNumb = aInput[i];
        if(firstNumb > aInput[i+1]){
            aInput[i] = aInput[i+1];
            aInput[i+1] = firstNumb;
            bCallAgain = true;
        }
    }
    if(bCallAgain){
        bubbleSort(aInput);
    }else{
        return aInput;
    }
}



