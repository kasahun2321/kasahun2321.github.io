class queedouble {
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

let queobj2 = new queedouble()
queobj2.enquee(12);
queobj2.enquee(32);
queobj2.enquee(122);
queobj2.printout();
queobj2.deque();
queobj2.printout();
