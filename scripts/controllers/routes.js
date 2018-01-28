'use strict';

page('/', window.Book.fetchAll, window.Book.loadAll, window.Book.renderAllBooks, window.bookView.init);
page('/books/add', window.formView.init);
page('/books/:id', window.Book.fetchSingle, window.Book.loadSingle, window.Book.renderSingleBook, window.singleBook.init);

page();
