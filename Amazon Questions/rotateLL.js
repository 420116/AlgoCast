function Node(data, next) {
  this.root = data;
  this.next = null;
}

const rotateNext = (head, k) => {
  if (!head || !head.data) {
    return false;
  }
  let arr = [];
  counter = 1;
  let currentNode = head;
  let tempNode;
  while (currentNode.next !== null) {
    if (counter === k) {
      tempNode = currentNode;
    }
    currentNode = currentNode.next;
    counter++;
  }
  if(!tempNode){
      return;
  }
  while(currentNode.next !== null){
      currentNode = currentNode.next
  }

  currentNode.next = head;
  head=tempNode.next;
  tempNode.next = null;

  return ;
};
