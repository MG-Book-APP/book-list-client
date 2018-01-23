'use strict';

pageLoad();

var __API_URL__ = 'https://mg-book-app.herokuapp.com';

$('#book-form').on('submit', function(e){
  e.preventDefault();

  let data = {
    // capture data from form, create data object
    title: e.target.title.value,
    author: e.target.author.value,
    url: e.target.url.value,
  }

  // AJAX call to /books?
  $.post(`${__API_URL__}/db/books`, data)
    .then(function () {
      pageLoad();
    })
    .catch(function() {
      pageLoad();
    })
});

function pageLoad() {
  $.get(`${__API_URL__}/db/books`)
    .then(function(data) {
      $('#results').empty();

      data.rows.forEach(function(book) {
        let content = `
          <h2>title: ${book.title}</h2>
          <p>author: ${book.author}</p>
          <p>URL: ${book.url}</p>
          `
        $('results').append(content);
      })
    });
}

// Load JSON file into DB
app.get('/', function(req,res) {
  res.sendFile('./data/books.json')
})