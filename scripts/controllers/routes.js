'use strict'

// client side route

page('/', bookView.initIndexPage);
// page('/books/:book_id', /*ENTER - Detail View of one complete book record*/);
// page('/books/:books/new', /*ENTER - Form View that will allow the user to enter a new record into the DB*/);
page('*', function() {
  page.redirect('/')
})

// how we initialize page js
page();
