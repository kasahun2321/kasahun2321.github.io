const Sort = require('./ArraySorter.js');
const PQ = require('./PriorityQueue.js');
const Tab = require('./BST_Dictionary.js');
const Map = require('./HT_Dictionary.js');


// function genData(n, k) {
//     let dat = new Array(n);
//     for (let i = 0; i < n; i++) {
//         let rand = Math.floor(Math.random() * 1024) % k + 1;
//         dat[i] = rand;
//     }
//     return dat;
// }

let mySorter = new Sort.ArraySorter();

function isPermutationSort(a, b) {
    mySorter.quickSort(a);
    mySorter.quickSort(b);
    if (a.length !== b.length)
        return false
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true;
}

function isPermutationPQ(a, b) {
    let PQA = new PQ.PriorityQueue();
    let PQB = new PQ.PriorityQueue();
    if (a.length !== b.length)
        return false

    for (let i = 0; i < a.length; i++) {
        let e = a[i]
        PQA.insertItem(e, e)
    }
    for (let i = 0; i < b.length; i++) {
        let c = b[i]
        PQB.insertItem(c, c)
    }
    while (!PQA.isEmpty()) {
        let p = PQA.minKey();
        let q = PQB.minKey();
        if (p !== q) {
            return false
        }
        PQA.removeMin();
        PQB.removeMin()

    }

    return true;

}

function isPermutationBST(a, b) {
    let DA = new Tab.BST_Dictionary();
    let DB = new Tab.BST_Dictionary();
    if (a.length !== b.length)
        return false
    let p = a[0];
    DA.insertItem(p, 1);
    for (let i = 1; i < a.length; i++) {
        p = a[i]
        let count = DA.findElement(p);
        if (count == null) {
            DA.insertItem(p, 1)
        } else {
            DA.insertItem(p, count + 1)
        }
    }
    let q = b[0];
    DB.insertItem(q, 1);
    for (let i = 1; i < b.length; i++) {
        q = b[i]
        let count = DB.findElement(q);
        if (count == null) {
            DB.insertItem(q, 1)
        } else {
            DB.insertItem(q, count + 1)
        }
    }
    if (DA.size() !== DB.size())
        return false;

    let iter = DA.items()
    while (iter.hasNext()) {
        let obj = iter.nextObject();
        let id = obj.key();
        let count = obj.element();
        let countB = DB.findElement(id);
        if (count !== countB)
            return false;

    }
    return true;
}

function isPermutationHT(a, b) {
    let DA = new Map.HT_Dictionary();
    let DB = new Map.HT_Dictionary();
    if (a.length !== b.length)
        return false
    let p = a[0];
    DA.insertItem(p, 1);
    for (let i = 1; i < a.length; i++) {
        p = a[i]
        let count = DA.findElement(p);
        if (count == null) {
            DA.insertItem(p, 1)
        } else {
            DA.insertItem(p, count + 1)
        }
    }
    let q = b[0];
    DB.insertItem(q, 1);
    for (let i = 1; i < b.length; i++) {
        q = b[i]
        let count = DB.findElement(q);
        if (count == null) {
            DB.insertItem(q, 1)
        } else {
            DB.insertItem(q, count + 1)
        }
    }
     if (DA.size() !== DB.size())
        return false;

    let iter = DA.items()
    while (iter.hasNext()) {
        let obj = iter.nextObject();
        let id = obj.key();
        let count = obj.element();
        let countB = DB.findElement(id);
        if (count !== countB)
            return false;

    }
    return true;
}

let a = [17, 15, 55, 34, 19, 28, 5, 2,2,2, 10, 99, 75, 25, 67, 94, 122, 21];
let b = [17, 15, 55, 21, 34, 19, 28, 5, 2,2,2, 10, 99, 75, 25, 67, 94, 122];

console.log(isPermutationBST(a, b));
console.log(isPermutationSort(a, b));
console.log(isPermutationHT(a, b));
console.log(isPermutationPQ(a, b));

