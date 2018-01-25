'use strict';

/* TO DO:
- Sort books by author or title
- render 3 books (vs 9)
- Create a new endpoint at GET /api/v1/books which will retrieve an array of book objects from the database, limited to only the book_id, title, author, and image_url.
*/
var __API_URL__  = 'https://mg-book-app.herokuapp.com';
// var app = app || {};

(function(module) {
  Book.all = []

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }
  // load All
  Book.loadAll = rawData => {
    rawData.rows.sort((a,b) => (a.author) - (b.author))

    Book.all = rawData.rows.map(rows => new Book(rows));
    console.log('Books instantiated:',Book.all)
    console.log(Book.all.length)
  }

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

  //get request to /api/v1/books/:id
  Book.fetchOne = callback => {
    $.ajax('https://mg-book-app.herokuapp.com/api/v1/books/:id')
    // need to specify id somehow - params.id?
      .then(data => {
      // pass single book through
      })
      .then(callback)
      .catch(err => {
        window.errorView.initErrorPage(err);
      })
  }

  // render
  Book.prototype.toHtml = function() {
    // console.log('this', this);
    // $('#container').empty();
    Book.all.forEach(function(book) {
      let content = `
        <p>Author: ${book.title}</p>
        <h2>Title: ${book.author}</h2>
        <img src="${book.image_url}">
        `
      // <p>ISBN: ${book.isbn}</p>
      // <p>Description: ${book.description}</p>
      $('.container').append(content);
    })
  }

  // add record
  Book.addRecord = function(data) {
    $.post(`${__API_URL__}/api/v1/books`,
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