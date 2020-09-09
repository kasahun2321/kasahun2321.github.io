
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