"use strict"
/**
 * @object { property glass}
 * @values{1}
 */
let head = {
    glasses: 1
  };
  
  /**
 * @object { property glass}
 * @values{1}
 */
  let table = {
    pen: 3
  };
  /**
 * @object { property glass}
 * @values{1}
 */
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  /**
 * @object { property glass}
 * @values{1}
 */
  let pockets = {
    money: 2000
  };


  pockets.__proto__=bed;//  or put we can put __proto__:bed inside the pockets object
  bed.__proto__=table;
  table.__proto__=head;
console.log(  pockets.pen);//will be 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined
    
  /**
   * 
   * @param {number} a this is numberic
   * @param {number} b  number
   * @returns {number} any number
   */
  function numsum(a,b)
  {
return a+b;
  } 

  /**
   * 
   * @param {number} a this is numberic
   * @param {number} b  number
   * @returns {number} any number
   */
  function multiplication(a,b)
  {
      return a+b
  }