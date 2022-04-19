function bubbleSort(arr){
    let firstNumb = arr[0];
    let bCallAgain = false;
    for(let i=0;i<arr.length;i++){
       if(arr[i]>arr[i+1]){
           arr[i] = arr[i+1];
           arr[i+1] = firstNumb;
           bCallAgain = true;
       }
    }
    if(bCallAgain){
        bubbleSort(arr)
    }else{
        return arr;
    }
}