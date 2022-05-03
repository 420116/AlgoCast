const memoization = () => {
  let cache = {};
  return (n) => {
    if (!cache[n]) {
      console.log("cal");
      cache[n] = n + 10;
      return cache[n];
    } else {
      console.log("cache");
      return cache[n];
    }
  };
};

let add = memoization();
console.log(add(2), add(2));
