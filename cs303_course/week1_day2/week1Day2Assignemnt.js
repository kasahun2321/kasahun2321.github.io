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