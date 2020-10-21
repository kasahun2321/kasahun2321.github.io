
/*eslint-disable*/
class ApplicationError extends Error{};

class Student {
    constructor(name, libraryCard) {
        this._name = name;
        this._libraryCard = libraryCard;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get libraryCard(){
        return this._libraryCard;
    }

    set libraryCard(libraryCard){
        this._libraryCard = libraryCard;
    }

    checkOutBook(book) {
        let count = 0;
        let now = new Date();
        if(this.libraryCard.booksOut.length > 0){
            for(let book of this.libraryCard.booksOut){
                if(now !== book.dueDate){
                    count ++;
                }
            }
        } else {
            this.libraryCard.booksOut.push(book);
            book.dueDate = book.calcDueDate();
        }
        if(count){
            this.libraryCard.booksOut.push(book);
            book.dueDate = book.calcDueDate(); 
        }
    }
    returnBook(book) {
        for(let volume of this.libraryCard.booksOut){
            if(volume.name === document.getElementById("book_title").value){
                let index = this.libraryCard.booksOut.indexOf(book);
                this.libraryCard.booksOut.splice(index,1); 
            }
        }
    }
}
class Book {

    constructor(name, author) {
        this.name = name;
        this.author = author;
        this.calcDueDate = function(){
            let numWeeks = 2;
            let now = new Date();
            now.setDate(now.getDate() + numWeeks * 7)
            return now;
        }
       
        this._dueDate = 0;
        this.overDueFee = function(){
            let overDueRate = 0.05;
            const date1 = new Date(this.dueDate);
            const date2 = new Date();
            let diffTime = date2 - date1;
            if(diffTime < 0){
                diffTime = 0;
            }
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            return `$${overDueRate * diffDays}`
        }
    } set dueDate (date){
        this._dueDate = date;
    } get dueDate (){
        return this._dueDate;
    }
}

class LibraryCard {
    constructor() {
        this._booksOut = [];
    }
    set booksOut(book){
        this._booksOut += book;
    }
    get booksOut(){
        return this._booksOut;
    }
}


class Library {
    constructor(librarybooks, students) {
        this.librarybooks = librarybooks;
        this.students = students;
    }

    addNewBook(newBook) {
        this.libraryBooks.set(newbook.name, newBook);
    }

    addStudent(newStudent) {
        this.students.set(newStudent.name, newStudent);
    }
}


const libraryBooks = new Map()

// libraryBooks.set("javascript and jquery by JON DUCKETT", new Book("javascript and jquery by ", "JON DUCKETT"));
// libraryBooks.set("Inheritance", new Book("Inheritance", "Christopher Paolini"));
// libraryBooks.set("Godel, Escher, Bach: an Eternal Golden Braid", new Book("Godel, Escher, Bach: an Eternal Golden Braid", "Douglas HofStadter"));
libraryBooks.set("javascript and jquery by JON DUCKETT", new Book("javascript and jquery by ", "JON DUCKETT"));
libraryBooks.set("Introduction to statistical learning", new Book("Introduction to statistical learning" , "Gareth James"));
libraryBooks.set("Programing fundametals in JS", new Book("Programing fundametals in JS", "REX A.BARZEE"));


const students = new Map();
students.set("Aman", new Student("Aman", new LibraryCard()));
const library = new Library(libraryBooks, students);
library.addStudent(new Student("Kasahun", new LibraryCard()));