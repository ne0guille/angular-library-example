'use strict';

const mongoose = require('mongoose'),
  LibraryModel = mongoose.model('Library');

const getBooks = async(user, query) => {

  return new Promise((resolve, reject) => {
    const { limit, status } = query;
    
    LibraryModel.findOne({ user: user })
    .populate({
      path: 'books.book',  
      //match: { status: status },  
      options: { limit: limit }
    })       
    .exec((err, library) => {
      if (err) return reject(err);
      library = library.books.filter(b => b.status === status || status === 'all');
      resolve(library);
    });
  });
}
const updateStatus = async(userId, bookId, status) => {  
  return new Promise((resolve, reject) => {
    LibraryModel.update({ 'user': userId, 'books.book': bookId },
      { $set: { "books.$.status" : status } },
      (err, res) => {
        if(err) reject(err);

        resolve(res);
      });
  });
}

module.exports = {
  getBooks,
  updateStatus,
}
