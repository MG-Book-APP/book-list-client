'use strict'

page('/', window.Book.fetchAll, window.Book.loadAll, window.bookView.initIndexPage);
page('/books/:id', window.Book.fetchSingle, window.singleBook.initSingleBookPage);
// // page('/books/:books/new', /*ENTER - Form View that will allow the user to enter a new record into the DB*/);
// // single book init, fetch.single,
// page('*', function() {
//   page.redirect('/')
// })

// how we initialize page js
page();
