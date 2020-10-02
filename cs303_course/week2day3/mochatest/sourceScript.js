 
 /*eslint-disable*/
 let numArray=[1,2,3,4,5]
let max=numArray.reduce( (accum,current)=>{
    return accum<current? current:accum
});
//another way
let max2=numArray.reduce( (accum,current)=>{
    let max=0;
    if (accum>current)
    max=accum;
    else
    max=current
    return max
});


console.log("the averager value:",max);
console.log("the averager value:",max2);
