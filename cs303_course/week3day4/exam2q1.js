
/*eslint-disable*/
function foo(bar,abc,xyz)
{
if(bar<100)
{
    return abc(bar)
}
else{
    return xyz(bar);
}
}
console.log(foo(100,apple,banana));
console.log(foo(90,apple,banana));

function apple(x)

{
return 2*x;
}
function banana(x)
{
    return 3*x;
}