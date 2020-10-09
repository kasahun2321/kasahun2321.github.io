
/*eslint-disable*/
function Abc(name,y)
{
  this.nana=name;
  this.age=30;

}

let abcobj= new Abc()
console.log(abcobj);

//console.log(abcobj.nana,abcobj.age)
let x="kasahun shimelis"
let [fname,lname]=x.split(" ")
console.log(fname)
console.log(lname)



let person={
  name:"kasahun",
  age:"24",
  height:"6"
};
//this is error code becouse the name of object and distructured  object name are different
let {m,n,k,l}=person;
console.log(m,n,k,l)

let options = {
title: "Menu",
width: 100,
height: 200
};
let {title, width, height} = options;
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
// in case of object distraction the name of the object properties and distractures
// propertiesa must have to be same.
let xp={A:1,B:2,C:3}
let {A,B,C}=xp;
console.log(A,C,B);
//to assign a property to a variable with another name, set it using a colon

// { sourceProperty: targetVariable }
let {width: w, height: h, title:t} = options;
// width -> w
// height -> h
// title -> title
console.log(t); // Menu
console.log(w); // 100
console.log(h); // 200

//


let xpl={
    name:"kasahun",
    course:["hmtl","js","css"],
    age:30
  }
  
  let obj=JSON.stringify(xpl);
  console.log(obj)