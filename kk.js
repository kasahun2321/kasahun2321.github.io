function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
 
function checkArray(arr) {
    if (arr.length === 0) {
        return false;
    }
    let arraySum = sum(arr);
    console.log(arraySum);
    //its not looping 
    for (let i = 0; i < arr.length; i++) {
 
        console.log(arr[i]);
        if (arraySum==arr[i]) {
            return false
        }
        
    }
    return true;
}
console.log(checkArray([]));
console.log(checkArray([5, -5, 0]));
console.log(checkArray([5, -2, 1]));

function hello()
{
    alert("hello connected")
}

