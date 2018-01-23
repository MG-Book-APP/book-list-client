'use strict';

pageLoad();

var __API_URL__ = 'https://mg-book-app.herokuapp.com';

$('#basic-form').on('submit', function(e){
    e.preventDefault();

    $.post(`${__API_URL__}/db/person`, data)
    .then(function () {
        pageLoad();
    })
    .catch(function() {
        pageLoad();
    });
});

function pageLoad() {
    $.get(`${__API_URL__}/db/person`)
    .then(function(data) {
       $('#results').empty();
    });
}