/*eslint-disable*/

function makeAccount()
{
    let count=0;
    
    return function (str,money)
    {
        if(str==="add")
        count=count+money;
        else if(str==="debit")
        count=count-money;
        return count;
    }
}
const account1=makeAccount();
console.log(account1("add",10))
console.log(account1("add",10))
console.log(account1("debit",4))
