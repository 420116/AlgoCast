// Given a linked list of size N.
// The task is to reverse every k nodes (where k is an input to the function) in the linked list.
// If the number of nodes is not a multiple of k then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

// Example 1:
// Input:
// LinkedList: 1->2->2->4->5->6->7->8
// K = 4
// Output: 4 2 2 1 8 7 6 5
// Explanation:
// The first 4 elements 1,2,2,4 are reversed first
// and then the next 4 elements 5,6,7,8. Hence, the
// resultant linked list is 4->2->2->1->8->7->6->5.

const reverse = (node, k) => {
  let count = 0;
  //your code here
  let curr = node;
  let root = null;
  let arr = [];
  let nextNode = null;
  let head = null;
  while (curr !== null) {
    if (count === k) {
      arr.push(nextNode);
      root = null;
      count = 0;
      nextNode = null;
    }
    root = new Node(curr.data);
    root.next = nextNode;
    nextNode = root;
    curr = curr.next;
    count++;
  }

  if (nextNode !== null) {
    arr.push(nextNode);
  }
  //console.log(arr[0],arr[1]);
  for (let i = 0; i < arr.length; i++) {
    curr = arr[i];
    while (curr.next !== null) {
      curr = curr.next;
    }
    if (arr[i + 1]) {
      curr.next = arr[i + 1];
    }
  }
  return arr[0];
};
