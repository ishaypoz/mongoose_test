const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Connected!');
});

const BookSchema = mongoose.Schema({
	name: String,
	price: Number,
	quantity: Number
});

const Book = mongoose.model('Book', BookSchema, 'bookstore');

module.exports = Book;
