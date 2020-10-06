"use strict"
/*eslint-disable*/


// reduce are a function which accept 4 argument
/**
 * 
 * @param {array} arr values to reduce 
 * @param {function} func to callback to do the reduction
 * @param {*} initial value to start the accumelator  z 
 * @returns {accumlator } the final value of the accumlator 
 */

function myreduce(arr,func, init)

{
    //if we use const we have to initialize it fist  ==>const accumulator=0;
    let accumulator=init;
    for (const element of arr)
    {
        accumulator=func(accumulator,element)
    }
    return accumulator;
}
const testarray=[1,2,3,4];
let sum=myreduce(testarray,(sum,ele)=>sum+ele,0);
let product=myreduce(testarray,function (acc,current){ return acc+current},1);
let pfun=myreduce(testarray,sumfun,0);

console.log(sum)


/**
 * 
 * @param {number} acc 
 * @param {number} curr 
 * @returns {numbes} the sum  of the two 
 */

function sumfun(acc,curr)
{
    return acc+curr
}



function myMap(arr,func)

{ 
    const  newarray =[];
    for(const element of arr)
    {
        const result=func(element)
        newarray.push(result)

    }
    return newarray;
}

const maparray=[1,2,3,4];
 const dounleaaray= myMap(maparray,doubleIt)
 console.log(dounleaaray)

 function doubleIt(element)
 {
  return element*2
 }