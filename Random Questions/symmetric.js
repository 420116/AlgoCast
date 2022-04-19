function sym(args) {
    var mergedArgs =[];
    console.log(args);
          var mrgDupEntry = [...args[0],...args[1]];
          var mergedArray = [...new Set(mrgDupEntry)];
    var mergedArgs = checkSym(mergedArray,args[0],args[1]);
    console.log(mergedArgs);
    return mergedArgs;
  }

  function checkSym(totalArgs,args1,args2){
    var mergedArgs = [];
    totalArgs.forEach(function(num){
      if(args1.indexOf(num)===-1 || args2.indexOf(num) === -1){
        mergedArgs.push(num);
      }
    });
    
    return mergedArgs;
  }

sym([[1, 2, 3],[5, 2, 1, 4]]);