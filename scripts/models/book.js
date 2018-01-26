'use strict';

// var __API_URL__  = 'https://mg-book-app.herokuapp.com';
var __API_URL__  = 'http://localhost:3000';


(function(module) {
  function Book(rawDataObj) { Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]); }

  Book.all = [];
  Book.single = [];
  
  Book.fetchAll = (ctx, next) => {
    $.ajax(`${__API_URL__}/api/v1/books`)
      .then(results => {
        ctx.results = results;        
        next();
      })
      .catch(err => {
        window.errorView.initErrorPage(err);
      })
  }

  Book.loadAll = (ctx, next) => {
    Book.all = ctx.results.rows.map(rows => new Book(rows));
    console.log('Books instantiated:',Book.all)
    console.log('Book count:',Book.all.length)
    next();
  }
  // change to handlebars...
  Book.prototype.toHtml = function() {
    $('.all-books').empty();

    Book.all.forEach(function(book) {
      let content = `
        <img src="${book.image_url}">
        <p>Author: ${book.author}</p>
        <h2>Title: ${book.title}</h2>
        <a href="/book/${book.id}">Learn More</a>
        `
      $('.all-books').append(content);
    })
  }

  // SINGLE BOOK VIEW
  Book.fetchSingle = (ctx, next) => {
    $.get(`${__API_URL__}/api/v1/books/${ctx.params.id}`)
      .then(results => {
        ctx.book = results[0];        
        console.log(ctx.book);
      })
      // .then(ctx.book => {

      // // })
        
      //   Book.loadSingle(ctx.book)
      //   next();
      // })
      .catch(err => {
        window.errorView.initErrorPage(err);
      })
  }

  Book.loadSingle = (ctx, next) => {
    Book.single.empty();

    Book.single = ctx.results.rows.map(rows => new Book(rows));
    next();
  }
  
  Book.singleToHtml = function(ctx, next) {
    $('section').empty();

    Book.single.forEach(book => {
      let content = `
        <img src="${book.image_url}">
        <p>Author: ${book.author}</p>
        <h2>Title: ${book.title}</h2>
        <a href="/book/${book.id}">Learn More</a>
        `
      $('.single-book').append(content);
    })
    next();
  }

  // add record
  Book.addRecord = function(data) {
    $.ajax({
      url: `${__API_URL__}/api/v1/books`,
      method: 'POST',
      data: {
        author: data.author,
        title: data.title,
        isbn: data.isbn,
        image_url: data.image_url,
        description: data.description,
      },
      success: window.location = '/',
    })
  }

  module.Book = Book;
})(window)