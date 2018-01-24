'use strict';

(function(module) {
  const errorView = {};

  errorView.initErrorPage = function(err) {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();

    // compiles handlebars template with an id of error template
    let template = Handlebars.compile($('#error-template').html());

    // Renders the err argument into the template, and appends it to an element with an id of error-message.
    `$('#error-message').append(${err})`

    template(this);

    errorCallback(err);
  }

  function errorCallback(err) {
    console.log('Error message:',err)
  }

  module.errorView = errorView;
})(window);