/*eslint-disable*/

// Part II: Write a recursive function that will print “name: value” to the console for every node in the
// following tree data structure. Then write an iterative function that also does this. The following is the
// output you should have for the recursive version. The iterative version should be similar, but it is not
// necessary for every line to be in the same order.

// body: null
// div: null
// label: Name
// input: this was typed by a user
// p: This is text in the a paragraph
let node3 = {
 name: "p",
 value: "This is text in the a paragraph",
 children: null
};
let node4 = {
 name: "label",
 value: "Name",
 children: null
};
let node5 = {
 name: "input",
 value: "this was typed by a user",
 children: null
};
let node2 = {
 name: "div",
 value: null,
 children: [node4, node5]
};
let node1 = {
 name: "body",
 children: [node2, node3],
 value: null,
};

let arr=[node1,node2,node3,node4,node5];

for(let i=0;i<arr.length;i++)
{
  if (arr[i].value==null)
  {
    console.log("Name will be :",arr[i].name ," :: Value correspond to this node :", arr[i].value);
    console.log(arr[i].children)
  }
}

/**
 * 
 * @param {*} startnode 
 */
// function listprinter (startnode)
// {
//   console.log(startnode.value)
//   if(startnode.next===null)
//   {
//     return "done"
//   }
//   else{
//     listprinter(startnode.next)
//   }
// }
// listprinter(node1);

/**
 * @param{object } node is a tree node 
 * @returns{ unefined }
 * we are printing  not returing anything
 * 
 */

function printName(node)
{
  /* ll*/
  if (node.children===null)
  {
    console.log("name:",node.name,node.value)
  }
  else{
    /* the node reduction */
   console.log("name:",node.name,node.value)
    for(let child of node.children)
    {
    printName(child)
    }
  }
}

console.log(printName(node1));



/**
 * @param{object } node is a tree
 * 
 * @param{string} target is string we are matching
 * @return{boolean } 
 */
function contains(node, target) {
  if (node.children === null) {
    if (node.name === target) {
      return true;
    }
  }
  else {
    let childresult = false;
    if(node.name===target)
    {
      return true;
    }
    for (let child of node.children) {
      childresult = contains(child, target)
      if (childresult === true) {
        return true;
      }
    }
    return childresult;
  }
}

console.log(contains(node1, "div"));//this should be true;