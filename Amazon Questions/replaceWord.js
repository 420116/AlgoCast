// Given three strings S, oldW and newW. Find all occurrences of the word oldW in S and replace them with word newW.
// Example 1:
// Input:
// S = "xxforxx xx for xx"
// oldW = "xx"
// newW = "Geeks"
// Output:
// "geeksforgeeks geeks for geeks"
// Explanation:
// Replacing each "xx" with
// "Geeks" in S.
// Expected Time Complexity: O(n2)
// Expected Auxiliary Space: O(1)

const replace = (str, newW, oldW) => {
  let l = 2;
  let result = "";
  let subStr = "";
  for (let i = 0; i < str.length; i++) {
    subStr = str.substring(i, i + l);
    //console.log(subStr);
    if (subStr === oldW) {
      result = result + newW;
      i = i + l - 1;
      subStr = "";
    } else {
      result = result + str[i];
    }
  }
  console.log(result);
};

replace("xxforxx xx for xx", "geeks", "xx");
