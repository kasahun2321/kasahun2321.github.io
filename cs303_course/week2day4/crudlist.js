
"use strict"
let node4={value:1099,next:null}
let node3={value:109,next:node4}
let node2={value:1,next:node3}
let head={value:10,next:node2}

//remove node fro then list 
node2.next=node4;
//put  node 3  back in
node2.next=node3;

// find  with the value 109 starting at the head 
/**
 * 
 * @param {object } head  will be objet
 * @returns{ number }single value number 
 */
function find88th(head)
{
    let currentnode=head;
    /**
     * true will go until bellow consition 
     */
    while(true)
    {
        if(currentnode.value===109)
        return currentnode;
        else
        {
            if (currentnode.next===null)
            {
                return null;
            }
            currentnode=currentnode.next;
        }
    }
}

console.log("find node ",find88th(head))

