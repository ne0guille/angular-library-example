// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  category: String,
  avgRate: String,
  totalRates: Number,
  img: String  
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
