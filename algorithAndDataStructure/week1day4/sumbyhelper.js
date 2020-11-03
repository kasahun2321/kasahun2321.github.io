
function sum(l)
{
return sumh(l,l.first())
}
function sumh(l,p)
{
    if(l.islast(p))
    {
        return p.element();
    }
    x=sumh(l,l.after(p))// the . after method is not a function 
    return x+p.element();
}


console.log(sum(tst2));