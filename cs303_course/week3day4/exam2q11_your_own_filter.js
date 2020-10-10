
/*eslint-disable*/
function myfind(arr,search)
{
    let newarray=[];
    for(let x of arr)
    {
        if(search(x))
        {
            newarray.push(search(x))
        }
    }
}
function search(value)
{
    if(value>10)
    {
        return value;
    }
}

///////////////////
//solution 

function myfind1(arr,search1)
{
    
    for(let x of arr)
    {
      let num=search1(x)
      if(num)return num;
    }
}
function search1(value)
{
    if(value>10)
    {
        return value;
    }
}
const numarray=[5,11,1,33];
console.log(myfind1(numarray,search1))
