'use strict';

(function(module) {
  const errorView = {};

  errorView.initErrorPage = function(err) {
    $('.all-books').hide();
    $('.single-book').hide();
    $('.book-form').hide();
    $('.edit-view').hide();
    $('.error-view').show();

    var message = { err : `${err.status} ${err.statusText}`}
    console.log(message);
    var templateScript = $('#error-template').html();
    var template = Handlebars.compile(templateScript);
    $('.error-view').append(template(message));

    errorCallback(err);
  }

  function errorCallback(err) {
    console.log('Error message:',err)
  }

  module.errorView = errorView;
})(window);