'use strict';

(function(module, Book) {
  var bookView = {};

  bookView.initIndexPage = () => {
    $('.container').add('p').text('Total books: ' + Book.all.length)
    Book.all.forEach(a => a.toHtml())
  }
  module.bookView = bookView;
})(window, window.Book)