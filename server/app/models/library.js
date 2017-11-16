// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LibraryBookSchema = new Schema({
  book:{    
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  status: String,
  rating: String,
});

var LibrarySchema = new Schema({
  user: { type : String, unique: true },
  books: [LibraryBookSchema]  
});

const Library = mongoose.model('Library', LibrarySchema, 'library');

module.exports = Library;
