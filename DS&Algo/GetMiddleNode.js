/* Should return data of middle node. If linked list is empty, then  -1*/
const getMiddle = (node) => {
  //console.log(node)
  //your code here
  if (node === null && node.next === null) {
    return -1;
  }

  let arr = [node.data];
  let nextNode = node.next;
  while (nextNode !== null) {
    arr.push(nextNode.data);
    nextNode = nextNode.next;
  }

  let mid = arr.length;
  let pos = 0;
  if (mid % 2 === 0) {
    pos = mid / 2;
  } else {
    pos = Math.floor(mid / 2);
  }
  return arr[pos];
};

getMiddle();
