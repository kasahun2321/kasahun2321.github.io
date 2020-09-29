
/*eslint-disable*/
//Is it possible to create functions A and B such as new A()==new B() ?
// yes is is true 
let obj={  };
function A() { return obj; }
function B() { return obj; }
console.log( new A() == new B() ); // true
