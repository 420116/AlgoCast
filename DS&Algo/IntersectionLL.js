// Given two singly linked lists of size N and M,
// write a program to get the point where two linked lists intersect each other.

// Example 1:
// Input:
// Linked List 1 = 4->1->common
// Linked List 2 = 5->6->1->common
// common = 8->4->5->NULL
// Output: 8
// Explanation:

// 4              5
// |              |
// 1              6
//  \             /
//   8   -----  1
//    |
//    4
//    |
//   5
//   |
//   NULL

//Function to find intersection point in Y shaped Linked Lists.
const intersectPoint = (head1, head2) => {
  let arr = new Set();
  //your code here
  let curr = head2;
  while (curr !== null) {
    arr.add(curr);
    curr = curr.next;
  }
  curr = head1;
  while (curr !== null) {
    if (arr.has(curr)) {
      return curr.data;
    }
    curr = curr.next;
  }
  return -1;
};


