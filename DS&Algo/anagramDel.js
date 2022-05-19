// Given two strings S1 and S2 in lowercase,
// the task is to make them anagram.
// The only allowed operation is to remove a character from any string.
// Find the minimum number of characters to be deleted to make both the strings anagram.
// Two strings are called anagram of each other if one of them can be converted into another by rearranging its letters.

// Example 1:
// Input:
// S1 = bcadeh
// S2 = hea
// Output: 3
// Explanation: We need to remove b, c
// and d from S1.

const makeAnag = (str1, str2) => {
  if (str1.length > str2.length) {
    return calCount(str1, str2);
  } else if (str1.length < str2.length) {
    return calCount(str2, str1);
  } else {
    if (str1 === str2) {
      return 0;
    }
    return calCount(str1, str2);
  }
  
};

const calCount = (str1, str2) => {
  let map = createMap(str2);
  let mapB = createMap(str1);
  let arr = Object.keys(map);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (mapB[arr[i]]) {
      if (mapB[arr[i]] > map[arr[i]]) {
        count = count + mapB[arr[i]] - map[arr[i]];
      } else if (mapB[arr[i]] < map[arr[i]]) {
        count = count + map[arr[i]] - mapB[arr[i]];
      }
      delete mapB[arr[i]];
      delete map[arr[i]];
    } else {
      count = count + map[arr[i]];
      delete map[arr[i]];
    }
  }
  let count1 = Object.values(map).reduce((a, b) => a + b, 0);
  let count2 = Object.values(mapB).reduce((a, b) => a + b, 0);
  return count + count1 + count2;
};

const createMap = (str) => {
  let map = {};
  let i = 0;
  while (i < str.length) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]] += 1;
    }
    i++;
  }
  return map;
};

//console.log(makeAnag);
console.log(makeAnag("sjdhgvbjdsbhvbvd", "basgadhbfgvhads"));
