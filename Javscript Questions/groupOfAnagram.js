// group anagrams
// Input: strs = ["eat","tea","tan","ate","nat","bat"]  [1,2,3,4]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//aet-->["eat","tea"]
const formGroup = (arr) => {
  let groups = [];
  let map = {};
  let sKey = "";
  for (let i = 0; i < arr.length; i++) {
    sKey = arr[i].split("").sort().join("");//
    if (!map[sKey]) {
      map[sKey] = [arr[i]];//1
    } else {
      map[sKey].push(arr[i]);//push
    }
  }

  console.log(Object.values(map));
};

formGroup(["eat", "tea", "tan", "ate", "nat", "bat"]);
