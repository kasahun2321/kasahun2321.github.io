let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
//alert( fruits.length ); // ?

let newfruit= fruits.map(n=> addarray());

console.log(newfruit);


///Q1 answwerit shows the size of the array

//q2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

// q3
let arr = ["a", "b"];

arr.push(function() {
  console.log(( this ));
})

arr[2](); // ?