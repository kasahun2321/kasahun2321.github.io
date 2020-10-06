/*eslint-disable*/
//Fix the code below using an arrow function and then using bind
let group = {
 title: "Our Group",
 students: ["John", "Pete", "Alice"],
 showList() {
 this.students.forEach(function(student) {
 // Error: Cannot read property 'title' of undefined
 console.log(this.title + ': ' + student)
 });
 }
};
group.showList();