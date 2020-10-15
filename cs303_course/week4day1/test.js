/*eslint-disable*/
{
class User {
    constructor(name) { this.name = name; }
    sayHi() { console.log(this.name); }
  }
  
  // class is a function
  console.log(typeof User); // function
  
  // ...or, more precisely, the constructor method
  console.log(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
  console.log(User.prototype.sayHi); // console.log(this.name);
  
  // there are exactly two methods in the prototype
  console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
}