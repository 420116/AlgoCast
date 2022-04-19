function smallNumLeft(arr){
    let result =[];
    for(let i=0;i<arr.length;i++){
        let j=0;
        let smallestNum = -1;
        while(j<i){
           if(arr[j]<arr[i] && arr[j]>smallestNum){
               smallestNum = arr[j];
           }
            j++;
        }
        result.push(smallestNum);
    }
    console.log(result);
}

smallNumLeft([1,2,3]);