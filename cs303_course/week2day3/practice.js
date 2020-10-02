/*eslint-disable*/

//write code to make this work
 abc = [{age:1}, {age:2}, {age:33} ];
// let x=abc.map(valueMap=>valueMap.age);
// let y=abc.reduce(function (x, age)
// {
//   return x-age;
// }


// );
// console.log(x,y)


function valueMap(abcobj)
{
    return abcobj.age;
}
console.log(abc.map(valueMap()));

function max(macval,current){
    if(current>macval)
    return current
    else
    return macval
}
console.log(abc.map(valueMap).reduce(max,0));
