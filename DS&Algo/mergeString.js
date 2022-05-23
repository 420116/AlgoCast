function mergeStrings(s1, s2) {
  // Stores length of string s1
  var len1 = s1.length;

  // Stores length of string s2
  var len2 = s2.length;

  // Pointer to beginning
  // of string1 i.e., s1
  var pntr1 = 0;

  // Pointer to beginning
  // of string2 i.e., s2
  var pntr2 = 0;

  // Stores the final string
  var ans = "";

  // Traverse the strings
  while (pntr1 < len1 && pntr2 < len2) {
    // Append the smaller of the
    // two current characters
    if (s1[pntr1] < s2[pntr2]) {
      ans += s1[pntr1];
      pntr1++;
    } else {
      ans += s2[pntr2];
      pntr2++;
    }
  }

  // Append the remaining characters
  // of any of the two strings
  if (pntr1 < len1) {
    ans += s1.substr(pntr1, len1);
  }
  if (pntr2 < len2) {
    ans += s2.substr(pntr2, len2);
  }

  // Print the final string
  console.log(ans);
}

// Driver Code
var S1 = "super";
var S2 = "tower";
// Function Call
mergeStrings(S1, S2);
