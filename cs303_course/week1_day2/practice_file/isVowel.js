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