const Map = require('./BST_Dictionary.js');
const List = require('./DLinkedList.js');

function genData(n, k) {
    let dat = new Array(n);
    for (let i=0; i<n; i++) {
        let rand = Math.floor(Math.random()*100)%k + 1;
        dat[i] = rand;
    }
    return dat;
}
function genData2(n, k) {
    let dat = new List.DLinkedList();
    for (let i=0; i<n; i++) {
        let rand = Math.floor(Math.random()*100)%k + 1;
        dat.insertLast(rand);
    }
    return dat;
}
function findWinner(dat) {
    let D = new Map.BST_Dictionary();
    // your code goes here for computing the totals for each candidate from array dat
    D.print();
    let winners = [];  // put the winners in an array
    // determine the winners from traversing the Dictionary D
    console.log(winners);
}
function findWinner2(dat) {
    let D = new Map.BST_Dictionary();
    // your code goes here for calculating the vote totals and putting into Dictionary D
    // dat is a DLinkedList so you will need to use an iterator elements() on dat
    D.print();
    let winners = [];  // put the winners in an array
    // determine the winners from traversing the Dictionary D
    console.log(winners);
}
let dat = genData(1000, 10);
// console.log(dat);
findWinner(dat);
let dat2 = genData2(1000, 10);
// console.log(dat2);
findWinner2(dat2);
