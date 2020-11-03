class APos {
    constructor(elem, index) {
        this._elem = elem;
        this._index = index;
    }
    element() {
        return this._elem;
    }
}
class Sequence {
    constructor(size) {
        this._arr = new Array(size);
        this._first = 0;
        this._last = 0;
    }
    // Rank Operations
    isEmpty() {
        return this._first == this._last;  // bug 5 missing this
    }
    size() {
        return this._index2rank(this._last);
    }
    _index2rank(i) {
        return (this._arr.length - this._first + i) % this._arr.length;
    }
    _rank2index(r) {
        return (this._first + r) % this._arr.length;
    }
    _isValidRank(r) {
        return (0 <= r) && (r < this.size());
    }
    rankOf(p) {
        let r = this._index2rank(p._index);
        return r;
    }
    atRank(r) {
        if (!this._isValidRank(r)) {
            throw new Error("Invalid Rank r=" + r)
        }
        let i = this._rank2index(r);
        return this._arr[i];
    }
    elemAtRank(r) {
        return this.atRank(r).element();
    }
    replaceAtRank(r, elem) {
        let p = this.atRank(r);
        let oldElem = p.element();
        p._elem = elem;
        return oldElem;
    }
    _causesOverflow(r, elem) {
        let sz = this.size();
        if (sz >= this._arr.length - 1) { // bug 1 (Math.ceil below)
            let newArr = new Array(Math.ceil(this._arr.length * 1.5));
            let i = 0;
            while (i < r) {
                let ix = this._rank2index(i);
                newArr[i] = this._arr[ix];
                newArr[i]._index = i;
                i++;
            }
            newArr[i] = new APos(elem, r);
            i++;
            while (i <= sz) { // bug 3 (missing =)
                let ix = this._rank2index(i - 1);
                newArr[i] = this._arr[ix];
                newArr[i]._index = i;
                i++; // bug 4 (missing)
            }
            this._arr = newArr;
            this._first = 0;
            this._last = sz + 1;
            return this._arr[r];
        }
        return null;
    }
    _shiftLeft(r1, r2) {
        var curr = this._rank2index(r1);
        for (let r = r1; r < r2; r++) {
            var next = this._rank2index(r + 1);
            this._arr[curr] = this._arr[next];
            this._arr[curr]._index = curr;
            curr = next;
        }
    }
    _shiftRight(r1, r2) {
        var curr = this._rank2index(r2);
        for (let r = r2; r > r1; r--) {
            var prev = this._rank2index(r - 1);
            this._arr[curr] = this._arr[prev];
            this._arr[curr].index = curr;
            curr = prev;
        }
    }
    _prevIndex(i) {
        return (this._arr.length + i - 1) % this._arr.length;
    }
    _nextIndex(i) {
        return (i + 1) % this._arr.length;
    }
    insertAtRank(r, elem) {
        let sz = this.size();
        if (r > sz) {  // don't allow empty slots
            throw new Error("Invalid rank in insertAtRank size=" + sz + "  rank=" + r);
        }
        let newPos = this._causesOverflow(r, elem);
        if (newPos == null) { // no overflow so need to insert elem
            if (r < sz / 2) {
                this._first = this._prevIndex(this._first);
                this._shiftLeft(0, r);
            } else {
                this._last = this._nextIndex(this._last);
                this._shiftRight(r, sz);
            }
            let ix = this._rank2index(r); // bug 2 (after shift)
            newPos = new APos(elem, ix);
            this._arr[ix] = newPos;
        }
        return newPos;
    }
    removeAtRank(r) {
        let deletedPos = this.atRank(r);
        let sz = this.size();
        if (r < sz / 2) {
            this._shiftRight(0, r);
            this._first = this._nextIndex(this._first);
        } else {
            this._shiftLeft(r, sz - 1);
            this._last = this._prevIndex(this._last);
        }
        deletedPos._index = -1;
        return deletedPos.element();
    }
    // List/Position based Operations
    first() {
        return this.atRank(0);
    }
    last() {
        return this.atRank(this.size() - 1);
    }
    isFirst(p) {
        return p == this.first();
    }
    isLast(p) {
        return p == this.last();
    }
    before(p) {
        if (this.isFirst(p)) {
            throw new Error("Invalid before(p) operation--Off the front");
        }
        let r = this.rankOf(p);
        return this.atRank(r - 1);
    }
    after(p) {
        if (this.isLast(p)) {
            throw new Error("Invalid after(p) operation--Off the end");
        }
        let r = this.rankOf(p);
        return this.atRank(r + 1);
    }
    replaceElement(p, elem) {
        let oldElem = p.element();
        p._elem = elem;
        return oldElem;
    }
    swapElements(p, q) {
        let temp = this.replaceElement(p, q.element());
        q.replaceElement(temp);
    }
    insertFirst(elem) {
        let newPos = this._causesOverflow(0, elem);
        if (newPos == null) {
            this._first = this._prevIndex(this._first);
            newPos = new APos(elem, this._first);
            this._arr[this._first] = newPos;
        }
        return newPos;
    }
    insertLast(elem) {
        let newPos = this.insertAtRank(this.size(), elem);
        return newPos;
    }
    insertAfter(p, elem) {
        let newPos = this.insertAtRank(this.rankOf(p) + 1, elem);
        return newPos;
    }
    insertBefore(p, elem) {
        let newPos = this.insertAtRank(this.rankOf(p), elem);
        return newPos;
    }
    remove(p) {
        return this.removeAtRank(this.rankOf(p));
    }
    toString() {
        let res = "[";
        let iter = this.iterator();
        while (iter.hasNext()) {
            res = res + iter.nextObject();
            if (iter.hasNext()) {
                res = res + ", ";
            }
        }
        return res + "]";
    }
    print() {
        console.log(this.toString());
        console.log("size =" + this.size() + "  N=" + this._arr.length
            + " first=" + this._first + " last=" + this._last + "\n");

    }
    iterator() {
        return new SeqIterator(this);
    }
    duplicate() {
        return new duplicate(this)
    }


    //     duplicate (A,B)
    //     {
    //         p=A.first();
    //         if (A.size()==B.size())
    //         {
    //             return false;
    //         }
    //         while(!A.islast(p))
    //         {
    //             a=p.element();
    //             q=B.first();
    //             haselement=false;
    //             if(!(a=q.element()))
    //             {
    //                 while(!B.islast())
    //                 {
    //                     q=B.after(q);
    //                     b=q.element();
    //                     if(a==b)
    //                     {
    //                         haselement=true;
    //                     }

    //                 }
    //                 if(!haselement)
    //                 {
    //                     return false;
    //                 }
    //             }
    //             else
    //             {
    //                 haselement=true;
    //                 p=A.after(p);
    //             }
    //         }



    //     }
}
class SeqIterator {
    constructor(seq) {
        this._seq = seq;
        this._size = seq.size();
        this._nextRank = 0;
    }
    hasNext() {
        return this._nextRank < this._size;
    }
    nextObject() {
        if (this._seq.size() != this._size) {
            throw new Error("Invalid Iterator: a Position has been inserted or deleted");
        }
        let nextElem = this._seq.atRank(this._nextRank).element();
        this._nextRank++;
        return nextElem;
    }
    reset() {
        this._nextRank = 0;
    }
}

var tst0 = new Sequence();
tst0.print();
var tst1 = new Sequence();
tst1.insertFirst(5);
tst1.print();
var tst2 = new Sequence();
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
tst2.insertAtRank(2, 2);
tst2.insertAtRank(4, 3.5);
tst2.insertAtRank(2, 1.5);
tst2.print();
tst2.insertAtRank(7, 8);
tst2.print();
console.log(tst2.elemAtRank(3));
console.log(tst2.first().element());
console.log(tst2.last().element());


//my code 
// class permutation {



// function permutation_fun(A, B) {
//     let p = A.first();
//     if (A.size() != B.size()) {
//         return false;
//     }
//     else {
//         while (!A.isLast(p)) {
//             let a = p.element();
//             let q = B.first();
//             let haselement = false;
//             if (!(a == q.element())) {
//                 while (!B.isLast(q)) {
//                     q = B.after(q);
//                     let b = q.element();
//                     if (a == b) {
//                         haselement = true;
//                         break;
//                     }

//                 }
//                 if (!haselement) {
//                     return false;
//                 }
//             }

//             else {
//                 haselement = true;
//                 p = A.after(p); 
//             }
//             return 0;

//         }
        
//     }

 

// }

// let A = new Sequence(5)
// console.log("a data new creates")
// A.insertFirst(12)
// A.insertLast(22)
// A.insertBefore(A.first(), 122)
// A.insertBefore(A.first(), 1233)
// //A.insertBefore(A.first(),234)
// //A.insertBefore(A.first(),123)
// A.print();





// let B = new Sequence(5);
// console.log("b sata created")
// B.insertFirst(40)
// B.insertLast(2000)
// B.insertAfter(B.first(), 120)
// B.insertAfter(B.first(), 150)
// B.insertAfter(B.first(), 1900)
// //B.insertBefore(A.first(),123)

// B.print()
// // let kar=new permutation ()
// permutation_fun(A, B);


function sum(l)
{
   
    if(l.size()==0)
    {
        throw new Error ("empty array")
    }
    return sumh(l,l.first())
}
function sumh(l,p)
{
    if(l.isLast(p))
    {
        return p.element();
    }
   let  x=sumh(l,l.after(p))// the . after method is not a function 
    return x+p.element();
}


console.log("the sum ",sum(tst2));