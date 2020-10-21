/*eslint-disable*/
let prompt=require('prompt-sync')();
let bookstor=[{id:12,name:"oop",author:"kasahun"}];

class book 
{
    constractor(id,name,author)
    {
        this.id=id;
        this.name=name;
        this.author=author;
        
    }
    set_book(id,name,author)
    {
        let adder={id:this.id=id,name:this.name=name,author:this.author=author}
        bookstor.push(adder)

    }
    get_book()
    {
        console.log("the book in the library")

       let draw= bookstor.forEach(ele=>
       
        {
            console.log("++++ID+++++++++++Course Name+++++++ ++++ Author++++++++")
            console.log("+++", ele.id,"++++++",ele.name,"+++++++",ele.author,"+++++++");
        }

       );
        //console.log(draw);
    }

}
let choice=prompt(`
============================Welcome to you library managment system==========================
============================Enter 1 to add book =============================================
============================Enter 2 to add user =============================================
============================Enter 3 to borrow book ==========================================`)

if (choice==1)
{
    
}
// let x=prompt("Add book Id");
//     let y=prompt("Add book name");
//     let z=prompt("Add book author");
    let obj=new book("x,y,z","as","asdda");
    obj.set_book()
    obj.get_book();


