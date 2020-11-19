/* eslint-disable require-jsdoc */
/* eslint-disable id-length */
"use strict";

/* global RedBlackTree Sequence HT_Dictionary PrintPlainTree BinaryTree*/

//DIT//DIT
class RB_IteratKeyRange {// eslint-disable-line camelcase, no-unused-vars

  constructor(tree, lowKey, highKey) {
      this._nodes = [];
      this._index = 0;
      this.calls = 0;
      this._getNodes(tree, lowKey, highKey);
      this.reset();
  }

  findNodes(tree, p, lowKey, highKey) {

    this.calls += 1;

    if (tree.isExternal(p)) return;

    let el = p.element();
    let key = el.key();

    // Add if Key Between
    if (key >= lowKey && key <= highKey) this._nodes[this._index++] = el;
    
    // Move to Children if Within Keys
    if (lowKey < key || highKey <= key) this.findNodes(tree, tree.leftChild(p), lowKey, highKey);
    if (lowKey >= key || highKey > key) this.findNodes(tree, tree.rightChild(p), lowKey, highKey);

  }

  _getNodes(tree, lowKey, highKey) {
    this.findNodes(tree, tree.root(),lowKey, highKey);
  }
  
  hasNext() {
      return this._index < this._nodes.length;
  }
  nextObject() {
      let next = this._nodes[this._index];
      this._index++;
      return next;
  }
  reset() {
      this._index = 0;
  }
}

function testDictionaryIterator (lowKey, highKey) {// eslint-disable-line no-unused-vars

  // Create and Fill Tree
  var tree = new RedBlackTree();
  for (var i = 0; i <= 600; i+=5) {
    tree.insertItem(i,i + " El");
  }

  // Create Iterator and Log to Console
  var cnter = 0;
  var iter = new RB_IteratKeyRange(tree, lowKey, highKey);
  while (iter.hasNext()) {
    cnter += 1;
    console.log(iter.nextObject());
  }

  console.log("In " + iter.calls + " Node Checks");

  console.log("log(n) + s = " + (Math.ceil(Math.log2(tree.size())) + cnter));

  return "See Console for Output";
}


//DIT

//IPD//IPD
function isPermutation(seqA, seqB) {

  if (seqA.size() !== seqB.size()) return false;

  var a = new HT_Dictionary();
  var b = new HT_Dictionary();

  let fill = function(d, seq) {

    var iter = seq.iterator();

    while (iter.hasNext()) {

      var el = iter.nextObject();
      var val = d.findElement(el);

      // No Key
      if (val === null) val = 0;
      
      val += 1;
      d.insertItem(el, val);

    }
  };

  // Fill Dictionaries with Sequence Data
  fill(a, seqA);
  fill(b, seqB);

  var iter = a.iterator();

  while (iter.hasNext()) {
    var obj = iter.nextObject();
    var el = obj.element();
    var key = obj.key();

    var check = b.findElement(key);

    // No Match
    if (check !== el) return false;

  }

  // All Matched
  return true;

}

function callIsPermutation () {// eslint-disable-line no-unused-vars

  let listA = new Sequence (7);
  let listB = new Sequence (7);

  listA.insertLast(4);
  listA.insertLast(3);
  listA.insertLast(1);
  listA.insertLast(1);
  listA.insertLast(2);

  listB.insertLast(2);
  listB.insertLast(3);
  listB.insertLast(1);
  listB.insertLast(1);
  listB.insertLast(4);
  listA.print(),listB.print();
  console.log(isPermutation (listA,listB));

  listA.insertLast(3);
  listB.insertLast(4);
  listA.print(),listB.print();
  console.log(isPermutation (listA,listB));

  return "See Console for Output";
  
}
//IPD
//VAVL//VAVL
function isValidAVLTree(tree) {

  if (tree.isEmpty()) return true;

  var validTree = function (t, p) {

    // 0 Height for External Node
    if (t.isExternal(p)) return 0;

    var hL = validTree(t, t.leftChild(p));
    var hR = validTree(t, t.rightChild(p));

    // Skip Check if Children Failed Height Check
    if(hL === false || hR === false) return false;

    // Check if AVL Tree: Height +/- 1 for Each Child
    if (Math.abs(hL - hR) <= 1){
      if (t.isRoot(p)) {
        // Whole Tree Checked
        return true;
      } else {
        // Subtree Children Valid AVL - Return Current Node Height
        return Math.max(hL, hR) + 1;
      }
    } else {
      return false;
    }
  };

  return validTree(tree, tree.root());

}

function callisValidAVLTree(ary) {// eslint-disable-line no-unused-vars

  // let tree = getTree();
  if (ary.length < 2) return "Bad Tree: " + JSON.stringify(ary);

  var tree = new BinaryTree();
  var printer = new PrintPlainTree();
  var pos = [null];
  ary.unshift(null);

  pos[1] = tree.insertRoot(ary[1]);

  var l = 1;
  while (l < ary.length) {

    let lf = l * 2;
    if (lf >= ary.length) break;
    if (ary[lf] !== "null") pos[lf] = tree.insertLeft(pos[lf / 2], ary[lf]);

    let rt = l * 2 + 1;
    if (rt >= ary.length) break;
    if (ary[rt] !== "null") pos[rt] = tree.insertRight(pos[(rt - 1) / 2], ary[rt]);
    l += 1;
  }

  // Create Tree Input Values
  // root, r LeftChild, r RightChild, r LC LC, r LC RC, r RC LC r RC RC
  // null to Skip

  return printer.print(tree, "return") + "\n" + isValidAVLTree(tree);

}//VAVL