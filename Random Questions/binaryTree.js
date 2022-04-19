function Node(iValue,oLeft,oRight){
    this.value = iValue;
    this.left = oLeft;
    this.right = oRight;
}


var BT = {
    root:undefined,
    addNode:function(value){
        if(!this.root){
            this.root = new Node(value);
            return true;
        }
        let oCurrentNode = this.root;
        let oParentNode = undefined;
        while(oCurrentNode !== undefined){
            oParentNode = oCurrentNode;
            if(oCurrentNode.value>value){
             oCurrentNode = oCurrentNode.right;
            }else if(oCurrentNode.value<value){
             oCurrentNode = oCurrentNode.left;
            }else{
                return false;
            }
        }
        if(oParentNode.value>value){
            oParentNode.left = new Node(value);
        }else{
            oParentNode.right = new Node(value);
        }
        
    },
    search:function(value){
        if(!this.root){
            return true;
        }
        let oCurrentNode = this.root;
        while(oCurrentNode !== undefined){
            if(oCurrentNode.value>value){
             oCurrentNode = oCurrentNode.right;
            }else if(oCurrentNode.value<value){
             oCurrentNode = oCurrentNode.left;
            }else{
                return true;
            }
        }
        return false;
    }
}