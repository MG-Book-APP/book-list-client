'use strict';

var __API_URL__  = 'https://mg-book-app.herokuapp.com';

(function(module) {
  function Book(rawDataObj) {
    this.author = rawDataObj.author;
    this.title = rawDataObj.title;
    this.isbn = rawDataObj.isbn;
    this.image_url = rawDataObj.image_url;
    this.description = rawDataObj.description;
  }

  Book.all = [];

  // load All
  Book.loadAll = rawData => {
    console.log(rawData);
    rawData.forEach(bookObject => Book.all.push(new Book(bookObject)))
  }

  // fetch from JSON
  Book.fetchAll = () => {
    $.getJSON('./data/books.json')
      .then(rawData => {
        console.log(rawData);
        Book.loadAll(rawData)
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
      }
        .then(console.log)
        .then(callback)
    )
  }

  module.Book = Book;
})(window)