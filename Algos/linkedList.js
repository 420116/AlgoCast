function Node(iValue, next) {
  this.next = next;
  this.value = iValue;
}

var LL = {
  root: undefined,
  insert: function (iValue) {
    if (this.search(iValue)) {
      return false;
    }
    this.root = new Node(iValue, this.root);
    return true;
  },
  search: function (value) {
    let oCurrentNode = this.root;
    while (oCurrentNode !== undefined) {
      if (oCurrentNode.value === value) {
        return true;
      }
      oCurrentNode = oCurrentNode.next;
    }
    return false;
  },
  delete: function (value) {
    if (this.root !== undefined) {
      if (this.root.value === value) {
        this.root = this.root.next;
        return true;
      }
    } else {
      return false;
    }

    var oNodeBefore = undefined;
    var oCurrent = this.root;
    while (oCurrent.value !== value) {
      oNodeBefore = oCurrent;
      oCurrent = oCurrent.next;
      if (oCurrent === undefined) {
        return false;
      }
    }

    oNodeBefore.next = oCurrent.next;
    return true;
  },
};

LL.insert(2);
LL.insert(3);
LL.insert(4);
LL.insert(1);
//console.log();
console.log(LL.search(3));
console.log(LL.delete(4));
console.log(LL.root);
