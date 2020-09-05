

// function sumsafe(x)
// {
//     let ans=false;
// for(let i=0;i<x.length;i++)
// {
//     let sum=0;
//     sum+=x[i]
//     if(sum!=0 && sum!=x[i])
//     {
//         ans=true
//     }
//     else
//     {
//         ans=false;
//     }

// }
// return ans
// }

function addtest(c) {
    let f = [];
    f=c;
    let sum = 0
    if (f.length === 0){
        return false;}
    sum += sumall(f)

    for (let i = 0; i < c.length; i++) {


        if (sum == f[i]) {
            return false
        }
    }
    return true;
}
function sumall(s) {
    let lg=s
    let add = 0;
    let lent=lg.length
    for (let x = 0; x < lent; x++) {

        add += lg[x];
        

    }
    return add;
}

let y = [5, -2, 1]
let x = [-5, 5, 0]
let o=[];
console.log(addtest(x))
console.log(addtest(y))
console.log(addtest(o))