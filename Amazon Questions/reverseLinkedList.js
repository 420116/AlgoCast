function Node(data) {
  this.data = data;
  this.next = null;
};

const reverseList = (head) => {
  let finalObject;
  //your code here
  let nextNode = head;
  let count = 1;
  let tempNode = head;
  while (nextNode !== null) {
    if (count === 1) {
      finalObject = new Node(tempNode.data);
    } else {
      tempNode = new Node(nextNode.data);
      tempNode.next = finalObject;
      finalObject = tempNode;
    }
    nextNode = nextNode.next;
    count++;
  }
  return finalObject;
};
