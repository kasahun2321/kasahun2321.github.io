int BlackHeight(Node* root) { 
    if (root == NULL)    
          return 1;     
    int leftBlackHeight = BlackHeight(root->left); 
    if (leftBlackHeight == 0) 
          return leftBlackHeight; 
    int rightBlackHeight = BlackHeight(root->right); 
    if (rightBlackHeight == 0) 
          return rightBlackHeight; 
    if (leftBlackHeight != rightBlackHeight) 
          return 0; 
    else 
          return leftBlackHeight + root->IsBlack() ? 1 : 0; 
} 
///
 
function BlackHeight(T)
{
    return backhelper (T,T.root())
}
function backhelper (T,p)
{
    if(T.isExternal(p))
    {
        return 0;
    }
    let lh=blackhelper(T,T.leftchild(p))
    if(lh==0)
    {
        return 0
    }
    let rh=blackhelper(T,T.blackhelperT)
}



///////////////////////
Algorithm isPermutation(A, B) 

     If A.size() != B.size() 

           Return false 

     P <- A[0] 

     DA.insertItem(p, 1) 

     For i <- 1 to A.size()-1 do 

            P <- A[i] 

     count <- DA.findElement(p) 

     if countA == null 

           DA.insertItem(p, 1) 

     Else 

            DA.insertItem(p, countA +1) 

 

     q <- B[0] 

     DB.insertItem(q, 1) 

     For i <- 1 to B.size()-1 do 

            q <- B[i] 

     countB <- DB.findElement(q) 

     if count == null 

           DB.insertItem(q, 1) 

     Else 

            DB.insertItem(q, countB +1) 

 

If DA.size() != DB.size() 

     Return false 

IterA <- DA.items() 

iterB <- DB.itema() 

While iterA.hasNext do 

       objA <- iterA.nextObject() 

       objB <- iterB.nextObject() 

       if objA.key() != objB.key() 

              return false 

return true 

         