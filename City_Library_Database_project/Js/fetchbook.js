
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