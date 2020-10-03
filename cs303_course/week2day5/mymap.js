/*eslint-disable*/

function mymap(arr,myfunction)
{
    const newarray=[...arr]
    for(const element of arr)
    {
        newarray.push(myfunction(element));
    }
    return newarray;
}

let testarray=[1,2,3];
function double(num)
{
return 2*num;
}

console.log(myfunc(testarray,double));

function square()
{
    return num*num;
}