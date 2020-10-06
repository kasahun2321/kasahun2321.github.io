
/*eslint-disable*/
let obj = {sun:2};
function A() {
    return obj;
}
function B() 
{ 
    return obj; 
}
const a=new A();
const b=new B();

alert(new A() == new B()); // true


function sayHi() {
    alert('Hello');
  }
  console.log(sayHi())
  console.log(sayHi)
  setTimeout(sayHi, 2000);
  serTimeout(sayHi(),2000)//this consider as function call as two argument
  
  /*
  function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  setTimeout(sayHi, 2000, "Hello", "John"); // Hello, John
  
  */
//  exercise 
//  make a counter that count down from some Number
//  --it should print out the current number every second

let str = 'Widget simd with simr id';
console.log( str.indexOf('id') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('Widget') ); // -1, not found, the search is case-sensitive
console.log( str.indexOf("sim") ); // 1, "id" is found at the position 1 (..idget with id)
str=str.substr(0,7)+str.charAt(7).toUpperCase()+str.slice(8)
console.log(str)
  



