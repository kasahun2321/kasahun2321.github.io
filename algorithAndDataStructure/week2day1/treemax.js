
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
let obj=new BinaryTree()
// let rot = obj.insertRoot(300);
// let left=obj.insertLeft(rot,340)
// let rght=obj.insertRight(rot,350)
printer.print(obj);
// obj.insertRoot(2)
// obj.insertLeft(11);
// obj.insertRight(113)
// obj.insertLeft(44)
// obj.insertRight(233)
// obj.insertLeft(134)
// obj.insertRight(155)
// max(obj)