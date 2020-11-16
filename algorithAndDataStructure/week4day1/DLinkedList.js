class NPos {
    constructor (elem, prev, next) {
        // inserts this new node between prev and next
        this._elem = elem;
        this._prev = prev;
        this._next = next;
        if (prev != null) {
            prev._next = this;
        }
        if (next != null) {
            next._prev = this;
        }
    }
    element() {
        return this._elem;
    }
}
class DLinkedList {
    constructor() {
        this._header = new NPos(null, null, null);
        this._trailer = new NPos(null, this._header, null);
        this._header._next = this._trailer;
        this._size = 0;
        this._emptyNodes = [];
    }
    isFirst(p) {
        return (this._header == p._prev);
    }
    isLast(p) {
        return (this._trailer == p._next);
    }
    size() {
        return this._size;
    }
    isEmpty() {
        return this._size == 0;
    }
    first() {
        if (this.isEmpty()) {
            throw new Error("Invalid first() on an empty List");
        } else {
            return this._header._next;
        }
    }
    last() {
        if (this.isEmpty()) {
            throw new Error("Invalid last() on an empty List");
        } else {
            return this._trailer._prev;
        }
    }
    after(p) {
        if (p._next == this._trailer) {
            throw new Error("Invalid after(p)--off the end");
        }
        return p._next;
    }
    before(p) {
        if (p._prev == this._header) {
            throw new Error("Invalid before(p)--off the front");
        }
        return p._prev;
    }
    replaceElement(p, elem) {
        let oldElem = p._elem;
        p._elem = elem;
        return oldElem;
    }
    swapElements(p, q) {
        let temp = p._elem;
        p._elem = q._elem;
        q._elem = temp;
    }
    _newPosition(elem, prev, next) {
        let newNode = null;
        if (this._emptyNodes.length > 0) {
            newNode = this._emptyNodes.pop(); // reuse a node that was previously removed
            newNode._prev = prev;
            prev._next = newNode;
            newNode._next = next;
            next._prev = newNode;
            newNode._elem = elem;
        } else {
            newNode = new NPos(elem, prev, next);
        }
    }
    insertAfter(p, elem) {
        let newNode = this._newPosition(elem, p, p._next);
        this._size++;
        return newNode;
    }
    insertBefore(p, elem) {
        let newNode = this._newPosition(elem, p._prev, p);
        this._size++;
        return newNode;
    }
    insertFirst(elem) {
        let newNode = this._newPosition(elem, this._header, this._header._next);
        this._size++;
        return newNode;
    }
    insertLast(elem) {
        let newNode = this._newPosition(elem, this._trailer._prev, this._trailer);
        this._size++;
        return newNode;
    }
    remove(p) {
        p._prev._next = p._next;
        p._next._prev = p._prev;
        let elem = p.element();
        p._prev = null;  // should no longer reference a Position in the List
        p._next = null;
        p._elem = null;
        this._emptyNodes.push(p);  // save p for later re-use
        this._size--;
        return elem;
    }
    toString() {
        let res = "[";
        let iter = this.elements();
        while (iter.hasNext()) {
            res = res + iter.nextObject();
            if (iter.hasNext()) {
                res = res + ", ";
            }
        }
        res = res + "]";
        return res;
    }
    print() {
        console.log(this.toString());
    }
    elements() {
        return new ListIterator(this, 1);
    }
    positions() {
        return new ListIterator(this, 0);
    }
}
class ListIterator {
    constructor(seq, type) {
        this._seq = seq;
        this._type = type;
        this.reset();
    }
    hasNext() {
        return this._nextPos != null;
    }
    nextObject() {
        if (this._nextPos._prev == null) { // bug 2
            throw new Error("Invalid Position in Iterator: the Position has been deleted");
        }
        let currPos = this._nextPos;
        if (this._seq.isLast(currPos)) { // move to next position in list
            this._nextPos = null;
        } else {
            this._nextPos = this._seq.after(currPos);
        }
        if (this._type == 1) {
            return currPos.element(); // element iterator
        } else {
            return currPos;  // position iterator
        }
    }
    reset() {
        if (this._seq.isEmpty()) {
            this._nextPos = null;
        } else {
            this._nextPos = this._seq.first();
        }
    }
}
exports.DLinkedList = DLinkedList;
