// 'use strict';

// pageLoad();

// var __API_URL__ = 'https://mg-book-app.herokuapp.com';

// $('#book-form').on('submit', function(e) {
//   e.preventDefault();

//   let data = {
//     // capture data from form, create data object
//     author: e.target.author.value,
//     title: e.target.title.value,
//     isbn: e.target.isbn.value,
//     image_url: e.target.image_url.value,
//     description: e.target.description.value,
//   }

//   $.get('https://mg-book-app.herokuapp.com/api/v1/books')
//       .then(function(data) {
//         $('.container').sort();
//         console.log(data);
//       })

//   // do AJAX call here if it's confirmed that post request worked
//   $.post(`${__API_URL__}/api/v1/books`, data)
//     .then(function() {
//       pageLoad();
//     })
//     .catch(function() {
//       pageLoad();
//     })
//   this.reset();
// });

// // Load JSON file into DB
// //$.get('/', function(req,res) {
// //  res.sendFile('./data/books.json')
// //})
// // }
