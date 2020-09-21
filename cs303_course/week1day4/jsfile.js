/* eslint-disable*/
// Methods of primitives //
// since primitives are not object we can't add string properties //
constprompt = require('prompt-sync')();

letf = +prompt("Enter the first number: ", "");
lets = +prompt("Enter the second number: ", "");

console.log(f + s);

////////////////////////////////////////////////////////////////////

function readNumber(){
    letnum;
    do {
        num = prompt("please enter a number: ", 0);
    } while (!isFinite(num));

    if (num === null || num === '')
        return +num;

}

console.log(`The number is: ${readNumber()}`);

////////////////////////////////////////////////////////////////////

// Because the condition is alwayes true. //

function random(min, max){
    returnmin + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));

////////////////////////////////////////////////////////////////////

function random1(min, max){

    letnum = min - 0.5 + Math.random() * (max - min + 1);
    returnMath.trunc(num);
}

console.log(random1(-11, -5));
console.log(random1(1, 3));

/////////////////////////////////////////////////////////////////////

function getMaxSubSum(arr) {
    letmaxSum = 0;
    for (leti = 0; i < arr.length; i++) {
        letsumFixedStart = 0;
        for (letj = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    returnmaxSum;
}

//////////////////////////////////////////////////////////////////////

function upperCaseFirstChar(str){
    if (!str) returnstr;
    letlower = str.toLowerCase();

    returnlower[0].toUpperCase() + lower.slice(1);
}

console.log(upperCaseFirstChar("chris"));
console.log(upperCaseFirstChar("2"));

///////////////////////////////////////////////////////////////////////

function checkSpam(str){
    letstring = str.toLowerCase();

    return (string.includes("the") || string.includes("of"));
}

console.log(checkSpam("behind ThE sin"));
console.log(checkSpam("power OF wisdom"));
console.log(checkSpam("what is good"));

/////////////////////////////////////////////////////////////////////////

function truncet(str, maxLength){

    if (str.length > maxLength) {
        returnstr.slice(0, maxLength - 1) + "...";
    } else {
        returnstr;
    }
}

console.log(truncet("what is elipsis in javascript", 24));
console.log(truncet("I love programing", 18));

//////////////////////////////////////////////////////////////////////////

function extructCurrencyValue(str){

    return +str.slice(1, str.length);
}

console.log(extructCurrencyValue("$100") === 100);
console.log(extructCurrencyValue("120") === 120);

//////////////////////////////////////////////////////////////////////////



