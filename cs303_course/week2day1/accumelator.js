
/*eslint-disable*/
const prompt=require('prompt-sync')();
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