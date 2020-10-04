
"use strict"
/*eslint-disable*/
/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log( arr.filter(inBetween())); // 3,4,5,6

//console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

/**
 * 
 * @param {number} a is smallest  
 * @param {*} b 
 * @returns {function}
 */
function inBetween(a,b)
{

    /**
     * 
     * @param {number} number is what filter gives 
     * @returns{boolean}
     */
    function between (number)
    {
        if(a<=number && number<=b)
        {
            return true
        }
        else{
            return false;
        }
        
    }
    return between;
}

function inArray(a,b,c)
{

    function checker(array)
    {
        if(array.include(a) ||)
        {
            return true
        }
    }
}
