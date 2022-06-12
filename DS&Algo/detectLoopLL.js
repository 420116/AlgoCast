// Given a linked list of N nodes.
// The task is to check if the linked list has a loop.
// Linked list can contain self loop.
// Input:
// N = 3
// value[] = {1,3,4}
// x(position at which tail is connected) = 2
// Output: True
// Explanation: In above test case N = 3.
// The linked list with nodes N = 3 is
// given. Then value of x=2 is given which
// means last node is connected with xth
// node of linked list. Therefore, there
// exists a loop.

const detectLoop = (head) => {
  //your code here

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
  /*    using array...      */
  // let arr = [head];
  // let currentNode = head.next;
  // while(currentNode !== null){
  //     if(arr.includes(currentNode)){
  //         return true;
  //     }
  //     currentNode = currentNode.next;
  // }
  // return false;
};


