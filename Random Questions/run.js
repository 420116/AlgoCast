

function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}
console.log(fib(5));


function pal(n){
    if(n%2 === 0){
        return false 
    }
    var r =""
    n = "" + n;
    for(let i=0;i<n.length;i++){
        r = n[i] + r;
    }
    console.log(n,r);
    return (n===r);
}

console.log(pal(1551));

function isPalindrome(str){
    str = str.replace(/\W/g, '').toLowerCase();
    return (str.split('').reverse().join('') === str);
}

function sum(x) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
      return function(y) { return x + y; };
    }
}
    
function fact(n){
    if(n<2){
        return n;
    }
    return n*fact(n-1);
}

console.log(fact(10));


console.log(findGroup([[1,1,0],
    [1,1,0],
    [0,0,1]]));

//find groups in friend circle..
   function findGroup(arr){
       var aGroup=[];
        for(let i=0;i<arr.length;i++){
            var obj = [];
                for(let j=0;j<arr[i].length; j++){
                        if(arr[i][j] === 1){
                            obj.push(j);
                        }
                }
                aGroup.push(obj); 
        }
        return aGroup.reduce(function(prev,next,index,arr){
            var setB = new Set(next);
            if(index===1){
                //find intersection between two arrays 
                //if exist means keep bigger one
                var newArray = [...new Set(prev)].filter(x => setB.has(x));
                if(newArray.length>=1){
                    let result = prev.length > next.length? [prev]:[next];
                    prev = result;
                }else{
                    prev= [prev,next];
                }
            }else{
                var newArray = [...new Set(arr[index-1])].filter(x => setB.has(x));
                if(newArray.length>=1){
                    let result = arr[index-1].length > next.length? arr[index-1]:next;
                    if(prev.indexOf(result) === -1){
                        prev.push(result);
                    }
                }else{
                    if(prev.indexOf(next) === -1){
                        prev.push(next);
                    }
                }
            }
            return prev;
          });
   }




