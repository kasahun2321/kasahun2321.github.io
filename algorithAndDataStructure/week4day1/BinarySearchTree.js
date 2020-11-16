const Tree = require('./BinaryTree.js');

class Item {
    constructor(k, e) {
        this._key = k;
        this._elem = e;
    }
    key() {
        return this._key;
    }
    element() {
        return this._elem;
    }
    toString() {
        return "(" + this._key + ", " + this._elem + ")";
    }
}
class BinarySearchTree extends Tree.BinaryTree {
    constructor() {
        super();
    }
    compareKeys(key1, key2) {
        return key1 - key2;
    }
    replaceItem(p, item) {
        return super.replaceElement(p, item);
    }
    swapItems(p, q) {
        super.swapElements(p, q);
    }
    _findPosition(k, p) {
        let diff = this.compareKeys(k, p.element().key());
        if (diff < 0) {
            if (this.isExternal(p._left)) {
                return p;
            } else {
                return this._findPosition(k, p._left);
            }
        } else if (diff > 0) {
            if (this.isExternal(p._right)) {
                return p;
            } else {
                return this._findPosition(k, p._right);
            }
        } else {  // key k is in position p
            return p;  
        }
    }
    insertItem(k, e) {
        if (this.isEmpty()) {
            return this.insertRoot(new Item(k, e));
        } else {
            let p = this._findPosition(k, this.root());
            let diff = this.compareKeys(k, p.element().key());
            if (diff == 0) { // k is already in the tree
                p.element()._elem = e; // update/replace the element
                return p;
            } else {
                let newItem = new Item(k, e);
                if (diff < 0) {
                    return this.insertLeft(p, newItem);
                } else { 
                    return this.insertRight(p, newItem);
                }
            }
        }
    }
    _findPos2Remove(k) {
        let v = this._findPosition(k, this.root());
        let r = v;
        if (this.isInternal(v._left) && this.isInternal(v._right)) {
            r = this._findPosition(k, v._left);
            this.swapItems(v, r);
        }
        return r;
    }
    removeElement(k) {
        if (this.isEmpty()) { // key k is not in the BST
            return null;
        }
        let r = this._findPos2Remove(k);
        if (r.element().key() != k) { // key k is not in the BST
            return null;
        } else {
            this.remove(r);
        }
        return r.element().element();
    }
    findElement (k) {
        if (this.isEmpty()) { // key k is not in the BST
            return null;
        }
        let p = this._findPosition(k, this.root());
        if (p.element().key() != k) { // key not found
            return null;
        } else {
            return p.element().element();
        }
    }
    items() {
        return new BST_Iterator(this, 0);
    }
    keys() {
        return new BST_Iterator(this, 1);
    }
    elements() {
        return new BST_Iterator(this, 2);
    }
}
class BST_Iterator {
    constructor(T, type) {
        this._type = type;
        this._nodes = [];
        this._index = 0;
        this._getPositions(T);  // build the iterator
        this.reset();
    }
    _getPositions(T) {
        this._visitInOrder(T, T.root());
    }
    _visitInOrder(T, p) {
        let result = new Array(3);
        if (T.isExternal(p)) {
            return;
        } else {
            this._visitInOrder(T, T.leftChild(p));
            this._nodes.push(p);  // store the positions in the array in order by key
            this._visitInOrder(T, T.rightChild(p));
        }
        return result[1];
    }
    hasNext() {
        return this._index < this._nodes.length;
    }
    nextObject() {
        let item = this._nodes[this._index].element(); // get item from the position
        this._index++;
        if (this._type == 0) { // items iterator
            return item;
        } else if (this._type = 1) { // keys() iterator
            return item.key();
        } else {                    // elements() iterator
            return item.element();
        }
    }
    reset() {
        this._index = 0;
    }
}

exports.BinarySearchTree = BinarySearchTree;