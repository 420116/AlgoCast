function binarySearch(arr, value, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] > value) {
    return binarySearch(arr, value, start, mid - 1);
  } else if (arr[mid] < value) {
    return binarySearch(arr, value, mid + 1, end);
  } else {
    // condition where arr[mid] === value
    console.log(mid);
    return mid;
  }
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 7, 0, 6);
