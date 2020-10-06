/* eslint-disable */
"use strict"
function myMap(arr,func){
    const  temparray = [];
    for(let element of arr){
        temparray.push(func(element));
    }
    return temparray;
}
let temparray = [8,4,6,7];
function double(num){
    return 2*num;
}
console.log(myMap(temparray,double))
