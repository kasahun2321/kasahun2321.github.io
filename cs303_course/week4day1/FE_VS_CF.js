/*eslint-disable*/

let x=function (a,b){ return a*b;}
let xy=new Function("a","b","return a*b");
console.log("fe",x(2,3))
console.log(xy(2,3))
