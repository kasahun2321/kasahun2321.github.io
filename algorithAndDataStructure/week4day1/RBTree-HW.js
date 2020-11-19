const Tree = require('./RBTree.js');

class EulerTour {
    visitExternal(T, p, result) { };
    visitPreOrder(T, p, result) { };
    visitInOrder(T, p, result) { };
    visitPostOrder(T, p, result) { };
    eulerTour(T, p) {
        let result = new Array(3);
        if (T.isExternal(p)) {
            this.visitExternal(T, p, result);
        } else {
            this.visitPreOrder(T, p, result);
            result[0] = this.eulerTour(T, T.leftChild(p));
            this.visitInOrder(T, p, result);
            result[2] = this.eulerTour(T, T.rightChild(p));
            this.visitPostOrder(T, p, result);
        }
        return result[1];
    }
}
class PrintInOrder {  // using an iterator
    constructor(T) {
        this._iter = T.items();
    }
    print() {
        this._iter.reset();
        let res = "[";
        while (this._iter.hasNext()) {
            let next = this._iter.nextObject();
            if (this._iter.hasNext()) {
                res = res + next.toString() + " ";
            } else {
                res = res + next.toString();
            }
        }
        console.log(res + "]");
    }
}
class Print extends EulerTour {
    visitExternal(T, v, result) {
        result[1] = "";
    }
    visitPostOrder(T, v, result) {
        result[1] = "(" + result[0] + v.element().key() +"," + this.color(v._color) + result[2] +")";
    }
    color(col) {
        return col==0 ? "R" : "B";
    }
    print(T) {
        if (T.size() > 0) {
            console.log("Root="+T.root().element().key());
        }
        let res = this.eulerTour(T, T.root());
        console.log("[" + res + "]\n");
    }
}
function height(T) {
    // your code goes here Hint: you need a helper
   
        
        return Hhelper(T,T.root());
}
function Hhelper(T,p)
{
    if (T.isExternal(p)){return 0};

    return Math.max(Hhelper(T,T.leftChild(p)), Hhelper(T,T.rightChild(p))) + 1;
}
function blackHeight(T) {
    // your code goes here Hint: you need a helper
    
    return blackhelper(T,T.root());
}
function blackhelper(T,p)
{
    if(T.isExternal(p))
    {
        return 0;
    }
 lh=blackhelper(T,T.leftChild(p));
 //rh=blackhelper(T,T.rightChild(p));
 if(T.isRed(p))
 {
     return lh;
 }
 return lh+1
}
class Height extends EulerTour {
        // add your code here, i.e., override methods from EulerTour class
    height(T) {
        return this.eulerTour(T, T.root());
    }
    visitExternal(t,p, result) {
        result[1]=0
     }
    visitPostOrder(t,p, result) {
        result[1]=Math.max(result[0],result[2]) +1;
     }
}

class BlackHeight extends EulerTour {
        // add your code here, i.e., override methods from EulerTour class
    height(T) {
        return this.eulerTour(T, T.root());
    }
    visitExternal(t,p, result) {
        result[1]=0
     }
    visitPostOrder(t,p, result) {

        if(t.isRed(p)){
        result[1]=result[2];
        }
        else
      result[1]= result[2]+1
     }

    
}
// Test cases follow here
var t0 = new Tree.RedBlackTree();

var printer = new Print();

printer.print(t0);
var h = new Height();

var t0 = new Tree.RedBlackTree();
//the eulaor class object defination 
printer.print(t0);
var h = new Height();

var bh = new BlackHeight();

console.log("height should be 0");
console.log("height="+ height(t0));
console.log("height by eular tour="+ h.height(t0)+"\n"); // should be 0
console.log("black height should be 0");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by elulor tour ="+ bh.height(t0)+"\n"); // should be 0
t0.insertItem(50, 100);
printer.print(t0);
console.log("height should be 1");
console.log("height="+ height(t0));
console.log("height by elulor tour="+ h.height(t0)+"\n");
console.log("black height should be 1");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n"); 

t0.insertItem(150, 100);
t0.insertItem(100, 100);
console.log("height should be 2");
console.log("height="+ height(t0));
console.log("height by eulor tour="+ h.height(t0)+"\n");
console.log("black height should be 1");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
t0.insertItem(200, 100);
t0.insertItem(450, 100);
t0.insertItem(350, 100);
t0.insertItem(250, 100);
t0.insertItem(650, 100);
t0.insertItem(550, 100);
printer.print(t0);
console.log("height should be 4");
console.log("height="+ height(t0));
console.log("height="+ h.height(t0)+"\n");
console.log("black height should be 2");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");

t0.insertItem(500, 120);
console.log("find key= 200, element="+ t0.findElement(200));
console.log("find key= 450, element="+ t0.findElement(450));
console.log("find key= 500, element="+ t0.findElement(500));
t0.insertItem(500, 130);
console.log("find key= 500, element="+ t0.findElement(500));
t0.insertItem(500, 100);
console.log("height should be 5");
console.log("height="+ height(t0));
console.log("height="+ h.height(t0)+"\n");
console.log("black height should be 3");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
let inOrderPrinter = new PrintInOrder(t0);
inOrderPrinter.print();
printer.print(t0);

console.log("remove=50 elem="+ t0.removeElement(50) +"\n");
console.log("height should be 4");
console.log("height="+ height(t0));
console.log("height by eulor tour="+ h.height(t0)+"\n");
console.log("black height should be 3");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
console.log("remove=50 elem="+ t0.removeElement(50) +"\n");
console.log("height should be 4");
console.log("height="+ height(t0));
console.log("height by eulor tour="+ h.height(t0)+"\n");
console.log("black height should be 3");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
console.log("remove=350 elem="+ t0.removeElement(350) +"\n");

console.log("height should be 4");
console.log("height="+ height(t0));
console.log("height by eulor tour="+ h.height(t0)+"\n");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
console.log("black height should be 3");
console.log("remove=200 elem="+ t0.removeElement(200) +"\n");

console.log("height should be 4");
console.log("height="+ height(t0));
console.log("height by eulor tour="+ h.height(t0)+"\n");
console.log("black height should be 2");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
console.log("remove=150 elem="+ t0.removeElement(150) +"\n");

console.log("height should be 4");
console.log("height="+ height(t0));
console.log("heigh by eulor tour="+ h.height(t0)+"\n");
console.log("black height should be 2");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
console.log("test of adjustment next");
console.log("remove=250 elem="+ t0.removeElement(250) +"\n");

console.log("height should be 3");
console.log("height="+ height(t0));
console.log("height by eulor tour="+ h.height(t0)+"\n");
console.log("black height should be 2");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
t0.insertItem(25, 100);
t0.insertItem(50, 100); // double rotation
t0.insertItem(200, 100); // rotate right
console.log("height should be 4");
console.log("height="+ height(t0));
console.log("height by eulor tour="+ h.height(t0)+"\n");
console.log("black height should be 2");
console.log("black-height="+ blackHeight(t0));
console.log("black-height by eulor tour="+ bh.height(t0)+"\n");
inOrderPrinter.print();
printer.print(t0);
console.log("the height of the tree by me")
//printer.print(height(t0))
