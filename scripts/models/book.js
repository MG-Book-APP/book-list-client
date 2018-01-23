var Book = {
    Object.key(
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

loadDB();

function loadBooks() {
 fs.readFile('../book-list-client/data/books.json', function(err, fd) {
   JSON.parse(fd.toString()).forEach(function(ele) {
     client.query(
       'INSERT INTO books(title, author, isbn, image_url, description) VALUES($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
       [ele.title, ele.author, ele.isbn, ele.image_url, ele.description]
     )
   })
 })
}

function loadDB() {
 client.query(`
   CREATE TABLE IF NOT EXISTS
   books(id SERIAL PRIMARY KEY, title VARCHAR(255), author VARCHAR(255), isbn VARCHAR(255), image_url VARCHAR(255), description TEXT NOT NULL);
   `)

   .then(loadBooks());
}