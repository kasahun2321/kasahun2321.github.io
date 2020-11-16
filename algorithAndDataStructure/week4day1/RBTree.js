const Tree = require('./BinarySearchTree.js');

var COLOR = ({RED: 0, BLACK: 1, DBLACK: 2});

class RedBlackTree extends Tree.BinarySearchTree {
    constructor() {
        super();
    }
    _rotateLeft(y) {
        if (this.isExternal(y) || this.isRoot(y)) {
            throw Error("Invalid Left Rotation: y cannot be the root");
        }
        let p = y._parent; // p must not be null
        let gp = p._parent;

        p._right = y._left; // bug 1 misspelling: left_
        if (this.isInternal(y._left)) { // bug 2 null pointer, so needed if
            y._left._parent = p;
        }

        y._left = p;
        p._parent = y;

        if (this.isRoot(p)) {
            this._root = y;
        } else if (gp._left == p) { // bug 7: typo/type error (= instead of ==)
            gp._left = y;
        } else {
            gp._right = y;
        }
        y._parent = gp;
    }
    _rotateRight(y) {
        if (this.isExternal(y) || this.isRoot(y)) {
            throw Error("Invalid Right Rotation: y cannot be the root");
        }
        let p = y._parent; // p must not be null
        let gp = p._parent;
        p._left = y._right;
        if (this.isInternal(y._right)) { // bug 2 (same as in _rotateLeft)
            y._right._parent = p;
        }

        y._right = p;
        p._parent = y;

        if (this.isRoot(p)) {
            this._root = y;
        } else if (gp._right == p) {
            gp._right = y;
        } else {
            gp._left = y;
        }
        y._parent = gp;
    }
    _restructure(z) {
        let p = z._parent;
        if (this._isLeftChild(z)) {
            if (this._isLeftChild(p)) {
                this._rotateRight(p);
            } else { // p is a right child
                this._rotateRight(z);
                this._rotateLeft(z);
            }
        } else { // z is a right child
            if (this._isLeftChild(p)) {
                this._rotateLeft(z);
                this._rotateRight(z);
            } else { // p is also a right child
                this._rotateLeft(p);
            }
        }
    }
    _splitRecolor(parent, z) {
        parent._color = COLOR.BLACK;
        this.sibling(parent)._color = COLOR.BLACK;
        let gp = parent._parent;
        gp._color = COLOR.RED;
        return gp;
    }
    _isDoubleRed(p) {
        if (this.isRoot(p)) {
            p._color = COLOR.BLACK;
            return false;
        } else {
            return this.isRed(p._parent); // bug 3: p._parent, not p
        }
    }
    _redChildOf(p) {
        let left = p._left;
        let right = p._right;
        let redChild = null;
        if (this.isRed(left)) {
            redChild = left;
            if (this._isLeftChild(p) && this.isRed(right)) {
                redChild = right;
            }
        } else if (this.isRed(right)) { // bug 4 right instead of left
            redChild = right;
        }
        return redChild;
    }
    _adjustment(y) {
        let p = y._parent;
        // console.log("p="+p.element().key());
        // console.log("y="+y.element().key());
        let newY = null;
        if (this._isLeftChild(y)) {
            newY = y._right;
            this._rotateRight(y);
        } else {
            newY = y._left;
            this._rotateLeft(y);
        }
        p._color = COLOR.RED;
        y._color = COLOR.BLACK;
        return newY;
    }
    _fusionRecolor(y, p, r) {
        y._color = COLOR.RED;
        if (this.isRed(p)) {
            p._color = COLOR.BLACK;
        } else {
            p._color = COLOR.DBLACK;
        }
        if (this.isInternal(r)) {
            r._color = COLOR.BLACK;
        }
        return p;
    }
    _isDoubleBlack(p) {
        return p._color == COLOR.DBLACK;
    }
    _removeDoubleBlack(y, r) {
        if (this.isExternal(r) || this._isDoubleBlack(r)) {
            if (this.isRed(y)) {  // case 3
                y = this._adjustment(y);
            }
            let p = y._parent;
            let z = this._redChildOf(y);
            if (this.isBlack(z)) { // case1: sibling has no red children
                r = this._fusionRecolor(y, p, r);
                if (this.isRoot(r)) {
                    r._color = COLOR.BLACK;
                } else {
                    y = this.sibling(r);
                    this._removeDoubleBlack(y, r);    // recursive rather than iterative
                }
            } else { // case 2: z is red corresponds to transfer in a 2-4 tree
                this._restructure(z);
                p._parent._color = p._color; // new parent of p is same color as previous parent of y
                p._color = COLOR.BLACK;
                z._color = COLOR.BLACK;
                if (this.isInternal(r)) { // bug 5: r could be null/external
                    r._color = COLOR.BLACK;
                }
            }
        }
    }
    isBlack(p) {
        return this.isExternal(p) || p._color == COLOR.BLACK;
    }
    isRed(p) {
        return this.isInternal(p) && p._color == COLOR.RED;
    }
    insertItem(k, e) {
        let q = super.insertItem(k, e);
        if (q != null) { // the item was inserted
            q._color = COLOR.RED;  // add the _color attribute to q
            let z = q;
            while (this._isDoubleRed(z)) {
                let p = z._parent;
                let w = this.sibling(p); // uncle
                if (this.isBlack(w)) { // case 1: uncle is black
                    let gp = p._parent;
                    this._restructure(z);
                    gp._color = COLOR.RED;
                    gp._parent._color = COLOR.BLACK; // new parent of gp
                    return q;
                } else { // case 2: uncle is red
                    z = this._splitRecolor(p, z);
                }
            }
        }
        return q;
    }
    removeElement(k) {
        if (this.isEmpty()) { // key k is not in the BST
            return null;
        }
        let v = this._findPos2Remove(k);
        if (v.element().key() != k) { // key k is not in the BST
            // console.log("Key not found " + k);
            return null;
        }
        let y = this.sibling(v);  // after deletion of v, y is sibling of r
        // console.log("Removing " + r.element().key());
        let r = this.remove(v);  // r is the child of v that remains in the tree
        if (this.isBlack(v) && this.isExternal(r)) { // r the remaining child is black
            this._removeDoubleBlack(y, r);
        } else {
            r._color = COLOR.BLACK; // r has to be a red child
        }
        return v.element().element();
    }
}
exports.RedBlackTree = RedBlackTree;