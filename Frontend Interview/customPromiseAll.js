const customPromise = (arr) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let arrList = arr;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      arr[i]
        .then((result) => {
          results.push(result);
          arrList.pop();
          if (arrList.length === 0) {
            resolve(results);
          }
        })
        .catch((error) => {
          results.push(error);
          reject(results);
          // break;
        });
    }
  });
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((resolve, reject) => {
  //reject(new Error("reject1"));
  resolve("yes");
});

customPromise([p1, p2, p3, p4, p5])
  .then((result) => console.log(result, "1"))
  .catch((error) => console.log(error, "2"));
