const deleteNode = (del) => {
  del.data = del.next.data;
  del.next = del.next.next;
};
