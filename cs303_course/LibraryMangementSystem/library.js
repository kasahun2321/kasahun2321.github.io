/*eslint-disable*/

let bookstor=[];


function addbook()
{
    let book={ id:document.getElementById("id").value,
    bookname:document.getElementById("bookname").value,
    date:document.getElementById("date").value}
    bookstor.push(book)
    // bookstor["id"]=document.getElementById("id").value;
    // bookstor["bookname"]=document.getElementById("bookname").value;
    // bookstor["date"]=document.getElementById("date").value


    let table = document.getElementById("bookshelf");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = book.id;
    let td2 = document.createElement("td");
    td2.innerHTML = book.name
    let td3 = document.createElement("td");
    td3.innerHTML = book.date;
    let td4 = document.createElement("td");
    td4.innerHTML = "edit"
    let td5 = document.createElement("td");
    td5.innerHTML = "delete"
    
    
    
    row.append(td1);
    row.append(td2);
    row.append(td3);
    row.append(td4)
    row.append(td5)
    table.append(row);
    
}

function  borrowbook(){

  let borrow=prompt("enter boook title u want")
for (let i=0;i>40;i++)
  
  if(bookstor[i].name===borrow)
  {
      alert("you commpleted process")
  }
  else
  {
      alert("book not found")
  }

  }


function returnbook()
{

}
function extenddate()
{
    
}


function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("bookname").value = "";
    document.getElementById("date").value = "";
    
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}




