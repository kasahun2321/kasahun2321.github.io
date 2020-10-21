/* eslint-disable */


let prompt = require('prompt-sync')();
let bookstor=[];
class Book {
    constructor(title = "unknown", author = "unknown", chargePerDay = 0.5, maximumCharge = 20 )
     {
        this.title = title;
        this.author = author;
        this.chargePerDay = chargePerDay;
        this.maximumCharge = maximumCharge;
    }

   
}
class Loan {
    constructor(book, dueDate) {
        this.book = book;
        this.dueDate = dueDate;
    }
    computeCharge(returnDate) {
        if (returnDate > this.dueDate) {
            let durationInDays = Math.round((returnDate - this.dueDate) / (1000 * 60 * 60 * 24))
            let charge = durationInDays * this.book.chargePerDay;
            return charge > this._maximumCharge ? this._maximumCharge : charge;
        }
        return 0.0;
    }
}
class LibraryMember {
    constructor(name = "unknown") {
        this.name = name;
        this.loans = [];
    }
    addToLoan(loan) {
        this.loans.push(loan);
    }
    computeCharge(returnDate) {
        let charge = 0.0;
        for (let loan of this.loans) {
            charge += loan.computeCharge(returnDate);
        }
        return charge;
    }

}
class Library {
    constructor(books = [], members = []) {
        this.books = books;
        this.members = members;
    }
    addMember(username,role) {
        let newMember={username, role}
        this.members.push(newMember);
    }
    addBook(bookname, id) {
        let newBookname = {bookname, id }
        this.books.push(newBookname);
    }
    showbook() {

       
        return this.books.name + this.books.id;
    }
}


function main() {
    const BOOKS = [
        new Book(),
        new Book("Intro to oop with JavaScript"),
        new Book("JS Dummies", chargePerDay = 1, maximumCharge = 20),
        new Book("oopjava", chargePerDay = 1, maximumCharge = 30),
    ];

    let choice = prompt(`
               ======== Select Menu=======
               ========= 1  To add book=========
               ========= 2  To borrow book========
               ========= 3  To show borrowers=====  \n`)

    if (choice == 1) {
        let libraryobj = new Library();
        let bname = prompt("book name")
        let id = prompt("enter book id")

        libraryobj.addBook(bname, id)

        console.log("book is added ")
        console.log("book in store:", libraryobj.showbook())


    }
    else if (choice == 2) {
       // let bookinstore=


    }
    else if (choice == 3) {
        let nameinput = prompt("Enter name  ")

        const MEMBERS = [new LibraryMember(nameinput)];
        //new LibraryMember("aman")];

        const LIBRARY = new Library(BOOKS, MEMBERS);

        const adduser = new LibraryMember(nameinput);
        //const jack = new LibraryMember("Jack");
        //const aman = new LibraryMember("aman");
        LIBRARY.addMember(adduser);
        //LIBRARY.addMember(jack);
        //LIBRARY.addMember(aman);

        LIBRARY.addBook(new Book("code"))
        LIBRARY.addBook(new Book("mathmathics"))


        // jack.addToLoan(new Loan(BOOKS[3], new Date(2020, 08, 1)));
        // jack.addToLoan(new Loan(BOOKS[0], new Date(2020, 07, 01)));
        // jack.addToLoan(new Loan(BOOKS[0], new Date(2020, 06, 01)));

        //adduser.addToLoan(new Loan(BOOKS[1], new Date(2020, 08, 1)));
        adduser.addToLoan(new Loan(BOOKS[0], new Date(2020, 07, 1)));
        let returndate1 = new Date();

        console.log(adduser.computeCharge(returndate1));
        //console.log(jack);
        console.log(adduser);
        //console.log(aman.computeCharge());
        //console.log(aman);
    }

    

}

main();




