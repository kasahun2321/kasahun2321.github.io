{
function heightT(T)
{
   
     let p = arguments[1] === undefined ? T.root() : arguments[1];
    
    
    if(T.isEmpty())
    {
        return 0;
    }
    if(T.isExternal(p)){return -1;}
   
    let lmax = heightT(T, T.leftChild(p));
    let rmax = heightT(T, T.rightChild(p))
 
    return Math.max(lmax,rmax)+1;
    
}


console.log("the height of the tree ",heightT(t0))

console.log("the height of the tree ",t0)}


// second way of solution
// function height(T,V){
//     if(T.isExternal(V)){
//         return 0;
//     }else{
//         let ldepth = height(T,T.leftChild(V));
//         let rdepth = height(T,T.rightChild(V));
//         if(ldepth > rdepth){
//             return (ldepth + 1);
//         }else{
//             return (rdepth + 1);
//         }
//     }
// }
// console.log("the height of the tree: " + height(t0,t0.root()));

//third way
