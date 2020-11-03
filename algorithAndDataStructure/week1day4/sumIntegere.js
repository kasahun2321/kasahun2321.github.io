
///  linear recusrion of sum integere
function sumall(n)
{
    if (n<0)
    {
        throw new console.error("invalid number");
    }
    if(n==0)
    {
        return 0
    }
    else{
        return n+sumall(n-1);
    }
}

console.log(sumall(3))

