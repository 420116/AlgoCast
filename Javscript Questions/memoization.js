// function add(a,b){
//     return a + b;
//     }
//     const onceAdd = once(Add);
//     console.log(onceAdd(1,2)); // 3
//     console.log(onceAdd(1,2)); // 3
//     console.log(onceAdd(2,2)); // 3

function onceAdd() {
  let cache = {};

  return function add(a, b) {
    if (!cache["result"]) {
      cache["result"] = a + b;
      return cache["result"];
    } else {
      return cache["result"];
    }
  };
}

let add = onceAdd();
console.log(add(2, 4)); // 6
console.log(add(5, 6)); // 6
