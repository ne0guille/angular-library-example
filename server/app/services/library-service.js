'use strict';

const mongoose = require('mongoose'),
  LibraryModel = mongoose.model('Library');

const getBooks = async(user, query) => {

  return new Promise((resolve, reject) => {
    const { limit, status, lastSeen } = query;
    
    var statusQuery = {};
    if(status !== 'all') statusQuery['books.status'] = { $eq: status};
    console.log(lastSeen);
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
                cond: { $or: [{ $gt: ['$$book.book_id', lastSeen]}, { $eq: [lastSeen, '']}  ]}, //'5a0ce4cc1f6bb89e2c1cff43'
              },
            }, 5]    
          },
         _id: 0,
          total: 1
      }},
     ], (err, results) =>{      
        console.log(results);   
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
