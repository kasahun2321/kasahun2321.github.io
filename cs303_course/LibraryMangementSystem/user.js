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
    addMember(name,role) {
        let username={
        name:this.name,
        role:this.role

        }
        this.members.push(username);
    }
    addBook(bookname,id,author) {
        let book={
            bookname:this.name,
            id:this.id,
            author:this.author
        }
        this.books.push(book);
    }

    displaybook()
    {
        return `title:${this.bookname}, id:${this.id},authotr:${this.author}`
    }
}


function main() {

    
    const BOOKS = [
        new Book(),
        new Book("Intro to oop with JavaScript"),
        new Book("JS Dummies", chargePerDay = 1, maximumCharge = 50),
    ];
    const MEMBERS = [new LibraryMember("Jack")];
    const LIBRARY = new Library(BOOKS, MEMBERS);

    const jack = new LibraryMember("Jack");
    LIBRARY.addMember(jack);
    LIBRARY.addBook(new Book("code"))

    jack.addToLoan(new Loan(BOOKS[3], new Date(2020, 08, 1)));
    jack.addToLoan(new Loan(BOOKS[0], new Date(2020, 07, 01)));

    console.log(jack.computeCharge());
}

main();

