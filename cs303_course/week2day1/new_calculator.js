/*eslint-disable*/
const prompt=require('prompt-sync')();
function Calculator() {
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
    let calculator = new Calculator();
    calculator.read();
    console.log( "Sum=" + calculator.sum() );
    console.log( "Mul=" + calculator.mul() );
    