function Node(value, right, left) {
  this.value = value;
  this.right = right;
  this.left = left;
}

var BST = {
  root: undefined,
  addNode: function (value) {
    if (!root) {
      this.root = new Node(value);
      return true;
    }

    let currentNode = this.root;
    let parentNode = this.root;
    while (currentNode !== undefined) {
      parentNode = currentNode;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        return false;
      }
    }

    if (parentNode.value > value) {
      parentNode.left = new Node(value);
    } else {
      parentNode.right = new Node(value);
    }
  },
};
