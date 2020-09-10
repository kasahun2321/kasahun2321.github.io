function maxOfThree(x,y,z)
{
    let max=0;
    if (x>y && x>z)
    {
        max=x;
    }
    else if(x>y && x<z)
    {
        max=z;
    }
    else if(y>x && y>z)
    {
        max=y;
    }
    else
    {
        max=z;
    }
    return max;
}

//console.log("the maximum of three number is:"+maxOfThree(4,5,6));
function sum(arr)
{
    let sum=0;
for(let i=0;i<arr.length;i++)
{
sum+=arr[i];
}
return sum;
}

console.log(sum([1,2,3]))


function findLongestWord(arr) 
{
let lent_array=0;
for(let i=1;i<arr.length;i++)
{
    lent_array=arr[0].length;
    if(arr[i].length>lent_array)
    lent_array=arr[i].length;
}
return lent_array;
}

let arr3=["hello","lo","kaa","kasahun"];


const { split } = require("prelude-ls");


function isVowel(n)
{
    let ans="";
    let vowel="aeiouAEIOU";

    vowel=vowel.split("");
    for(let i=0;i<vowel.length;i++)
    {
        if(n==vowel[i])
        {
        
        ans=true}
       
      
    }
    return ans;

}
let x='f';
console.log(isVowel(x));

/**
 * 
 * @param {arr =kasahun} arr =nuhasak
 */


function  reverse_array(arr)
{
    let temp=[];
    for (let i=0;i<arr.length;i++)
    {
        temp[i]=arr[arr.length-1-i]
    }
    return temp
}

let arr4=["x","s","w"];

///filter the given array
/* eslint-disable id-length */
"use strict";
/**
 * Returns array of string that have greater than i
 *
 * @param{Array}array of string
 * @parami is compared with each string
 * @return{Array} the array of string that have greater than i
 */
function filterLongestWords(arr, i) {
let temp_arr = [];
for (let j = 0; j < arr.length; j++) {
if (arr[j].length > i) {
      temp_arr.push(arr[j]);
    }
  }
return temp_arr;
}

