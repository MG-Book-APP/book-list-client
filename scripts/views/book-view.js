'use strict';

(function(module) {
  var bookView = {};

  bookView.init = (ctx, next) => {
    // $('.all-books').empty();
    // console.log('hello')
    // window.Book.all.map(book => $('.all-books').append(book.toHtml()));
    next();
  }

  // $('#book-form').on('submit', function(e) {
  //   e.preventDefault();

  //   let data = {
  //     // capture data from form, create data object
  //     author: e.target.author.value,
  //     title: e.target.title.value,
  //     isbn: e.target.isbn.value,
  //     image_url: e.target.image_url.value,
  //     description: e.target.description.value,
  //   }
  //   Book.addRecord(data);
  //   this.reset();
  // })

  module.bookView = bookView;

})(window)