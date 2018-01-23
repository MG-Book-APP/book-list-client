'use strict';

pageLoad();

$('#basic-form').on('submit', function(e){
    e.preventDefault();

    $.post('/db/person', data)
    .then(function () {
        pageLoad
    })
});

function pageLoad() {
    $.get('/db/person')
    .then(function(data) {
       $('#results').empty();

    });
}