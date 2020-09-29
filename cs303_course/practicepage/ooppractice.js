/*eslint-disable*/
const kas={
    name:"kasahun",
    age:28,
    acd:"degree",
    iq:function()
    {
        console.log("hte value of this",this)
 return this.age;
    }
    ,
    lala:{
        name:"lalibela",
        state:"jara"
    }
};

console.log(kas.name)
console.log(kas.iq())
console.log(kas.lala.name)