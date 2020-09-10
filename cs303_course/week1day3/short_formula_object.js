/* eslint-disable*/
"use strict"

let prompt=require('prompt-sync')();
/**
 * 
 * @param{object sume}return number
 * 
 */

/**
 * question number 1
 * yes it is possible to change const object 
 */
let user = {};
user.name = "John";
user.surname = "Smith";
// does it work?
user.name = "Pete";//yes
delete user.name;

/**
 * question number 2
 * @param {*} obj 
 */

function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

/**
 * suming up object 
 */
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


if (isEmpty(salaries)) {

    sum = 0;
} else {
    sum += salaries.John + salaries.Ann + salaries.Pete;


}
console.log(sum)


/** 
 * multipliying given object 
 */
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu)
multiplyNumeric(menu);
// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
console.log(menu)


/**
 * 
 * use this in object literal
 */
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
};
let user2 = makeUser();
console.log(user2.ref().name); // John

/**
 * 
 * simlple calculator to do sum
 */
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };


  
/** 
 * ladder upp and down using function 
 */
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
}
console.log(ladder.up().up().down().up().down().showStep()); // 


/**
 * two method which have same object retrun same valeue
 */
let obj = {};
function A() { return obj; }
function B() { return obj; }
console.log(new A() === new B()); // true


/**
 * creating calculator using this and object 
 */

function Calculator2() {
    this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
    };
    this.sum = function() {
    return this.a + this.b;
    };
    this.mul = function() {
    return this.a * this.b;
    };
    }
    let calculator2 = new Calculator2();
    calculator2.read();
    console.log( "Sum=" + calculator2.sum() );
    console.log( "Mul=" + calculator2.mul() );

    /**
     * 
     * create new accumelator
     */

    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function() {
        this.value += +prompt('How much to add?', 0);
        };
        }
        let accumulator = new Accumulator(1);
        accumulator.read();
        accumulator.read();
        console.log(accumulator.value);