var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LibraryBookSchema = new Schema({
  book:{    
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
  book_id: String,
  status: String,
  rates: [Number],
});

var LibrarySchema = new Schema({
  user: { type : String, unique: true },
  books: [LibraryBookSchema],
  total: Number,
  page: Number
});

const Library = mongoose.model('Library', LibrarySchema, 'library');

module.exports = Library;
