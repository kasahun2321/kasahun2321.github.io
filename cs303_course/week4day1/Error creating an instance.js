/*eslint-disable*/
class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);//if we dont have super keyword in child class it couse problem 
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // ok now
  alert(rabbit.name); // White Rabbit