//To increase efficiency amazon shipping team will group packages being shipped according to weight
// They will merge a lighter package to heavy package, which eliminates to need for shipment
// consider n pacakges where arr[i] represent package at ith position
// you can combine(sum) ith and i+1 th package if  arr[i]<arr[i+1] and discard ith package
// Find the maximum possible weight of a package that can be acheived after merging operations
const packageWeight = (packageWeights) => {
  let finalPack = [packageWeights[packageWeights.length - 1]];
  let max = finalPack[0];
  for (let i = packageWeights.length - 2; i >= 0; i--) {
    if (packageWeights[i] < finalPack[0]) {
      // merge with package on the right
      let temp = finalPack[0];
      finalPack[0] = temp + packageWeights[i];
    } else {
      // cannot merge with package on the right
      finalPack.unshift(packageWeights[i]);
    }
    max = Math.max(max, finalPack[0]);
  }

  return max;
};
packageWeight([2, 9, 10, 3, 7]); //[21,10]
packageWeight([20, 13, 8, 9]); //[50]
