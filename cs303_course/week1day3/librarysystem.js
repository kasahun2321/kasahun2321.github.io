/*eslint-disable */
"use strict";
//let temp = [];
let library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        libraryID: 1254
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        libraryID: 4264
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3245
    }
];
// console.log(library);

/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @param {number} r The desired radius of the circle.
 */
function addbook() {
    // let object={};
    let count = 0;
    let obj = {
        title: document.getElementById("bookname").value,
        author: document.getElementById("author").value,
        libraryID: document.getElementById("libID").value,
    };
    if(obj.title==="" && obj.title==="" && obj.libraryID==="")
    {
        alert("please enter the empty box")
    }
    
else{
    library.push(obj);
}
    //alert("book added");

 document.getElementById("bookadd").innerHTML="new book added \n"+obj;
    console.log(library);

}
/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @param {number} r The desired radius of the circle.
 */
function showtitle() {
    //display
    let showbooktitle = [];
    for (let i = 0; i < library.length; i++) {
        showbooktitle[i] = library[i].title;
    }

    document.getElementById("display").innerHTML = showbooktitle.join("\n");


}
/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @param {number} r The desired radius of the circle.
 */
function showauthors() {
    let showauthor = [];
    for (let i = 0; i < library.length; i++) {
        showauthor[i] = library[i].author;
    }

    document.getElementById("display").innerHTML = showauthor.join("\n");

}
/**
 * Creates an instance of Circle.
 *
 * @constructor
 * @author: moi
 * @param {number} r The desired radius of the circle.
 */
function showid() {
    let showauthor = [];
    for (let i = 0; i < library.length; i++) {
        showauthor[i] = library[i].libraryID;
    }

    document.getElementById("display").innerHTML = showauthor.join("\n");

}
//console.log(library)
