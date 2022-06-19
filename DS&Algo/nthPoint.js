// There are N points on the road ,you can step ahead by 1 or 2.
// Find the number of ways you can reach at point N.

// Example 1:
// Input: N = 4
// Output: 5
// Explanation: Three ways to reach at 4th
// point. They are {1, 1, 1, 1}, {1, 1, 2},
// {1, 2, 1} {2, 1, 1}, {2, 2}.

const nthPoint = (N) => {
  //code here
  let one = 1,
    two = 1;
  let temp = 0;
  for (let i = 0; i < N - 1; i++) {
    temp = one;
    one = one + two;
    two = temp;
  }

  return one;
};

console.log(nthPoint(4));
