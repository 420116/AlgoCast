function Node(data) {
  this.root = data;
  this.next = null;
}

const insertLL = (node, data) => {
  if (!node) {
    node = new Node(data);
    return node;
  }

  let nodeBefore = node;
  let currentNode = node;
  if (node.data && node.data > data) {
    nodeBefore = new Node(data);
    nodeBefore.next = node;
    return nodeBefore;
  }
  if (currentNode.data) {
    while (currentNode.data < data) {
      nodeBefore = currentNode;
      currentNode = currentNode.next;
      if (currentNode === null) {
        break;
      }
    }
    nodeBefore.next = new Node(data);
    nodeBefore.next.next = currentNode;
  }
  return node;
};
