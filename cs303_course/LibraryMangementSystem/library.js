/*eslint-disable*/

let bookstor=[];


function addbook()
{
    let book={ id:document.getElementById("id").value,
    bookname:document.getElementById("bookname").value,
    date:document.getElementById("date").value}
    bookstor.push(book)

    let table = document.getElementById("bookshelf");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = book.id;
    let td2 = document.createElement("td");
    td2.innerHTML = book.name
    let td3 = document.createElement("td");
    td3.innerHTML = book.date;
    let td4 = document.createElement("td");
    td4.innerHTML = "Update";
    let td5 = document.createElement("td");
    td5.innerHTML = "Delete";
    
    row.append(td1);
    row.append(td2);
    row.append(td3);
    row.append(td4)
    row.append(td5)
    table.append(row);
}

function  borrowbook(){



}
function returnbook()
{

}
function extenddate()
{
    
}




