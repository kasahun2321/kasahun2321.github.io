
/*eslint-disable*/
{
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

}


{
    function makeWorker() {
        let name = "Pete";
      
        return function() {
          console.log(name);
        };
      }
      
      let name = "John";
      
      // create a function
      let work = makeWorker();
      
      // call it
      work(); // what will it show?
}
{
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ?
console.log( counter2() ); // ?
}


{
    function Counter() {
        let count = 0;
      
        this.up = function() {
          return ++count;
        };
        this.down = function() {
          return --count;
        };
      }
      
      let counter = new Counter();
      
      console.log( counter.up() ); // ?
      console.log( counter.up() ); // ?
      console.log( counter.down() ); // ?
}

{
    let phrase = "Hello";

    if (true) {
      let user = "John";
    
      function sayHi() {
        console.log(`${phrase}, ${user}`);
      }
    }
    
    sayHi();

}
{
    function sum(a) {

        return function(b) {
          return a + b; // takes "a" from the outer lexical environment
        };
      
      }
      
      console.log( sum(1)(2) ); // 3
      console.log( sum(5)(-1) ); // 4
}

{
    let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();
}