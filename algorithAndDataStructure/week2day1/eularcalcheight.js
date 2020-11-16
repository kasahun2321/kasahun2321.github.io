"use strict";
/* eslint-disable*/

class Height extends EulerTour{
    visitExternal(t,p, result) {
        result[1]=0
     }
    visitPostOrder(t,p, result) {
        result[1]=Math.max(result[0],result[2]) +1;
     }

     height(t){
         return this.eulerTour(t,t.root());
     }
}

let mytree1 = new BinaryTree();
let myprinter1 = new Print();

myprinter1.print(mytree1);

let m = mytree1.insertRoot(300);
myprinter1.print(mytree1);

let m1 = mytree1.insertLeft(m, 200);
let s = mytree1.insertRight(m, 400);
myprinter1.print(mytree1);

let mayheight=new Height();

console.log(mayheight.height(mytree1));