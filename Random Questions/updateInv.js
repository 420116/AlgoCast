function updateInventory(arr1, arr2) {
    for(var i=0;i<arr2.length;i++){
        // for(var j=0;j<arr1[i].length;j++){
        arr1 = updateInv(arr2[i],arr1);
        // }
    }
    arr1.sort(function (a, b) {
        return a[1].localeCompare(b[1]);
    });
    return arr1;
}

function updateInv(curr,arr1){
    var bUpdate = false;
    for(var i=0;i<arr1.length;i++){
           if(curr[1] === arr1[i][1]){
               arr1[i][0] = arr1[i][0] + curr[0];
               bUpdate = true;
               }
    }
    if(!bUpdate){
        arr1.push(curr)
    }
    return arr1;
}



// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

