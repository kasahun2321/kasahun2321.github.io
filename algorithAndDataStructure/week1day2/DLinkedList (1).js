class NPos {//Npos means N position 
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
class DLinkedList {
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
var tst0 = new DLinkedList();//creat new empty object
tst0.print();//prints empty object
var tst1 = new DLinkedList();
tst1.insertFirst(5);
tst1.print();
var tst2 = new DLinkedList();
tst2.print();
tst2.insertFirst(1);
tst2.print();
tst2.insertLast(3);
tst2.print();
tst2.insertAfter(tst2.before(tst2.after(tst2.first())), 2);
tst2.print();
tst2.remove(tst2.after(tst2.first()));
tst2.print();
tst2.insertFirst(0);
tst2.insertLast(4);
tst2.insertAfter(tst2.after(tst2.first()), 2);
tst2.print();
console.log(tst2.after(tst2.after(tst2.after(tst2.first()))).element());
console.log("first = " + tst2.first().element());
console.log("last  = " + tst2.last().element());






/**
   * 
   * @param {any thing } p 
   * @returns {node} either object or number
   * 
   */

function findMiddle(elem) {

    // let p = this._header.next;
    // let q = this._trailer.prev;

    let p = elem.first();
    let q = elem.last();
    if (elem.isEmpty()) {
        throw new Error("nod middle")
        // p = elem.first();
        // q = elem.last();
    }
    while (p != q && elem.after(p) != q)
        p = elem.after(p);
    q = elem.before(q);
    return q._elem;
}

console.log("THE MIDDLE ELEMENT", findMiddle(tst2))




class stack {
    constructor() {
        this._str = new DLinkedList()
    }
    push(e) {
        this._str.insertFirst(e)
    }
    pop() {
        return this._str.remove(this._str.first())
    }
    out() {
        // document.getElementById("demo").innerHTML =this._str.print();
        return this._str.print();
        
    }
    isEmpty() {
        return this._str.isEmpty();
    }size() {
        return this._str.size();
    }
    
}

let stkobj = new stack()
stkobj.push(23)
stkobj.push(33)
stkobj.push(43)
stkobj.out();
stkobj.pop()
console.log("stack after pop")
stkobj.out();






class quee {
    constructor() {
        this._queerow = new DLinkedList();
    }
    enquee(e) {
        this._queerow.insertLast(e)
    }
    /**
     * 
     * @param {object or any data} e 
     * @return {array or llinked lisr}
     */
    deque() {
        return this._queerow.remove(this._queerow.first())
    }
    printout() {
        return this._queerow.print();
    }

}

let queobj = new quee()
queobj.enquee(12);
queobj.enquee(32);
queobj.enquee(122);
queobj.printout();
queobj.deque();
queobj.printout();

/**
 * implementation 
 * 
 */
 class twostackquee {
    constructor() {
         this.inbox = new stack(),
            this.outbox = new stack()

    }
    
//if bothe inbox and outbox are empty throw an error

    enquee(elem) {
        // if (this.inbox.isEmpty()) {
        //     this.inbox.push(elem);
        // }
        // else {
        //      throw new Error("stack overflow")
        // }
        this.inbox.push(elem);
    }
    deque() {

        if (this.outbox.isEmpty()) {
            while (!this.inbox.isEmpty()) {
                this.outbox.push(this.inbox.pop())
            }

        }
        return this.outbox.pop();


    }
    // size()
    // {
    //     return this.deque().size()+this.enquee().size()
    // }

}
//moch data testing data
let stack2q = new twostackquee()
stack2q.enquee(12);
stack2q.enquee(192);
stack2q.enquee(102);
stack2q.enquee(152);
console.log(stack2q);
stack2q.deque();
console.log(stack2q);


// function rankbasedsum(l)
// {
//     return sumhelp(l,0)
// }
// function sumhelp(l,r)
// {
//     let sum
//     if(r<=l.lenght)
//     {

//          sum=sumhelp(l,r+1)
//     }
//     return sum+l.element(r)
// }

// let arrays=[1,2,3,4,5]

// console.log(rankbasedsum(arrays))

function suml(elem) {

    

    let p = elem.first();
    if (elem.isEmpty()) {
        return "array is empty nothing to add";
      
    }
   return sumhelhelper(elem,p)
}
function sumhelhelper(elem,p)
{
    let sum=0;
    while (elem.after(p) < elem.size() )
    {
        sum+=p.element()
    p = elem.after(p);

   sumhelhelper(elem,p,q)
}
return sum;
}

console.log("THE sum of the array", suml(tst2))