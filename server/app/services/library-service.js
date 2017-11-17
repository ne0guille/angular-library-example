'use strict';

const mongoose = require('mongoose'),
  LibraryModel = mongoose.model('Library');

const getBooks = async(user, query) => {

  return new Promise((resolve, reject) => {
    const { limit, status, lastSeen } = query;
    
    var statusQuery = {};
    if(status !== 'all') statusQuery['books.status'] = { $eq: status};

    LibraryModel.aggregate([
      { $match: { user: user }},
      { $unwind: "$books"},
      { $match: statusQuery},
      { $sort: { 'books.book_id': 1}},      
      { $group: { _id: "$_id", books: {"$push": "$books"}, total: { $sum: 1 }}},  
      { $project: {
          books: {
            $slice: [{
              $filter: {
                input: '$books',
                as: 'book',
                cond: { $or: [{ $gt: ['$$book.book_id', lastSeen]}, { $eq: [lastSeen, '']}  ]},
              },
            }, +limit]    
          },
         _id: 0,
          total: 1
      }},
     ], (err, results) =>{      
        LibraryModel.populate(results, {path: 'books.book'}, (err, res) =>{
          if(err) reject(err);
          resolve(res);
        });
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
