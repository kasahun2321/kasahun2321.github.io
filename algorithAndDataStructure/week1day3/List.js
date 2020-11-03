class NPos {
    constructor(elem, prev, next) {
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
class List {
    constructor() {
        this._header = new NPos(null, null, null);
        this._trailer = new NPos(null, this._header, null);
        this._header._next = this._trailer;
        this._size = 0;
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
        p._elem = _elem;
        return oldElem;
    }
    swapElements(p, q) {
        let temp = p._elem;
        p._elem = q._elem;
        q._elem = temp;
    }
    insertAfter(p, elem) {
        let newNode = new NPos(elem, p, p._next);
        this._size++;
        return newNode;
    }
    insertBefore(p, elem) {
        let newNode = new NPos(elem, p._prev, p);
        this._size++;
        return newNode;
    }
    insertFirst(elem) {
        let newNode = new NPos(elem, this._header, this._header._next);
        this._size++;
        return newNode;
    }
    insertLast(elem) {
        let newNode = new NPos(elem, this._trailer._prev, this._trailer);
        this._size++;
        return newNode;
    }
    remove(p) {
        p._prev._next = p._next;
        p._next._prev = p._prev;
        p._prev = null;  // should no longer reference a Position in the List
        p._next = null;
        this._size--;
    }
    // Rank/Random Access Operations
    _isValidRank(r) {
        return (r < this._size);
    }
    atRank(r) {
        if (!this._isValidRank(r)) {
            throw new Error("Invalid rank " + r)
        }
        let i = 0;
        let p = this.first();
        while (i < r) {
            p = this.after(p);
            i++;
        }
        return p;
    }
    rankOf(p) {
        let r = 0;
        let q = this.first();
        while (q != p) {
            q = this.after(q);
            r++;
        }
        return r;
    }
    elemAtRank(r) {
        let p = this.atRank(r);
        return p._elem;
    }
    replaceAtRank(r, e) {
        let p = this.atRank(r);
        let oldElem = p.element();
        p._elem = e;
        return oldElem;
    }
    insertAtRank(r, e) {
        let p = null;
        if (r == this._size) { // bug 1
            p = this.insertLast(e);
        } else {
            p = this.atRank(r);
            p = this.insertBefore(p, e); // generally not good
        }
        return p;
    }
    removeAtRank(r) {
        let p = this.atRank(r);
        this.remove(p);  // generally not good to call public methods with side-effects
        return p.element();
    }
    print() {
        let res = "[";
        let iter = this.interator();
        while (iter.hasNext()) {
            res = res + iter.nextObject();
            if (iter.hasNext()) {
                res = res + ", ";
            }
        }
        console.log(res + "]\n");
    }
    interator() {
        return new ListIterator(this);
    }
}
class ListIterator {
    constructor(seq) {
        this._seq = seq;
        this.reset();
    }
    hasNext() {
        return this._nextPos != null;
    }
    nextObject() {
        if (this._nextPos._prev == null) { // bug 2
            throw new Error("Invalid Position in Iterator: the Position has been deleted");
        }
        let nextElem = this._nextPos.element();
        if (this._seq.isLast(this._nextPos)) {
            this._nextPos = null;
        } else {
            this._nextPos = this._seq.after(this._nextPos);
        }
        return nextElem;
    }
    reset() {
        if (this._seq.isEmpty()) {
            this._nextPos = null;
        } else {
            this._nextPos = this._seq.first();
        }
    }
}
var tst0 = new List();
tst0.print();
var tst1 = new List();
tst1.insertFirst(5);
tst1.print();
var tst2 = new List();
tst2.print();
tst2.insertFirst(1);
tst2.print();
tst2.insertLast(3);
tst2.print();
tst2.insertAtRank(1, 2);
tst2.print();
tst2.removeAtRank(1);
tst2.print();
tst2.insertFirst(0);
tst2.insertLast(4);
tst2.insertLast(5);tst2.insertLast(4);tst2.insertLast(7);
tst2.insertAtRank(2, 2);

tst2.print();
console.log(tst2.elemAtRank(3));
console.log("first = " + tst2.first().element());
console.log("last  = " + tst2.last().element());


function removeDuplicate(L) {
    let p = L.first()
    while (!L.isLast(p)) {
        let e = p.element()
        remove_Duplicate_Helper(e, L.after(p), L)
        if (!L.isLast(p)) {
            p = L.after(p)
        }
  
    }
  
 }
  
 function remove_Duplicate_Helper(e, p, L) {
    while (!L.isLast(p)) {
        let q = L.after(p)
        if (e === p.element()) {
            L.remove(p)}
             p = q
        
    }
    
    
    if (e === p.element()) {
        L.remove(p)}
  
 }
 
 console.log("before duplicate is not removed")
 tst2.print()
 
 console.log("after duplicate is removed is removed");
  
 removeDuplicate(tst2)
 tst2.print()
