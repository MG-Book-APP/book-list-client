'use strict';

/* TO DO:
- Sort books by author or title
- Create a new endpoint at GET /api/v1/books which will retrieve an array of book objects from the database, limited to only the book_id, title, author, and image_url.
*/
var __API_URL__  = 'https://mg-book-app.herokuapp.com';

(function(module) {
  Book.all = []

  // fetch All
  Book.fetchAll = callback => {
    $.ajax('https://mg-book-app.herokuapp.com/api/v1/books')
      .then(results => {
        Book.loadAll(results);
      })
      .then(callback)
      .catch(err => {
        window.errorView.initErrorPage(err);
      })
  }

  Book.loadAll = rawData => {
    Book.all = rawData.rows.map(rows => new Book(rows));
    console.log('Books instantiated:',Book.all)
    console.log(Book.all.length)
  }

  function Book(rawDataObj) { Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]); }

  Book.prototype.toHtml = function() {
    $('.all-books').empty();

    Book.all.forEach(function(book) {
      let content = `
        <img src="${book.image_url}">
        <p>Author: ${book.author}</p>
        <h2>Title: ${book.title}</h2>
        <button class="select" data=${book.id} type="submit">Learn More</button>
        `
      $('.all-books').append(content);
    })
  }

  // add record
  Book.addRecord = function(data) {
    $.post(`https://mg-book-app.herokuapp.com/api/v1/books`,
      { author: data.author,
        title: data.title,
        isbn: data.isbn,
        image_url: data.image_url,
        description: data.description,
      })
      .then(function() {
        pageLoad();
      })
      .catch(function() {
        pageLoad();
      })
  }

  module.Book = Book
})(window)