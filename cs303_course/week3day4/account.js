/*eslint-disable*/
let count=0;
function makeaccount(string,money)
{
    if(string==="add")
    {
        count=count+money
       return count;
    }
    if(string==="debit")
    {
        count=count-money
        return count;
    }


}
console.log(makeaccount("add",120))
console.log(makeaccount("add",90))
console.log(count)

