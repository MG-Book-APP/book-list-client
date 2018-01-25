'use strict';

(function(module) {
  var __API_URL__  = 'https://mg-book-app.herokuapp.com';

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
    // *TO DO*: SORT ROWS BY TITLE 
    rawData.forEach(bookObject => Book.all.push(new Book(bookObject)))
  }

  Book.fetchAll = () => {
    $.get('https://mg-book-app.herokuapp.com/api/v2/books')
      .then(function(data) {
        $('#results').empty();
        data.rows.forEach(function(book) {
          let content = `
            <p>author: ${book.author}</p>
            <h2>title: ${book.title}</h2>
            <p>ISBN: ${book.isbn}</p>
            <p>URL: ${book.image_url}</p>
            <p>Description: ${book.description}</p>
            `
          $('#results').append(content);
        })
      }, err => {
        errorView.initErrorPage(err);
      })
  };

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
  });

  Book.fetchAll();
  module.Book = Book;
})(window)