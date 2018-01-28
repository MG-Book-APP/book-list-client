'use strict';

(function(module){
  let singleBook = {};

  singleBook.init = (ctx, next) => {
    $('.all-books').hide();
    $('.error-view').hide();
    $('.book-form').hide();
    $('.edit-view').hide();
    $('.single-book').show();

    next();
  }
  
  module.singleBook = singleBook;

})(window);