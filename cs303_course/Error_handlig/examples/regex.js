/*eslint-disable*/

const str = "1 First 2 Second 3 Third 100 last";
const exp = /\d+/g ;
const arr = str.replace(exp, "");
console.log(arr)