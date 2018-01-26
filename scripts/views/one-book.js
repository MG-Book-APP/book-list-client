'use strict';

(function(module){
  let singleBook = {};

  console.log('hello')

  // on click of button
  $('.all-books').on('click', 'button', function(e) {
    e.preventDefault();
    let bookId = $(this).attr('data');
    console.log($(this).attr('data'));
    console.log(e.target.attr.data);

    $.get(`https://mg-book-app.herokuapp.com/api/v1/books/${bookId}`)
      .then(data => {
       console.log(data);
      })
      .then(callback)
      .catch(err => {
        window.errorView.initErrorPage(err);
      })
  })


  module.singleBook = singleBook;

})(window);