function oneTwoOneArray(array){
    
    for(let i = 1; i < array.length-1; i++){
        if(array[0] !== 1 || array[array.length-1] !== 1){
            return false;
        }
        else if(array[i] !== 2){
            return false;
        }
    }
    return true;
}
 
console.log(oneTwoOneArray([1, 2, 2, 2, 2, 3]))