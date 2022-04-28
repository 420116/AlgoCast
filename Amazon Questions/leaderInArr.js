const getLeaders = (arr) => {
  // code here
  let leaders = [];
  let max = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (max <= arr[i]) {
      max = arr[i];
      leaders.push(max);
    }
  }
  console.log(leaders.reverse());
};

getLeaders([16, 17, 4, 3, 5, 2]);
