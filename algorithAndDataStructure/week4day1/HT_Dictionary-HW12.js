const Map = require('./HT_Dictionary.js');
const List = require('./DLinkedList.js');

function genData2(n, k) {
    let dat = new Array(n);
    for (let i=0; i<n; i++) {
        let rand = Math.floor(Math.random()*100)%k + 1;
        dat[i] = rand;
    }
    return dat;
}
function genData(n, k) {
    let dat = new List.DLinkedList();
    for (let i=0; i<n; i++) {
        let rand = Math.floor(Math.random()*100)%k + 1;
        dat.insertLast(rand);
    }
    return dat;
}
function findWinnerHT(dat) {  // dat is a LinkedList
    let winners = [];
    let D = new Map.HT_Dictionary();
    let iter = dat.elements();
    let currMax = 0;
    let currID = -1;
    let winner = [currID, currMax];

    // your code goes here

    console.log(winners);
}
let dat = genData(1000, 10);
findWinnerHT(dat);

function findWinnerHT2(dat) {
    let winners = [];
    let D = new Map.HT_Dictionary();

    // your code goes here

    console.log(winners);
}
let dat2 = genData2(1000, 10);
findWinner2(dat2);
