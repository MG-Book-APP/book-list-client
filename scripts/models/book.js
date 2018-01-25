'use strict';
var __API_URL__  = 'https://mg-book-app.herokuapp.com';
// var app = app || {};

(function(module) {
  Book.all = []

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }
  // load All
  Book.loadAll = rawData => {
    rawData.rows.sort((a,b) => (b.title) - (a.title))

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

  // insert record
  Book.prototype.insertRecord = function(callback) {
    $.post(`${__API_URL__}/api/v1/books`,
      { author: this.author,
        title: this.title,
        isbn: this.isbn,
        image_url: this.image_url,
        description: this.description,
      })
      .then(callback)
  }

  // Form - add book
  $('#book-form').on('submit', function(e) {
    e.preventDefault();
  
    let data = {
      // capture data from form, create data object
      author: e.target.author.value,
      title: e.target.title.value,
      isbn: e.target.isbn.value,
      image_url: e.target.image_url.value,
      description: e.target.description.value,
    }
  
    $.get('https://mg-book-app.herokuapp.com/api/v1/books')
      .then(function(data) {
        $('.container').sort();
        console.log(data);
      })
  
    // do AJAX call here if it's confirmed that post request worked
    $.post(`${__API_URL__}/api/v1/books`, data)
      .then(function() {
        pageLoad();
      })
      .catch(function() {
        pageLoad();
      })
    this.reset();
  })

  module.Book = Book
})(window)