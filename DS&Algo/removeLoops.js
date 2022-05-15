function Node(data){
    this.data=data;
    this.next=null;
}

function removeLoop(head){
    if( head === null || head.next === null){
        return;
    }
    let arr = [head.data];
    let nextNode = head;
    while(nextNode.next !== null){
        if(arr.indexOf(nextNode.data) !== -1){
            return 1;
        }
        arr.push(nextNode.data);
        nextNode = nextNode.next;
    }
  return 0;

}
