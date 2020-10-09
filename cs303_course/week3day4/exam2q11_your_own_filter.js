
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