const mergeSort = (arr, start, end) => {
  if (end - start < 1) {
    return;
  } else {
    //console.log(arr, start, end);
    let mid = parseInt((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    mergeArr(arr, start, mid, end);
  }
};

const mergeArr = (arr, start, mid, end) => {
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);
  let leftPointer = 0;
  let rightPointer = 0;
  console.log(left, right);
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

    ///
    if (left[leftPointer] <= right[rightPointer]) {
      arr[i] = left[leftPointer];
      leftPointer++;
    } else {
      arr[i] = right[rightPointer];
      rightPointer++;
    }
  }
};


let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
//mergeSort([10, 9, 8, 7, 6]);
//[10,9,8,7,6]                       [5,4,3,2,1]
//[10,9]       [8,7,6]              [5,4]  [3,2,1]
//[10] [9]     [8] [7,6]            [5] [4]   [3] [2,1]
