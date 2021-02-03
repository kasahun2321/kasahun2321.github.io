

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
                let identifierrow = kas.isbn;
                temp += "<td>" + kas.title + "</td>";
                temp += "<td>" + kas.overdueFee + "</td>";
                temp += "<td>" + kas.publisher + "</td>";
                temp += "<td>" + kas.datePublished + "</td>";
                temp += "<td>" + ` <a onclick="edit()" class="btn btn-success">Edit</a>` + "</td>";
                temp += "<td>" + `<button class="btn btn-danger" onclick="deleter(${identifierrow})">Delete</button>` + "</td></tr>";

            })

            document.getElementById("data").innerHTML = temp;
        }


    });
});

function edit() { alert("edit is coming") }
function deleter(x) {
    console.log(x)

    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        .then(function (response) {
            response.json().then(function (data) {

                console.log(data);


                data.forEach(kas => {

                    if (x == kas.isbn) {
                        let id = kas.bookId;
                        console.log(id);

                        const url = 'https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${id}';

                            // Awaiting fetch which contains  
                            // method, headers and content-type 
                            ( fetch(url, {
                                method: 'DELETE',
                                headers: {
                                    'Content-type': 'application/json'
                                }
                            }))();

                             


                    }
                })


            });
        });


}




