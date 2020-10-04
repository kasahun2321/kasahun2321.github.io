/*eslint-disable*/
let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, 
        { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
console.log(company)
console.log(company.development.sites[1])

{
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

console.log(printName(bart));

function checker(node,given)
{
    if(node.descendents===null)
    {
        return false;

    }
    else{
        for(let x of node.descendents)
        {
            if(x==given)
            {
                return true;

            }
            else
            checker(x);
        }
    }

}
console.log(abe,homer)
}


