function iseven(n) {
    if(n>0){
return n+ iseven(n-1)}

}
console.log(iseven(5));

//summ of n nuber bby calling two recusive
function sumadd(n)
{
  let a,b,result;
    if(n>0){
         a+=sumadd(n-1);
        b+=sumadd(n-2);
         result=a+b+n
    
}
return result;
}

console.log(sumadd(4))