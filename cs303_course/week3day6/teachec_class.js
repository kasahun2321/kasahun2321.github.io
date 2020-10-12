/*eslint-disable*/
let Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

let Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

let me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");

let  teacher=function(){};
teacher.prototype= new Person();
teacher.prototype.teach=function(subject)
{
    this.subject=subject;
    console.log(this.name+" is teaching "+this.subject )
}


let teobj=new teacher()
teobj.initialize("kasahun",27)
console.log(teobj.teach("oop"))
