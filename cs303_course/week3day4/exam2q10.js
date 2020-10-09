
/*eslint-disable*/
let john={name:"john",surname:"smith",age:10} 
let pete={name:"pete",surname:"hunt",age:20} ;
let people=[john,pete];


//the function whic return the minimim age of all aobject
function youngest ()
{

    let young=people.reduce((min,age1)=>{
        return age1.age<min?age1.age:min;

    });
    return young;
}
console.log(youngest())