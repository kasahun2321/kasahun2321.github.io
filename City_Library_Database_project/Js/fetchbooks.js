
let data;
fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list").then(function (response) {
    response.json().then(function (data) {

        console.log(data);
        if (data.length > 0) {
            let temp = "";
            let counter = 1
            data.forEach(kas => {

                temp += "<tr>";
                temp += "<td>" + counter++ + "</td>";
                temp += "<td>" + kas.isbn + "</td>";
                temp += "<td>" + kas.title + "</td>";
                temp += "<td>" + kas.overdueFee + "</td>";
                temp += "<td>" + kas.publisher + "</td>";
                temp += "<td>" + kas.datePublished + "</td>";

                //<a  href="edit.html?bookId=${kas.bookId}" class="btn btn-success">Edit</a>
                temp += "<td>" + `<button class="btn btn-primary"onclick="editBookForm(${kas.bookId})">Edit</button> ` + "</td>";
                temp += "<td>" + `<button class="btn btn-danger" onclick="deleter(${kas.bookId})">Delete</button>` + "</td></tr>";

            })

            document.getElementById("data").innerHTML = temp;
        }


    });
});

function deleter(bookId) {
    alert("the delete button" + bookId)

    const url = `https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${bookId}`;
    // Awaiting fetch which contains  
    // method, headers and content-type 
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(function (message) {
        console.log(message);

    });

}


