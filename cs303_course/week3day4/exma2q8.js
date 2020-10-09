/*eslint-disable*/


let john={name:"john",surname:"smith",age:10} 
let pete={name:"pete",surname:"hunt",age:20} ;
let people=[john,pete]
const mapped =people.map(function(person)
{
    const newobj={fullname:person.name+" "+person.surname,age:person.age};
    return newobj;
});
console.log(mapped)