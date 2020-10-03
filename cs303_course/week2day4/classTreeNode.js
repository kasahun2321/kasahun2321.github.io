/*eslint-disable*/
"use strict"

/**
 * 
 */
class TreeNode {
    constructor (value) {
    this.value = value;
    this.descendents = [];
    }
   }
   /* replacemtn of above treenode clas code */
   function treeNode2(value)
   {
       this.value=value;
       this.descendents;
   }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);

   /**
    * 
    * @param {*} node 
    * @returns{}
    */
   
function printName(node)
{
  /* ll*/
  if (node.descendents===null)
  {
    console.log("name:",node.value)
  }
  else{
    /* the node reduction */
   console.log("name:",node.value)
    for(let child of node.descendents)
    {
    printName(child)
    }
  }
}

console.log(printName(abe));



// /**
//  * @param{object } node is a tree
//  * 
//  * @param{string} target is string we are matching
//  * @return{boolean } 
//  */
function contains(node, target) {
    if (node.descendents === null) {
      if (node.value === target) {
        return true;
      }
      else{
        return false;
      }
    }
    else {
      let childresult = false;
      if(node.value===target)
      {
        return true;
      }
      for (let child of node.descendents) {
        childresult = contains(child, target)
        if (childresult === true) {
          return true;
        }
      }
      return childresult;
    }
  }
  
  console.log(contains(abe, "Lisa"));//this should be true;
  console.log(contains(abe, "Crusty"));//this should be true;

  ///
{
  function subtree(TreeNode, target) {
    /* base case -- if children is null or empty */
    if (TreeNode.descendents === []) {
        if (TreeNode.value === target) {
            return TreeNode;
        } else {
            return undefined;
        }
    } else { //reductive recursion step
        let childResult = null;
        if (TreeNode.value === target){
            return TreeNode;
        } 
        for (let child of TreeNode.descendents) {
            childResult = subtree(child, target);
            if (childResult === TreeNode) {
                return TreeNode;
            }
        }
        return undefined; //did not find the target 
    }
  
  console.log("testing abe, should be true: ", subtree(abe, "Abe"));

desciption ("print the sub tree", function()
{
    it ("the sub tree objects value",function()
    {
        assert.deepEqual(subtree(abe,"Abe"),0)
    });
});

}
}
/**
 * 
 * Write a recursive function, treeModifier, that will take a tree and a modifier function as
parameters. Walk through the tree and apply the function to each node. The function should
apply some operation to a node. Write a function that will change the value of a node to be all
caps. Write another that will change the value to have *** in front and behind the node value.
Write another that will reverse the string of the node value. Call your recursive function with
each of these modifier functions.
treeModifier(tree, modiferFunc)
allCaps(node)
addStars(node)
reverseNode(node)
 */

 /**
  * @param()tree  node node in the tree
  * @param()modfun  is function
  * @returns(undefined)
  */
/**
 * 
 * @param {*} treeNode is some node in a tree
 * @param {*} modFunc functino to apply to each node
 * @returns {null}
 * This function modifes the value of each node in the tree using the modFunc
 */
function treeModifier(treeNode, modFunc){
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
        return undefined;
    } else {  //loop through the array of descendents and recursively call treeModifier
      for (const node of treeNode.descendents) {
          treeModifier(node, modFunc);
      }
    }
}
 
/**
 * 
 * @param {Object} node from simpson tree
 * @returns {undefine}
 * changes the node value to have ***    ***
 */
function starFunction(node){
    node.value = "***" + node.value + "***";
    return undefined;
}

   
/**
 * 
 * @param {Object} node from simpson tree
 * @returns {undefine}
 * changes the node value to be upper case
 */
function caps(node){
    node.value = node.value.toUpperCase();
}

console.log("the tree modifier reuls",treeModifier(abe, caps));
console.log('now tree has stars', abe);

// creating list based on class
// Create a new class ListNode (based on TreeNode below) and use it to generate a linked list of
// Abe, Homer, Bart, Lisa, Maggie instead of a tree.
{

    // class linkedlist{
    //     constructor( name,next)
    //     {
    //         this.name=name;
    //         this.next=next;
    //     }
    // }

    // class TreeNode1 {
    //     constructor (name,value) {
    //     this.name = name;
    //     this.next = value;
    //     }
    //    }

    //    const abe = new TreeNode1('Abe',null);
    //    console.log(abe)
    let lisa={name:"Lisa",next:null}
    let berta={name:"Berta",next:null}
    let maggie={name:"Maggie",next:null}
    let hommer={name:"Hommer",next:[maggie,berta,lisa]}
    let abe={name:"Abe",next:hommer}
    console.log(abe);



}