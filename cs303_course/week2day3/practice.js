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


///

function pow(x,y)
{
  let result=1;
  if(y==0)
  {
return 1;

  }
  else if(y==1){
    return x;
    
  }

  else
  {
    return (x *pow(x,y-1));
  }
 

}
console.log(pow(2,1))

//sum array

function sum(arr)
{ 
 if (arr==1)
 {return 1}
  else
  {
    return arr+sum(arr-1)
  }
 

}
console.log(sum(12))

function facorail(n)
{
  if (n==1)
  return 1;
  else
  return n*facorail(n-1)
}
console.log(facorail(4))

function fibonaci (x,y)
{
  
}
