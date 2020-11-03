class TPos {
    constructor(elem, parent, left, right) {
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
        p._elem = e;
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
        this._root = new TPos(e, null, null, null);
        this._size++;
        return this._root;
    }
    insertLeft(p, e) {
        if (this.isExternal(p) || this.isInternal(p._left)) {
            throw new Error("Invalid insertLeft(p,e) operation");
        }
        let newLeft = new TPos(e, p, null, null);
        p._left = newLeft;
        this._size++;
        return newLeft;
    }
    insertRight(p, e) {
        if (this.isExternal(p) || this.isInternal(p._right)) {
            throw new Error("Invalid insertRight(p,e) operation");
        }
        let newRight = new TPos(e, p, null, null);
        p._right = newRight;
        this._size++;
        return newRight;
    }
    remove(p) {
        if (this.isExternal(p)) {
            throw new Error("Invalid remove(p): p is not internal");
        }
        let parent = p._parent;
        let child = null;
        if (this.isExternal(p._left)) {
            child = p._right;
        } else if (this.isExternal(p._right)) {
            child = p._left;
        } else {
            throw new Error("Invalid remove(p): both children are internal");
        }
        if (this.isRoot(p)) {
            this._root = child;
            child._parent = null;
        } else {
            if (this._isLeftChild(p)) {
                parent._left = child;
            } else {
                parent._right = child;
            }
            if (this.isInternal(child)) {
                child._parent = parent;
            }
        }
        this._size--;
        return child;
    }
}

class EulerTour {
    visitExternal(p, result) { }
    visitPreOrder(p, result) { }
    visitInOrder(p, result) { }
    visitPostOrder(p, result) { }
    eulerTour(T, p) {
        let result = new Array(3);
        if (T.isExternal(p)) {
            this.visitExternal(T, p, result);
        } else {
            this.visitPreOrder(T, p, result);
            result[0] = this.eulerTour(T, T.leftChild(p));
            this.visitInOrder(T, p, result);
            result[2] = this.eulerTour(T, T.rightChild(p));
            this.visitPostOrder(T, p, result);
        }
        return result[1];
    }
}
class Print extends EulerTour {
    visitExternal(T, v, result) {
        result[1] = "";
    }
    visitPostOrder(T, v, result) {
        result[1] = "(" + result[0] + v.element() + result[2] +")";
    }
    print(T) {
        if (T.size() > 0) {
            console.log("Root="+T.root().element());
        }
        let res = this.eulerTour(T, T.root());
        console.log("[" + res + "]\n");
    }
}



var t0 = new BinaryTree();

var printer = new Print();

printer.print(t0);

let r = t0.insertRoot(300);
printer.print(t0);

let l1 = t0.insertLeft(r, 200);
let r1 = t0.insertRight(r, 400);
printer.print(t0);
t0.insertRight(l1, 250);
l1 = t0.insertLeft(l1, 100);
t0.insertRight(l1, 150);
l1 = t0.insertLeft(l1, 50);
l1 = t0.insertLeft(r1, 350);
r1 = t0.insertRight(r1, 500);
t0.insertLeft(r1, 450);
r1 = t0.insertRight(r1, 600);
t0.insertLeft(r1, 550);
r1 = t0.insertRight(r1, 800);
printer.print(t0);
t0.insertLeft(r1, 700);
printer.print(t0);


