class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const mergeLL = (head1, head2) => {
  //your code here
  if (head1 === null) {
    return head2;
  }

  if (head2 === null) {
    return head1;
  }

  if (head1.data <= head2.data) {
    head1.next = this.sortedMerge(head1.next, head2);
    return head1;
  } else {
    head2.next = this.sortedMerge(head1, head2.next);
    return head2;
  }
};
