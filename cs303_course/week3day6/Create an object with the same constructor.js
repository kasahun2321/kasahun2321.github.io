/*eslint-disable*/
"use strict"

function Constractorname()
{
console.log("hello")
}
let obj=new constractorname();

let obj2 = new obj.constructor();//this is wrong becouse we dont a=have object of constractor for obj.

//
function User(name) {
    this.name = name;
  }
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  console.log( user2.name ); // Pete (worked!)

  {
    function User(name) {
        this.name = name;
      }
      User.prototype = {}; // (*)
      
      let user = new User('John');
      let user2 = new user.constructor('Pete');
      
      console.log( user2.name ); // undefined
  }

  {
    // Why user2.name is undefined?

    // Here’s how new user.constructor('Pete') works:
    
    // First, it looks for constructor in user. Nothing.
    // Then it follows the prototype chain. The prototype of user is User.prototype, and it also has nothing.
    // The value of User.prototype is a plain object {}, its prototype is Object.prototype. And there is Object.prototype.constructor == Object. So it is used.
    // At the end, we have let user2 = new Object('Pete'). The built-in Object constructor ignores arguments, it always creates an empty object, similar to let user2 = {}, that’s what we have in user2 after all.
  }

