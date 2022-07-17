// Given arrival and departure times of all trains that reach a railway station.
// Find the minimum number of platforms required for the railway station so that no train is kept waiting.
// Consider that all the trains arrive on the same day and leave on the same day.
// Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other.
// At any given instance of time, same platform can not be used for both departure of a train and arrival of another train.
// In such cases, we need different platforms.

// Example 1:

// Input: n = 6
// arr[] = {0900, 0940, 0950, 1100, 1500, 1800}
// dep[] = {0910, 1200, 1120, 1130, 1900, 2000}
// Output: 3
// Explanation:
// Minimum 3 platforms are required to
// safely arrive and depart all trains.

const findPlatform = (arr, dep, n) => {
  //your code here
  let count = 1;
  let temp = 0;
  let platform = count;
  arr.sort((a, b) => {
    return a - b;
  });
  dep.sort((a, b) => {
    return a - b;
  });
  for (let i = 1; i < n; i++) {
    temp = i - 1;
    platform = count;
    while (temp !== 0 && platform !== 0) {
      if (arr[i] > dep[temp]) {
        temp = 1;
        platform = 1;
        break;
      }
      temp--;
      platform--;
    }
    if (platform === 0) {
      count++;
    }
  }
  return count;
};

const findPlatformN = (arr, dep, n) => {
  //your code here
  let maxPl = 1;
  let requiredPl = 1;
  arr.sort((a, b) => {
    return a - b;
  });
  dep.sort((a, b) => {
    return a - b;
  });

  let leftArr = 1;
  let leftDep = 0;

  while (leftArr < n) {
    if (arr[leftArr] > dep[leftDep]) {
      while (leftArr !== leftDep && arr[leftArr] > dep[leftDep]) {
        maxPl--;
        leftDep++;
      }
    }

    maxPl++;
    requiredPl = Math.max(requiredPl, maxPl);
    leftArr++;
  }
  return requiredPl;
};
