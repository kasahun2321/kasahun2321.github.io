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
console.log("the result from que class",queobj.printout());

