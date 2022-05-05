const getCount = (str) => {
  let results = {};
  for (let i = 0; i < str.length; i++) {
    if (!results[str[i]]) {
      results[str[i]] = 1;
    } else {
      results[str[i]] += 1;
    }
  }
  console.log(results);
};

getCount("aaabbbbccccdd");
