"use strict";
/* eslint-disable*/
{
function sum(t){
    return sumHelper(t,t.root());
}

function sumHelper(t,p){
   

    if(t.isExternal(p)){
        return 0;
    }
    else{
       let  sum=p.element()
        let left=sumHelper(t,t.leftChild(p));
        let right=sumHelper(t,t.rightChild(p));
        //return sum + left.element() + right.element();
        return sum + left + right;
    }

}

let t0 = new BinaryTree();

let printer = new Print();

printer.print(t0);

let r = t0.insertRoot(300);
printer.print(t0);

let l1 = t0.insertLeft(r, 200);
let r1 = t0.insertRight(r, 400);
printer.print(t0);
t0.insertRight(l1, 250);
l1 = t0.insertLeft(l1, 100);
t0.insertRight(l1, 150);
l1 = t0.insertLeft(l1, 50);
l1 = t0.insertLeft(r1, 350);
r1 = t0.insertRight(r1, 500);
t0.insertLeft(r1, 450);
r1 = t0.insertRight(r1, 600);
t0.insertLeft(r1, 550);
r1 = t0.insertRight(r1, 800);
printer.print(t0);
t0.insertLeft(r1, 700);
printer.print(t0);


console.log("the sum is ",sum(t0));
}
///hung soln

// function sum(t){​​​​​
//     return sumHelper(t, t.root());
//     }​​​​​
//     function sumHelper(t, p){​​​​​
//     if(t.isExternal(p)){​​​​​
//     return 0;
//     }​​​​​ else {​​​​​
//     let sum = p.element();
//     let lsum = sumHelper(t, t.leftChild(p));
//     let rsum = sumHelper(t, t.rightChild(p));
//     return lsum + rsum + sum;
//     }​​​​​
//     }​​​​​
//     console.log(sum(t0));