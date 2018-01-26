'use strict';
var __API_URL__  = 'http://localhost:3000';

(function(module){
  let singleBook = {};

  singleBook.initBookPage = (ctx, next) => {
    Book.single.forEach(a => a.singleToHtml())
  }

  // $('.all-books').on('click', 'a', function(e) {
  //   // e.preventDefault();
  // //   // let bookId = $(this).attr('data');
  // //   // console.log('book id:',$(this).attr('data'))
  // })

  module.singleBook = singleBook;

})(window);