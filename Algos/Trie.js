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
      //if map has prefix value avalaible or not like "m" or "r"
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
        //console.log(oCurrent.map[sValue[i]]);
        oCurrent = oCurrent.map[sValue[i]];
      } else {
        return false;
      }
    }
    return oCurrent.isWord;
  };

  this.combinationSearch = function (sValue) {
    let arr = [];
    let oCurrent = this.root;
    let counter = 0;
    let str = "";
    // console.log(sValue, Object.entries(oCurrent.map), oCurrent.map[sValue[0]]);
    if (oCurrent.map[sValue[0]] !== undefined) {
      while (oCurrent.isWord === false) {
        if (oCurrent.isWord === true) {
          break;
        }
        console.log(oCurrent);
        if (counter < sValue.length) {
          console.log(1, oCurrent.haveRecord());
          oCurrent = oCurrent.map[sValue[counter]];
        }
        counter++;
      }
    }
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

let oTrie = new Trie();

let aRepo = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];

for (var i = 0; i < aRepo.length; i++) {
  oTrie.insert(aRepo[i]);
}

//console.log(oTrie.root.map);

console.log(oTrie.combinationSearch("mo"));
