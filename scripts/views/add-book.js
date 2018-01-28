'use strict';

(function(module) {
  var formView = {};

  formView.init = function() {
    $('.book-form').show();
    $('.single-book').hide();
    $('.error-view').hide();
    $('.all-books').hide();
    $('#book-form').on('submit', formView.submitForm);
  }

  formView.submitForm = e => {
    e.preventDefault();

    let book = new window.Book({
      author: $('#author').val(),
      title: $('#title').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val(),
    });
    console.log(book)
    book.addBook();
  }

  module.formView = formView;
})(window)