const kthSmallest = (arr, k, pos, newArray) => {
  if (newArray.length === k) {
    console.log(newArray[pos - 1]);
    return false;
  }
  let lastNum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    lastNum = arr[i];
    if (arr[i - 1] > arr[i]) {
      arr[i] = arr[i - 1];
      arr[i - 1] = lastNum;
    }
  }
  newArray.push(arr[pos]);
  pos = pos + 1;
  kthSmallest(arr, k, pos, newArray);
};

const splitSort = (arr, start, end) => {
  if (end - start < 1) {
    return;
  } else {
    let mid = parseInt((start + end) / 2);
    splitSort(arr, start, mid);
    splitSort(arr, mid + 1, end);
    merge(arr, mid, start, end);
  }
};

const merge = (arr, mid, start, end) => {
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);
  let leftPointer = 0;
  let rightPointer = 0;
  for (let i = start; i <= end; i++) {
    if (leftPointer === left.length) {
      while (rightPointer < right.length) {
        arr[i] = right[rightPointer];
        rightPointer++;
        i++;
      }
      return;
    }
    if (rightPointer === right.length) {
      while (leftPointer < left.length) {
        arr[i] = left[leftPointer];
        leftPointer++;
        i++;
      }
      return;
    }

    if (left[leftPointer] <= right[rightPointer]) {
      arr[i] = left[leftPointer];
      leftPointer++;
    } else {
      arr[i] = right[rightPointer];
      rightPointer++;
    }
  }
};

//kthSmallest([7, 10, 4, 3, 20, 15], 3, 0, []);
//let arr = [7, 10, 4, 3, 20, 15];
let arr = [7, 10, 4, 20, 15];
splitSort(arr, 0, 4);
console.log(arr);
