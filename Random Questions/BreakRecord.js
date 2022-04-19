function breakingRecords(scores) {
    // Write your code here
    let max=0;
    let min=0;
    let maxNum = scores[0];
    let minNum = scores[0];
    for(let i=1;i<scores.length;i++){
        if(maxNum<scores[i]){
            max=max+1;maxNum = scores[i];
        }

        if(minNum>scores[i]){
            min=min+1;minNum = scores[i];
        }
    }

  return [max,min];
}