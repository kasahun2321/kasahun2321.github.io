class TPos {
    constructor(left, elem, right, parent) {
        this._parent = parent;
        this._left = left;
        this._right = right;
        this._elem = elem;
    }
    element() {
        return this._elem;
    }
}
class BinaryTree {
    constructor() {
        this._root = null;
        this._size = 0;
    }
    size() {
        return this._size;
    }
    isEmpty() {
        return this._size == 0;
    }
    root() {
        return this._root;
    }
    isRoot(p) {
        return p == this._root;
    }
    parent(p) {
        return p._parent;
    }
    leftChild(p) {
        return p._left;
    }
    rightChild(p) {
        return p._right;
    }
    _isLeftChild(p) {
        return p != null && p._parent != null 
            && p._parent._left == p;
    }
    sibling(p) {
        if (this._isLeftChild(p)) {
            return p._parent._right;
        } else {
            return p._parent._left;
        }
    }
    isExternal(p) {
        return (p == null);
    }
    isInternal(p) {
        return (p != null);
    }
    replaceElement(p, e) {
        let oldElem = p._elem;
        p._elem = e;
        return oldElem;
    }
    swapElements(p, q) {
        let temp = p._elem;
        p._elem = q._elem;
        q._elem = temp;
    }
    insertRoot(e) {
        if (this._size > 0) {
            throw new Error("Invalid insertRoot(e) to non-empty tree");
        }
        this._root = new TPos(null, e, null, null);
        this._size++;
        return this._root;
    }
    insertLeft(p, e) {
        if (this.isExternal(p) || this.isInternal(p._left)) {
            throw new Error("Invalid insertLeft(p,e) operation");
        }
        let newLeft = new TPos(null, e, null, p);
        p._left = newLeft;
        this._size++;
        return newLeft;
    }
    insertRight(p, e) {
        if (this.isExternal(p) || this.isInternal(p._right)) {
            throw new Error("Invalid insertRight(p,e) operation");
        }
        let newRight = new TPos(null, e, null, p);
        p._right = newRight;
        this._size++;
        return newRight;
    }
    remove(p) {
        if (this.isExternal(p)) {
            throw new Error("Invalid remove(p): p is not internal");
        }
        let parent = p._parent;
        let remainingChild = null;
        if (this.isExternal(p._left)) {
            remainingChild = p._right;  // remainingChild stays in tree
        } else if (this.isExternal(p._right)) {
            remainingChild = p._left;   // remainingChild stays in tree
        } else {
            throw new Error("Invalid remove(p): both children are internal");
        }
        if (this.isRoot(p)) {
            this._root = remainingChild;  // remainingChild stays in tree
            if (this.isInternal(remainingChild)) {  // could be an empty tree after remove
                remainingChild._parent = null;
            }
        } else {
            if (this._isLeftChild(p)) {
                parent._left = remainingChild;  // remainingChild stays in tree
            } else {
                parent._right = remainingChild;  // remainingChild stays in tree
            }
            if (this.isInternal(remainingChild)) {
                remainingChild._parent = parent;
            }
        }
        this._size--;
        return remainingChild;  // remainingChild stays in tree
    }
}

exports.BinaryTree = BinaryTree;