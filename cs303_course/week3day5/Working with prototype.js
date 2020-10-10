"use strict"

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // ? (1)
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); // ? (2)
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); // ? (3)