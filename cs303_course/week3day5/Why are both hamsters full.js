/**
 * We have two hamsters: speedy and lazy inheriting from the general hamster object.
When we feed one of them, the other one is also full. Why? How can we fix it?
 */
/*eslint-disable*/
let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple

  //////////////////////////////////////
  //////CORRECTION////////////////////////////
  ////////////////////////////////////////////
  let hamster1 = {
    stomach: [],
  
    eat(food) {
      // assign to this.stomach instead of this.stomach.push
      this.stomach = [food];
    }
  };
  
  let speedy1 = {
     __proto__: hamster
  };
  
  let lazy1 = {
    __proto__: hamster
  };
  
  // Speedy one found the food
  speedy1.eat("apple");
  console.log( speedy1.stomach ); // apple
  
  // Lazy one's stomach is empty
  console.log( lazy1.stomach ); // <nothing>