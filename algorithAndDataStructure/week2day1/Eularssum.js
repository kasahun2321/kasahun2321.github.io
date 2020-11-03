class Sum extends eulerTour {
    visitExternal(T, p, r){
        r[1] = 0;
    }
 
    visitPostOrder(T, p, r){
 
        r[1] = r[0] + r[2] + p.element();
    }
 
    sum(T){
 
        return eulerTour(T, T.root())
    }
}
 
function sumHelper1(T, p){
    if(T.isExternal(p)){
        return 0;
    }
 
    else {
       let lsum = sumHelper1(T, T.leftChild(p))
       let rsum = sumHelper1(T, T.rightChild(p))
 
       return lsum + rsum + p.element();
    }
}