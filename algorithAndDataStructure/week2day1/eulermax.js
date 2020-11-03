class Max extends eulerTour {
    visitExternal(T, p, r){
        r[1] = -Infinity
    }
 
    visitPostOrder(T, p, r){
        r[1] = Math.max(r[0], r[2], p.element())
    }
    max(T){
        return eulerTour(T, T.root())
    }
}
 
function maxHelper(T){
    if(T.isExternal(p)){
        return -Infinity
    }
 
    else {
        lmax = maxHelper(T, T.leftChild(p));
        rmax = maxHelper(T, T.rightChild(p))
 
        return Math.max(lmax, rmax, p.element())
    }
}