/*eslint-disable */
'use strict'
function reduc(a,b){
    return a+b;
}
 
let arr = [1,2,3,4,5,6]
//let x = (...arr);
 
console.log(arr.reduce(reduc))
 
function myReduce(arr,fun,int){
    let accumulator=int;
    for(const element of arr){
        accumulator= fun(accumulator,element);
    }
    return accumulator;
}
const testArray=[1,2,3,4,5]
function sumFn(acc,current){
    return acc + current;
}
let result = myReduce(testArray,sumFn,0)