/*eslint-disable*/
//create tree using linked list
const homer={tree:"homer",value:null ,next:[lisa,crusty]}
const lisa={tree:"lisa",value:null}
const crusty={tree:"homer",value:null}
//const homer={tree:"homer",value:null}

/**
 * @param{object } node is a tree
 * 
 * @param{string} target is string we are matching
 * @return{boolean } 
 */
function contains (node,target)
{
    if (node.name===target)
    {
        return true;
    }
    else{
        let childresult=null;
        for(let child of node.children)
        {
            childresult=contains(child)
        }
    }
}