
// fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list").then(function (response) {
//     data = response.json().then(function (text) {
//         console.log(text);
//     });
// });
fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
  function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].bookId + '-title: ' + data[i].title+" -fee:"+data[i].overdueFee+"-publisher:"+data[i].publisher+"date published:"+data[i].datePublished;
      mainContainer.appendChild(div);
    }
}
  
////////////////////////
const data = {
  "isbn": "w12abc",
  "title": "Automate boring Staff",
  "overdueFee": 1.25,
  "publisher": "KT",
  "datePublished": "2002-10-25"
};


fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});