class CPos {
    constructor(key, elem, next) {
        // inserts this new node between prev and next
        this._key = key;
        this._elem = elem;
        this._next = next;
    }
    key() {
        return this._key;
    }
    element() {
        return this._elem;
    }
}
class Chain {
    constructor() {
        this._header = new CPos(null, null, null);
        this._size = 0;
    }
    isLast(p) {
        return (p._next == null);
    }
    isOffEnd(p) {
        return p == null;
    }
    size() {
        return this._size;
    }
    isEmpty() {
        return this._size == 0;
    }
    first() {
        return this._header._next;
    }
    after(p) {
        return p._next;
    }
    replaceElement(p, elem) {
        let oldElem = p._elem;
        p._elem = elem;
        return oldElem;
    }
    insertAfter(p, newNode) {
        if (p == null) {
            p = this._header; // insert first
        }
        newNode._next = p._next; // bug 1 missing _next
        p._next = newNode;
        this._size++;
        return newNode;
    }
    _findPrevPos(key) { // returns internal object so must be private
        let p = this.first();
        let prev = this._header;
        while (!this.isOffEnd(p) && p.key() != key) {
            prev = p;
            p = this.after(p);
        }
        return prev;
    }
    insertInChain(key, elem) {
        let prev = this._findPrevPos(key);
        if (this.isLast(prev) || prev._next.key() != key) {
            let newNode = new CPos(key, elem, null);
            this.insertAfter(prev, newNode);
            return newNode;  // different types returned
        } else {
            return this.replaceElement(prev._next, elem);
        }
    }
    removeNext(prev) {
        let p = prev._next; // the node to be removed
        prev._next = p._next;
        p._next = null;// should no longer reference a Position in Chain
        this._size--;
        return p;
    }
    removeElem(key) {
        let prev = this._findPrevPos(key);
        if (this.isLast(prev) || prev._next.key() != key) {
            return null;
        } else {
            let e = prev._next.element();
            this.removeNext(prev);
            return e;
        }
    }
    findElem(key) {
        let prev = this._findPrevPos(key);
        if (this.isLast(prev) || prev._next.key() != key) {
            return null;
        } else {
            let e = prev._next.element();
            this.removeNext(prev);
            return e;
        }
    }
    toString() {
        let p = this.first();
        let str = "[";
        while (!this.isOffEnd(p)) {
            str = str + "(" + p.key() + "," + p.element() + ")";
            p = this.after(p);
        }
        return str + "]";
    }
}
class HT_Dictionary { // implemented as a linear hash table
    constructor() {
        this._table = [];
        this._size = 0;
        this._numChains = 3;
        for (let i = 0; i < this._numChains; i++) {
            this._table[i] = new Chain();
        }
        this._numSplitChains = 0;
    }
    hashCode(k) {
        return k; // override or replace if needed (works if k is a positive integer)
    }
    _hashFunction(k) {
        let hc = this.hashCode(k);
        let ch = Math.floor(hc % this._numChains);
        if (ch < this._numSplitChains) {
            ch = Math.floor(hc % (2 * this._numChains));
        }
        return ch;
    }
    findElement(k) {
        let chain = this._hashFunction(k);
        return this._table[chain].findElem(k);
    }
    _splitNextChain() {
        let chainToSplit = this._numSplitChains;
        let theChain = this._table[chainToSplit];
        this._numSplitChains++;
        let newChain = new Chain();
        this._table.push(newChain);
        if (this._numSplitChains == this._numChains) {
            this._numChains += this._numSplitChains;
            this._numSplitChains = 0;
        }
        // console.log("chain to split " + chainToSplit);
        if (theChain.size() > 0) {
            let prev = theChain._header;
            let curr = theChain.first();
            let prevNewItem = newChain._header;
            while (!theChain.isOffEnd(curr)) {
                let chain = this._hashFunction(curr.key());
                if (chain != chainToSplit) {
                    theChain.removeNext(prev); // removes curr
                    prevNewItem = newChain.insertAfter(prevNewItem, curr);
                } else {
                    prev = curr;
                }
                curr = theChain.after(prev);
            }
        }
    }
    insertItem(k, e) {
        let oldElem = this.findElement(k);
        if (oldElem == null) {
            this._size++;
            let totalChains = this._numChains + this._numSplitChains;
            if ((this._size / totalChains) >= 0.75) { // load factor
                this._splitNextChain();
            }
        }
        let chain = this._hashFunction(k); // bug 2: missing
        return this._table[chain].insertInChain(k, e);
    }
    removeElement(k) {
        let chain = this._hashFunction(k);
        let oldElem = this._table[chain].findElem(k);
        if (oldElem != null) {
            this._size--;
            return this._table[chain].removeElem(k);
        }
    }
    iterator() {
        return new HTIterator(this);
    }
    print() {
        let totalChains = this._numChains + this._numSplitChains;
        console.log("chains=" + this._numChains +
            " splits=" + this._numSplitChains);
        console.log("{");
        for (let i = 0; i < totalChains; i++) {
            console.log(this._table[i].toString());
        }
        console.log("}\n");
    }
}
class HTIterator {
    constructor(HT) {
        this._tab = HT._table;
        this._numChains = HT._numChains + HT._numSplitChains;
        this.reset();
    }
    hasNext() {
        return this._nextPos != null;
    }
    nextObject() {
        let currPos = this._nextPos;
        if (this._chain.isLast(this._nextPos)) {
            this._nextChain();
            if (this._currChain < this._numChains) {
                this._nextPos = this._chain.first();
            } else {
                this._nextPos = null;
            }
        } else {
            this._nextPos = this._chain.after(this._nextPos);
        }
        return currPos;
    }
    _nextChain() {
        let ch = this._currChain + 1;
        while (ch < this._numChains && this._tab[ch].isEmpty()) {
            ch++;
        }
        this._chain = this._tab[ch];
        this._currChain = ch;
    }
    reset() {
        this._chain = this._tab[0];
        this._currChain = 0;
        this._nextChain();
        if (this._currChain < this._numChains) {
            this._nextPos = this._chain.first();
        } else {
            this._nextPos = null;
        }
    }
}
function genData(n, k) {
    // n is the number of votes cast and k is the number of candidates
    let dat = new Array(n);
    for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * 10) % k + 1;
        dat[i] = rand;
    }
    return dat;
}
// function findWinners(dat) {
//     //mergesort(dat)
//     let D = new HT_Dictionary();
//     // your code goes here
//     let iter = D.iterator();
//     let max = 0;
//     let count=0;
//     let curid = dat.first().element();
//     let winners = [];
//     while (iter.hasNext()) {
//         // your code goes here
//         let id = iter.nextObject();
//         if (id = curid)
//         {
//             count=count+1;

//         }
//         else 
//         {
//             if(count>max)
//             {
//                 max=count;
//                 winners=curid;
//             }
//             curid=id
//             count=1
//         }
//     }
//     if (count>max){
//     max=count;
//     winners=curid
//     console.log(winners);}
// }
// let dat = genData(100, 7);
// console.log(dat);
// findWinners(dat);
function findWinners(dat) {
    let D = new HT_Dictionary();
   let k = dat[0];
   D.insertItem(k,1)     
    for(let i=1; i< dat.length;i++){
       k = dat[i];      
        let cnt = D.findElement(k);
        if(cnt === null){
            D.insertItem(k,1);
        }else{
            cnt =cnt+1;
            D.insertItem(k,cnt);
        }
    }
    console.log("this is me kasahun ",D)
    let iter = D.iterator();
    let max = 0;
    let winners = [];
    while (iter.hasNext()) {
        let obj =  iter.nextObject();
        let count = obj.element();
        let keys = obj.key();
        console.log(`key ${obj.key()},value ${obj.element()}`)
 
        if(count > max){
            max = count;
            winners =[];
            winners.push(keys);
        }
    }
    console.log("best",winners);
}
let dat = genData(14, 7);
let ht = new HT_Dictionary();
console.log(dat);
findWinners(dat);
