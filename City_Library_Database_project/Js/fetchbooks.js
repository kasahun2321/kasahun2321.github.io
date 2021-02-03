

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
                temp += "<td>" + ` <a onclick="edit()" class="btn btn-success">Edit</a>` + "</td>";
                temp += "<td>" + `<button class="btn btn-danger" onclick="delete()">Delete</button>` + "</td></tr>";

            })

            document.getElementById("data").innerHTML = temp;
        }


    });
});


