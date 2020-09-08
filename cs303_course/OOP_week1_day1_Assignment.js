
"use strict"

//maximium of three number

// defining table for max find
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ input              + process         + output             +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ three input        + compare x with  +  the maximium the  +
+ x,y and z          + y and y with z  +  will be printed   +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
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

console.log("the maximum of three number is:"+maxOfThree(4,5,6));

/////////////////question number two


/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++ input                          ++++   process/compute       +++  output              +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
||  take array as an argument     ||||   add all element and   +++  result of sum       +
||  define sum and mult named     ||||  store in one var       +++  and                 +
|| function pass array as an arg  ||||   multiply all elemnt   +++  result of multip-   +
||                                ||||   store in one var and  +++  lication            +
||                                ||||  return it to call      +++                      +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++      
*/


function sum(arr)
{
    let sum=0;
for(let i=0;i<arr.length;i++)
{
sum+=arr[i];
}
return sum;
}
 function multiply(arr)
 {
     let mult=1;
for (let i=0; i<arr.length;i++)
{
    mult*=arr[i];
}
return mult;
 }

 let arr2=[1,2,3,4];
 let summation = sum(arr2);
 let mult =multiply(arr2);
 console.log("the sum of given array:"+summation);
 console.log("the product of given array:"+mult);

////   Q3  
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
||  input                                +++   process                  ++++                      +
||  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++  the function accepet array as       +++   compute the size of array +++   the out put will   +
+++ an argument and define for loop      +++  then find the length and   +++   be the maximum     +
+++                                      +++  using for loop and by      +++  lenght of array     +
+++                                      +++  declaring one cost var then+++ element from the     + 
+++                                      +++   compare all element of arr+++  alll                +
+++                                      +++ size with the defined var   +++                      +
++ .                                     +++ siz                         +++                      +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



*/



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

console.log("the longest lenght of the array:"+findLongestWord(arr3));


//// Q4    
 


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

console.log(reverse_array(arr4));
