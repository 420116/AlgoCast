// const func_over=()=>{
// };
// func_over('+',1,2,3,4,5,6);
// func_over('*',1,2,3,4,5,6);

function fnOver() {
  let arr = [...arguments];
  if (arr.length > 0) {
    if (arr[0] === "+") {
      arr = arr.slice(1, arr.length + 1);
      return arr.reduce((a, b) => a + b);
    }

    if (arr[0] === "*") {
      arr = arr.slice(1, arr.length + 1);
      return arr.reduce((a, b) => a * b);
    }
  }
}

console.log(fnOver("*", 1, 2, 3, 4, 5, 6));
