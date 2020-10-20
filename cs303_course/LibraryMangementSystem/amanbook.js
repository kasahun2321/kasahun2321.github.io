/* eslint-disable */

class Book {
    constructor(title = "unknown", author = "unknown", chargePerDay = 0.5, maximumCharge = 20) {
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
    computeCharge(returnDate = new Date()) {
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
    addMember(newMember) {
        this.members.push(newMember);
    }
    addBook(newBook) {
        this.books.push(newBook);
    }
}


function main() {
    const BOOKS = [
        new Book(),
        new Book("Intro to oop with JavaScript"),
        new Book("JS Dummies", chargePerDay = 1, maximumCharge = 50),
        new Book("oopjava", chargePerDay = 1, maximumCharge = 30),
    ];
    const MEMBERS = [new LibraryMember("Jack"),
                        new LibraryMember("aman")];
    
    const LIBRARY = new Library(BOOKS, MEMBERS);

    const jack = new LibraryMember("Jack");
    const aman = new LibraryMember("aman");
    LIBRARY.addMember(jack);
    LIBRARY.addMember(aman);
    LIBRARY.addBook(new Book("code"))
    LIBRARY.addBook(new Book("mathmathics"))

    jack.addToLoan(new Loan(BOOKS[3], new Date(2020, 08, 1)));
    jack.addToLoan(new Loan(BOOKS[0], new Date(2020, 07, 01)));
    jack.addToLoan(new Loan(BOOKS[0], new Date(2020, 06, 01)));

    console.log(jack.computeCharge());
    console.log(jack);
    console.log(aman.computeCharge());
    console.log(aman);
}

main();






//class library
// {
//     constructor(bookid,name,user)
//     {

//         this.bookid=bookid;
//         this.name=name;
//         this.user
//     }

//     set bookid(id)
//     {
//         this.bookid=id;
//     }
//     get bookid()
//     {
//         return this.bookid;
//     }
//     set Bookname(name)
//     {
//         this.name=name;
//     }

//     set user(user)
//     {
//         this.user=user;
//     }
//     get user()
//     {
//         return this.user;
//     }
//     setbookstore(title,bookid,author,BookAddDate)
//     {

//         let item=
//         {
//             title:this.title,
//             BookID:this.BookID,
//             author:this.author,
//             bookaddDate:this.BookAddDate
//         };
        
//         bookstor=bookstor.push(item)

//     }

// }

// let obj=new library(
//     document.getElementById("title").Value,
//     document.getElementById("BookID").Value,
//     document.getElementById("author").Value,
//     document.getElementById("BookAddDate").Value)

