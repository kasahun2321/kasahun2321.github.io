/*eslint-disable*/
let json = "{accountNo:123, balance:430.00}";
try{
    JSON.parse(json);
}catch(err){
    console.log("Error: "+err.message);
}
console.log("program continues here...")