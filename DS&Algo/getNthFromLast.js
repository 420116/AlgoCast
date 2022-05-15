// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

const getNthFromLast = (head, n) => {
  if (head === null || head.next === null) {
    return -1;
  }
  let nextNode = head.next;
  let arr = [head.data];
  while (nextNode !== null) {
    arr.push(nextNode.data);
    nextNode = nextNode.next;
  }
  if (arr.length >= n) {
    return arr[arr.length - n];
  } else {
    return -1;
  }
};

//getNthFromLast(1->2->3->4->5->6->7->8->9);
