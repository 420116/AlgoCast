const infinteCurr = (a) => {
  return (b) => {
    if (b) {
      return infinteCurr(a + b);
    }
    return a;
  };
};

console.log(infinteCurr(1)(2)(3)(4)(9)()); //Output 19
