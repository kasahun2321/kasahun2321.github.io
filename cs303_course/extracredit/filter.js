/*eslint-disable*/
/**
 * 
 * @param {arr} arr an array of numbers
 * @param {func} func a function which use to filter even numbers only
 * @returns {array} return an array of numbers
 */
function myFilter(arr,func){
    const  myarray = [];
    for(let element of arr){
        
            if(func(element)){
                myarray.push(func(element))
            }
    }
    return myarray;
}
let myarray = [1,2,3,-3,-7];
/**
 * 
 * @param {*} num which takes number
 * @returns{number} this will return the even numbers
 */
function checkFilter(num){
    if(num%2===0){
        return num;
    }
}
console.log(myFilter(myarray,checkFilter))