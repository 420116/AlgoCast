function Node() {
  this.map = {};
  this.isWord = false;
  this.haveRecord = function () {
    return Object.entries(this.map).length > 0;
  };
  this.addRecord = function (cKey) {
    this.map[cKey] = new Node();
    return this.map[cKey];
  };
}

function Trie() {
  this.root = new Node();
  this.insert = function (sValue) {
    var oCurrent = this.root;
    for (let i = 0; i < sValue.length; i++) {
      if (oCurrent.map[sValue[i]] !== undefined) {
        oCurrent = oCurrent.map[sValue[i]];
      } else {
        oCurrent = oCurrent.addRecord(sValue[i]);
      }
    }
    if (oCurrent.isWord) {
      return true;
    }
    oCurrent.isWord = true;
    return true;
  };

  this.search = function (sValue) {
    var oCurrent = this.root;
    for (let i = 0; i < sValue.length; i++) {
      if (oCurrent.map[sValue[i]] !== undefined) {
        oCurrent = oCurrent.map[sValue[i]];
      } else {
        return false;
      }
    }
    return oCurrent.isWord;
  };

  this.delete = function (sValue) {
    var path = [];
    var oCurrent = this.root;
    for (var i = 0; i < sValue.length; i++) {
      if (oCurrent.map[sValue[i]] !== undefined) {
        path.push(oCurrent);
        oCurrent = oCurrent.map[sValue[i]];
      } else {
        return false;
      }
    }
    oCurrent.isWord = false;
    var charIndex = sValue.length - 1;
    for (var i = path.length - 1; i > 0; i--) {
      if (!oCurrent.haveRecord() && !oCurrent.isWord) {
        oCurrent = path[i];
        delete oCurrent.map[sValue[charIndex]];
        charIndex--;
      } else {
        break;
      }
      return true;
    }
  };
}
