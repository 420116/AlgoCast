const search = (repo, str) => {
  let searchStr = "";
  let output = [];
  for (let i = 0; i < str.length; i++) {
    searchStr = searchStr + str[i];
    if (i > 0) {
      output.push(searchFromRepo(repo, searchStr));
    }
  }

  console.log(output);
};

const searchFromRepo = (repo, str) => {
  let arr = [];
  repo.forEach((word) => {
    if (word.includes(str)) {
      arr.push(word);
    }
  });

  if (arr.length > 3) {
    arr = arr.sort().slice(0, 3);
  }
  return arr;
};

let aRepo = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
let str = "mouse";

search(aRepo, str);
