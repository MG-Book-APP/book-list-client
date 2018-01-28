'use strict';

(function(module) {
  var bookView = {};

  bookView.init = (ctx, next) => {
    $('.book-form').hide();
    $('.single-book').hide();
    $('.edit-view').hide();
    $('.error-view').hide();
    $('.all-books').show();

    next();
  }

  module.bookView = bookView;

})(window)