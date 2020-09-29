
/*eslint-disable*/
// let obj={  };
// function A() { return obj; }
// function B() { return obj; }
// console.log( new A() == new B() ); // true
let k="hello"
function A() { return k; }
function B() { return k; }
let a = new A;
let b = new B;
console.log(typeof a)
console.log(typeof b)
console.log( a == b ); // true
