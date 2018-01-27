'use strict';
var __API_URL__  = 'http://localhost:3000';

(function(module){
  let singleBook = {};

  singleBook.init = (ctx, next) => {
    // $('.all-books').empty();
    // window.Book.all.map(book => $('.single-book').append(book.toHtml()));
    // next();
  }

  // $('.all-books').on('click', 'a', function(e) {
  //   // e.preventDefault();
  // //   // let bookId = $(this).attr('data');
  // //   // console.log('book id:',$(this).attr('data'))
  // })

  module.singleBook = singleBook;

})(window);