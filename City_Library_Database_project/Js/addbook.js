
const wrapper = document.getElementById('form');
wrapper.addEventListener('submit', (e) => {
    let message = [];
    let isbn = document.getElementById('isbn').value;
    let title = document.getElementById('title').value;
    let overdueFee = document.getElementById('fee').value;
    let publisher = document.getElementById('publisher').value;
    let date = document.getElementById("date").value;
    if (isbn == '' || title == '' || date == '' || overdueFee == '' || publisher == '' || date == '') {
        message.push('requered filled are missing');
    }
    // if (message.length > 0) {
    //     e.preventDefault();

    // }
 
    const url = 'https://elibraryrestapi.herokuapp.com/elibrary/api/book/add';
   
    // post body data 
    const data = {
        "isbn": `${isbn}`,
        "title": `${title}`,
        "overdueFee": `${overdueFee}`,
        "publisher": `${publisher}`,
        "datePublished": `${date}`
    };
    // create request object
    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    fetch(request)
        .then(res => res.json())
        .then(res => console.log(res));

});