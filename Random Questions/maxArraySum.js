function sumArray(arr){
    let sumObj = {};
    let sumArray = [];
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        let reset = false;
        if(arr[i]>0){
            sumArray.push(arr[i]);
            sum = arr[i]+sum;
            if(arr[i+1]<0 || !arr[i+1]){
                reset = true;
            }
        }
        //Reset all the values
        if(reset){
            sumObj[sum] = sumArray;
            sum = 0;
            sumArray = [];
        }

    }
    let maxSum = Object.keys(sumObj).sort()[0];
    console.log(sumObj[maxSum],maxSum);
}