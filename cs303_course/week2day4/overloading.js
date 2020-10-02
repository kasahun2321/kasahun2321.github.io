/*eslint-disable*/
"use strict"
function log() {
    console.log("No Arguments");
    }
    function log(x) {
    console.log("1 Argument: " + x);
    }
    function log(x, y) {
    console.log("2 Arguments: " + x + ", " + y);
    }
    log();
    log(5);
    log(6, 7);
    function log(){
        console.log("second with no argument")
    }
    log();
    log(5);
    log(6, 7);

    const head ={value:10,next:{value:50, next :null}};
    node1 = {value :50, next: null};
// const head = {value: 10, next: node1};

// Declare a new node, node2, with value 15.  Modify node1 to add node2 to the end of the list.
//this is how to add node at the end of the list 
node2={value:15,next:null};
node1={value:50,next:node2};
const head1 = {value: 10, next: node1};

//adding node  at the begineig of  the list
node1 = {value :50, next: null};
const head = {value: 10, next: node1};
node2={valu:5,next:const head}
const head=node2;

// adding list ad the midle of the linked list
node1 = {value :50, next:  null};
const head = {value: 10, next:  node1};

node2={value:8,next:node1};
const head.next=node2;
console.log(node1)
console.log(node2)
console.log(const head)
//Insert a node with value 8 in the middle of the list

