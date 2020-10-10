/*eslint-disable*/
"use strict"

/* We have rabbit inheriting from animal.
*If we call rabbit.eat(), which object receives the full property: animal or rabbit?
*/

/**
 * parent object
 */
let animal = {
    /**
     * is a method for all inherited class
     */
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();//

  /**
   * rabbit object can inherit all the feature of animel object properties.
   */