
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
        //document.getElementById("demo").innerHTML =this._str.print();
        return this._str.print();
        
    }
    isEmpty() {
        return this._str.isEmpty();
    }
    top()
    {
        return this._str.top();
    }
    size()
    {
        this._str.size()
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


