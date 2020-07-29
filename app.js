const express = require('express');
var Book = require('./db');
const app = express();

app.get('/', function () {
	var mongoBookTest = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
	mongoBookTest.save(function (err, book) {
		if (err) return console.error(err);
		console.log(
			book.name + ' saved to bookstore collection' + ', Price: ' + book.price + ', Quantity: ' + book.quantity
		);
	});
});

app.listen(3000, function () {
	console.log('Connected to Server!');
});
