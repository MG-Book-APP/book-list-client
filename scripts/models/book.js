'use strict';

var __API_URL__  = 'http://localhost:3000';

(function(module) {
  // var __API_URL__  = 'https://mg-book-app.herokuapp.com';

  function Book(rawDataObj) { Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]); }

  Book.all = [];

  // ALL BOOK VIEW
  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#all-books-template').text());
    return template(this);
  }

  Book.renderAllBooks = (ctx, next) => {
    $('.all-books').empty();
    Book.all.map(book => $('.all-books').append(book.toHtml()));
    next();
  }

  Book.loadAll = (ctx, next) => {
    Book.all = ctx.results.rows.map(rows => new Book(rows));
    console.log('Books instantiated:',Book.all)
    console.log('Book count:',Book.all.length)
    next();
  }

  Book.fetchAll = (ctx, next) => {
    $.ajax('https://mg-book-app.herokuapp.com/api/v1/books')
    // $.ajax(`${__API_URL__}/api/v1/books`)
      .then(results => {
        ctx.results = results;
        next();
      })
      .catch(err => {
        window.errorView.initErrorPage(err);
      })
  }

  // SINGLE BOOK VIEW
  Book.prototype.singleToHtml = function() {
    var template = Handlebars.compile($('#single-book-template').text());
    return template(this);
  }

  Book.renderSingleBook = (ctx, next) => {
    $('.all-books').hide();
    $('.single-book').empty();
    Book.single.map(book => $('.single-book').append(book.singleToHtml()));
    next();
  }

  Book.loadSingle = (ctx, next) => {
    console.log('Load single book:',ctx.results)
    Book.single = [];
    Book.single = ctx.results.map(book => new Book(book));
    next();
  }

  Book.fetchSingle = (ctx, next) => {
    // $.get(`${__API_URL__}/api/v1/books/${ctx.params.id}`)
    $.get(`https://mg-book-app.herokuapp.com/api/v1/books/${ctx.params.id}`)
      .then(results => {
        ctx.results = results.rows;
        console.log('Fetch single book:',ctx.results);
        next();
      })
      .catch(err => {
        window.errorView.initErrorPage(err);
      })
  }

  // ADD BOOK VIEW
  Book.prototype.addBook = function(){
    $.ajax({
      // url: `${__API_URL__}/api/v1/books`,
      url: 'https://mg-book-app.herokuapp.com/api/v1/books',
      method: 'POST',
      data: {
        author: this.author,
        title: this.title,
        isbn: this.isbn,
        image_url: this.image_url,
        description: this.description,
      },
      success: window.location.assign('https://mg-book-app.github.io/book-list-client/'),
    })
  }

  // DELETE BOOK
  Book.deleteBook = (ctx) => {
    $('#delete-book').on('click', function() {
      console.log(ctx.params.id)
      $.ajax({
        url: `https://mg-book-app.herokuapp.com/api/v1/books/${ctx.params.id}`,
        // url: `http://localhost:3000/api/v1/books/${ctx.params.id}`,
        method: 'DELETE',
        success: function() {
          window.location.assign('https://mg-book-app.github.io/book-list-client/');
        }
      })
        .catch(err => {
          window.errorView.initErrorPage(err);
        })
    })
  }

  // UPDATE BOOK
  Book.renderEditSingleBook = (ctx, next) => {
    console.log('Render edit single book', ctx.results[0]);
    $('#updatetitle').val(ctx.results[0].title);
    $('#updateauthor').val(ctx.results[0].author);
    $('#updateimage_url').val(ctx.results[0].image_url);
    $('#updateisbn').val(ctx.results[0].isbn);
    $('#updatedescription').val(ctx.results[0].description);

    next();
  }

  Book.updateBook = (ctx, next) => {
    $('#edit-form').on('submit', function(e) {
      e.preventDefault();
      console.log('Update book',ctx);
      $.ajax({
        url: `https://mg-book-app.herokuapp.com/api/v1/books/${ctx.params.id}/edit`,
        method: 'PUT',
        headers: {"X-HTTP-Method-Override": "PUT"},
        data: {
          title: $('#updatetitle').val(),
          author: $('#updateauthor').val(),
          isbn: $('#updateisbn').val(),
          image_url: $('#updateimage_url').val(),
          description: $('#updatedescription').val()
        },
        success: function() {
          window.location.assign('https://mg-book-app.github.io/book-list-client/');
        }     
      })
    })
  }

  module.Book = Book;
})(window)