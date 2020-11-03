
function max(T)
{
    return maxHelper(T,T.root())
}
function maxHelper(T,p){
    if(T.isExternal(p)){
        return "the max is :",p.element();
    }
 
    else {
        let max=p.element();
        let lmax = maxHelper(T, T.leftChild(p));
        let rmax = maxHelper(T, T.rightChild(p))
 
        return Math.max(lmax, rmax, max)
    }
}