// get the subset of an Array
// Input = [1,2,3];
// Output = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,3]]

const getSubset = (arr) => {
  let results = [];
  let subset = [];
  DFS(arr, 0, results, subset);
  console.log(results);
};

const DFS = (arr, i, results, subset) => {
  if (i >= arr.length) {
    results.push([...subset]);
    return;
  }

  subset.push(arr[i]);
  DFS(arr, i + 1, results, subset);
  subset.pop();
  DFS(arr, i + 1, results, subset);
};

getSubset([2, 4]); // output [ [ 2, 4 ], [ 2 ], [ 4 ], [] ]
getSubset([1, 2, 3]); // output [[ 1, 2, 3 ], [ 1, 2 ],[ 1, 3 ],[ 1 ], [ 2, 3 ],[ 2 ],[ 3 ],[]]
