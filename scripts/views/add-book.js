'use strict';

(function(module) {
  var formView = {};

  formView.init = (ctx, next) => {
    $('.book-form').show();
    $('.single-book').hide();
    $('.error-view').hide();
    $('.all-books').hide();
  }

  $('#book-form').on('submit', function(e) {
    e.preventDefault();

    let data = {
      author: e.target.author.value,
      title: e.target.title.value,
      isbn: e.target.isbn.value,
      image_url: e.target.image_url.value,
      description: e.target.description.value,
    }

    window.Book.addBook(data);

    this.reset();
  })

  module.formView = formView;
})(window)