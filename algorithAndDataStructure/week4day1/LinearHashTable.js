const List = require('./DLinkedList.js');

class Item {
    constructor (key, elem) {
        this._key = key;
        this._elem = elem;
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
class LinearHashTable { // implemented as a linear hash table
    constructor () {
        this._table = [];
        this._size = 0;
        this._numChains = 3;
        for (let i=0; i< this._numChains; i++) {
            this._table[i] = new List.DLinkedList();
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
            ch = Math.floor(hc % (2*this._numChains));
        }
        return ch;
    }
    _findPosition(key, chain) { // returns internal object so must be private
        let chainList = this._table[chain];
        if (chainList.isEmpty()) {
            return null;
        }
        let p = chainList.first();
        while (!chainList.isLast(p) && p.element().key() != key) {
            p = chainList.after(p);
        }
        return p;
    }
    findElement(key) {
        let chain = this._hashFunction(key);
        let p = this._findPosition(key, chain);
        if (p == null || p.element().key() != key) {  // p.element() is an item (key,elem)
            return null;
        } else {
            return p.element().element(); // return the element from the item p.element()
        }
    }
    _splitNextChain() {
        let chainToSplit = this._numSplitChains;
        let splitChain = this._table[chainToSplit];
        this._numSplitChains++;
        let newChain = new List.DLinkedList();
        this._table.push(newChain);
        if (this._numSplitChains == this._numChains) {
            this._numChains += this._numSplitChains;
            this._numSplitChains = 0;
        }
        let size = splitChain.size();
        for (let i=0; i < size; i++) {
            let item = splitChain.remove(splitChain.first());
            let chain = this._hashFunction(item.key());
            if (chain != chainToSplit) { // remove from (old) splitChain and insert into newChain
                newChain.insertLast(item);
            } else { // keep in the same chain
                splitChain.insertLast(item);
            }
         }
    }
    insertItem(key, elem) {
        let chain = this._hashFunction(key);
        let p = this._findPosition(key, chain);
        if (p == null || p.element().key() != key) {  // p.element()=(key,elem) if key is not in table 
            this._size++;
            let totalChains = this._numChains + this._numSplitChains;
            if ((this._size/totalChains) >= 0.75) { // load factor
                this._splitNextChain();
                chain = this._hashFunction(key); // bug 2: if chain is split, then need to re-hash key
            }
            let newItem = new Item(key, elem);
            return this._table[chain].insertLast(newItem);
        } else {
            let item = p.element();
            item._elem = elem;  // replace the element of the item in position p
            return p;
        }
    }
    removeElement(k) {
        let chain = this._hashFunction(k);
        let p = this._findPosition(k, chain);
        if (p == null || p.element().key() != k) {  // p.element() is an item (key,elem)
            return null;
        } else {
            this._size--;
            return this._table[chain].remove(p).element();
        }
    }
    items() {
        return new HTIterator(this, 0);
    }
    keys() {
        return new HTIterator(this, 1);
    }
    elements() {
        return new HTIterator(this, 2);
    }
    print() {
        let totalChains = this._numChains + this._numSplitChains;
        console.log("chains=" + this._numChains + 
                        " splits=" + this._numSplitChains);
        console.log("{");
        for (let i=0; i<totalChains; i++) {
            console.log(this._table[i].toString());
        }
        console.log("}\n");
    }
}
class HTIterator {
    constructor(HT, type) {
        this._tab = HT._table;
        this._numChains = HT._numChains + HT._numSplitChains;
        this._type = type;
        this.reset();
    }
    hasNext() {
        return this._nextPos != null;
    }
    nextObject() {  // returns the next item in the Dictionary
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
        let item = currPos.element();
        if (this._type == 0) {
            return item;
        } else if (this._type == 1) {
            return item.key();
        } else {
            return item.element();
        }
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
        if (this._tab[0].isEmpty()) {
            this._nextChain();
        }
        // console.log("chain=" + this._currChain);
        if (this._currChain < this._numChains) {
            this._nextPos = this._chain.first();
        } else {
            this._nextPos = null;
        }
    }
}
exports.LinearHashTable = LinearHashTable;
