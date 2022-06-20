// Given two numbers represented by two linked lists of size N and M.
// The task is to return a sum list.
// The sum list is a linked list representation of the addition of two input numbers from the last.
// Example 1:
// Input:
// N = 2
// valueN[] = {4,5}
// M = 3
// valueM[] = {3,4,5}
// Output: 3 9 0
// Explanation: For the given two linked
// list (4 5) and (3 4 5), after adding
// the two linked list resultant linked
// list will be (3 9 0).

//Function to add two numbers represented by linked list.

const addTwoLists = (first, second) => {
  //your code here
  //console.log(first.next);
  first = reverse(first);
  second = reverse(second);
  let currFirst = first;
  let currSecond = second;
  let res = new Node(0);
  let carry = 0;
  let sum = 0;
  //console.log(first,second);
  while (currFirst !== null && currSecond !== null) {
    //console.log(currFirst.data,currSecond.data);
    sum = currFirst.data + currSecond.data + carry;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    res.data = sum;

    let temp = new Node(0);
    temp.next = res;
    res = temp;
    currFirst = currFirst.next;
    currSecond = currSecond.next;

    while (currFirst === null && currSecond !== null) {
      let results = addRemaining(currSecond, carry, res);
      res = results.res;
      carry = results.carry;
    }

    while (currFirst !== null && currSecond === null) {
      let results = addRemaining(currFirst, carry, res);
      res = results.res;
      carry = results.carry;
    }
  }
  if (carry !== 0) {
    res.data = carry;
    return res;
  }
  return res.next;
};

const reverse = (head) => {
  //your code here
  let first = new Node(head.data);
  let current = head.next;
  while (current !== null) {
    let temp = new Node(current.data);
    temp.next = first;
    first = temp;
    current = current.next;
  }
  return first;
};

const addRemaining = (node, carry, res) => {
  while (node === null) {
    sum = node.data + carry;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    res.data = sum;
    let temp = new Node(0);
    temp.next = res;
    res = temp;
    node = node.next;
  }
  return { res, carry };
};
