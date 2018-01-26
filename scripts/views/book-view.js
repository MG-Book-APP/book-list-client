'use strict';

(function(module) {
  var bookView = {};

  bookView.initIndexPage = () => {
    $('.container').add('p').text('Total books: ' + Book.all.length)
    Book.all.forEach(a => a.toHtml())
  }

  // FORM PAGE
  // bookView.initFormPage = () => {
  //   //enter here
  // }

  // FORM SUBMIT
  // bookView
  $('#book-form').on('submit', function(e) {
    e.preventDefault();
  
    let data = {
      // capture data from form, create data object
      author: e.target.author.value,
      title: e.target.title.value,
      isbn: e.target.isbn.value,
      image_url: e.target.image_url.value,
      description: e.target.description.value,
    }
    
    // do AJAX call here if it's confirmed that post request worked
    // $.post(`${__API_URL__}/api/v1/books`, data)
    //   .then(function() {
    //     pageLoad();
    //   })
    //   .catch(function() {
    //     pageLoad();
    //   })
    Book.addRecord(data);
    
    this.reset();
  })

  module.bookView = bookView;

})(window)