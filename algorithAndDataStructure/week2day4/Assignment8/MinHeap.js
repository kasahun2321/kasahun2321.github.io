"use strict";
/* eslint-disable */

class HPos {
    constructor(elem, index) {
        this._elem = elem;
        this._index = index;
    }
    element() {
        return this._elem;
    }
}
class MinHeap {
    constructor(comparator) {
        this._size = 0;
        this._heap = new Array();
        this._compare = comparator;
    }
    isEmpty() {
        return this._size == 0;
    }
    size() {
        return this._size;
    }
    _less(pos1, pos2) { // bug 1 (type error on elements)
        return this._compare(pos1.element(), pos2.element()) < 0;
    }
    _greater(pos1, pos2) {
        return this._compare(pos1.element(), pos2.element()) > 0;
    }
    _lessOrEqual(pos1, pos2) {
        return this._compare(pos1.element(), pos2.element()) <= 0;
    }
    _swapItems(p, i) {
        let temp = this._heap[p];
        this._heap[p] = this._heap[i];
        this._heap[p]._index = p;
        this._heap[i] = temp;
        this._heap[i]._index = i;
    }
    _upHeap(i) {
        let parent = Math.floor(i/2);
        while (i > 1 && this._greater(this._heap[parent], this._heap[i])) {
            this._swapItems(parent, i);
            i = parent;
            parent = Math.floor(i/2);
        }
    }
    _indexOfMinKey(r) {
        let smallest = r;
        let left = r * 2;
        let right = left + 1;
        if (left <= this._size) {
            if (this._less(this._heap[left], this._heap[smallest])) {
                smallest = left;
            }
        }
        if (right <= this._size) {
            if (this._less(this._heap[right], this._heap[smallest])) {
                smallest = right; // bug 2 (left)
            }
        }
        return smallest;
    }
    _downHeap(i) {
        let property = false;
        while (!property) {
            let min = this._indexOfMinKey(i);
            if (min != i) {
                this._swapItems(min, i);
                i = min;
            } else {
                property = true;
            }
        }
    }
    minElem() {
        if (this.isEmpty()) {
            throw new Error("Invalid min() operation: Heap is empty");
        }
        return this._heap[1].element();
    }
    insertElem(elem) {
        this._size++;
        let newPos = new HPos(elem, this._size);
        this._heap[this._size] = newPos;
        this._upHeap(this._size);
        return newPos;
    }
    removeMin() {
        if (this.isEmpty()) {
            throw new Error("Invalid minKey() operation: Heap is empty");
        }
        let minElem = this.minElem();
        this._heap[1] = this._heap[this._size];
        this._size--;
        this._downHeap(1);
        return minElem;
    }
    replaceElem(pos, elem) {
        let i = pos._index;
        let oldElem = pos.element();
        pos._elem = elem;
        this._upHeap(i);
        this._downHeap(i);
    }
}
class Item  {
    constructor(key, elem) {
        this._key = key;
        this._elem = elem;
    }
    key() {
        return this._key;
    }
    element() {
        return this._elem;
    }
    compare(item1, item2) {
        return item1.key() - item2.key();
    }
}
class PriorityQueue {
    constructor(compare) {
        this._heap = new MinHeap(compare);
    }
    insertItem(k, elem) {
        this._heap.insertElem(new Item(k,elem));

    }
    removeMin() {
        return this._heap.removeMin();
    }
    minKey() {
        return this._heap.minElem().key();
    }
    minElement() {
        return this._heap.minElem();
    }
    size() {
        return this._heap.size();
    }
    isEmpty() {
        return this._heap.isEmpty();
    }
}