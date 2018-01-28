'use strict';

(function(module){
  let editBook = {};

  editBook.init = (ctx, next) => {
    $('.all-books').hide();
    $('.error-view').hide();
    $('.book-form').hide();
    $('.single-book').hide();
    $('.edit-view').show();

    next();
  }

  module.editBook = editBook;

})(window);