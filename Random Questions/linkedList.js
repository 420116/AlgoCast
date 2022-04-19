function Node(iValue,next){
    this.next = null;
    this.value = iValue;
}

var LL = {
    root:null,
    addNode:function(value){
        if(!this.root){
            this.root = new Node(value);
            return true;
        }
        let oCurrentNode = this.root;
        let oParentNode = this.root;
        while(oCurrentNode.next !== null){
            oParentNode = oCurrentNode.next;
            if(oCurrentNode.next){ 
                oCurrentNode = oCurrentNode.next;
            }else{
                return;
            }
        }
        oParentNode.next = new Node(value);
        return true;
    }
}