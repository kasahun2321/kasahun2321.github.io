async function editBookForm(bookid) {
    $('.jumbotron').html(`
    <form  onsubmit="updatebookform(${bookid})" id="bookform">
    <fieldset>
        <legend>Edit Book Form</legend>
        <div class="text-center col-md-12">
        <span class="alert alert-dismissible alert-success align-items-lg-center"  id="succesalert"  style="display:none" role="alert">
            <strong >You successfully! Updated A book</strong>
        </span>
        </div>
        
        <p>* required form field</p>
        <div class="form-group">
            <label class="col-form-label col-form-label-lg" for="inputLarge">Book title*</label>
            <input class="form-control form-control-lg col-md-12" type="text"
                placeholder="Enter the book title here" id="booktitle" required>
        </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label class="col-form-label col-form-label-lg" for="inputLarge">ISBN*</label>
                <input class="form-control form-control-lg " type="text" placeholder="Enter the ISBN here"
                    id="isbn" required>
            </div>
            <div class="form-group col-md-6">
                <label class="col-form-label col-form-label-lg" for="inputLarge">Over due pay fee*</label>
                <input class="form-control form-control-lg " type="text"
                    placeholder="Enter the amount for Over due pay fee" id="overduefee" required>
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label class="col-form-label col-form-label-lg" for="inputLarge">Publisher*</label>
                <input class="form-control form-control-lg " type="text"
                    placeholder="Enter the Publisher name here" id="publisher" required>
            </div>
            <div class="form-group col-md-6">
                <label class="col-form-label col-form-label-lg" for="inputLarge">Date Published*</label>
                <input class="form-control form-control-lg " type="date" placeholder="MM-DD-YYYY"
                    id="publisheddata" required>
            </div>
        </div>

        <div class="btn-toolbar button" role="toolbar" aria-label="Toolbar with button groups">

            <div  aria-label="Second group">
            <button type="reset" class="btn btn btn-danger">Reset</button>
                <button type="submit" class="btn btn btn-success">Save book</button>
            </div>
            
            
        </div>
    </fieldset>

</form>`)

    this.event.preventDefault();
    let response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/get/${bookid}`)
    let result = await response.json();

    document.getElementById("booktitle").value = result["title"];
    document.getElementById("isbn").value = result["isbn"];
    document.getElementById("overduefee").value = result["overdueFee"];
    document.getElementById("publisher").value = result["publisher"];
    document.getElementById("publisheddata").value = result["datePublished"];




}

async function updatebookform(bookid) {
    this.event.preventDefault();
    isbn = document.getElementById("isbn").value
    title = document.getElementById("booktitle").value
    overdueFee = document.getElementById("overduefee").value
    publisher = document.getElementById("publisher").value
    datePublished = document.getElementById("publisheddata").value

    try {
        fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${bookid}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                "bookId": `${bookid}`,
                "isbn": `${isbn}`,
                "title": `${title}`,
                "overdueFee": `${overdueFee}`,
                "publisher": `${publisher}`,
                "datePublished": `${datePublished}`
            })
        })
            .then(function (result)
        {console.log(result)})


        $('#succesalert').fadeIn(500)
        setTimeout(function () {
            $('#succesalert').fadeOut(500);
            books();
            history.pushState({ page: "editBook", bookid: bookid }, "", "editBook")// logs state to the history api   


        }, 2000);

    } catch (error) {

        alert(error)

    }

    function books() {
        setTimeout(_ => {
            location.reload('book.html')
        })
    }


}

