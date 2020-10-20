/*eslint-disable*/
const prompt = require('prompt-sync')();

function getPositiveInteger() {
    let input = prompt("Please enter a positive integer value: ");

    const intValue = parseInt(input);
    if (!intValue) {
        throw new Error("Input is not a number");
    } else if (intValue < 0) {
        throw new Error("Number value is less than 0");
    }

    return intValue;
}

function squareRoot(){
    try{
       let n = getPositiveInteger();
       return Math.sqrt(n);
    }catch(ex){
        console.log("Error: "+ex.message);
        // return squareRoot();
    }
}
console.log(squareRoot());