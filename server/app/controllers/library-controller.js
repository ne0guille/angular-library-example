const express = require('express'),
  router = express.Router(),
  libraryService = require('../services/library-service');  

  module.exports = function (app) {
    app.use('/api/library', router);
  };

router.route('/:id/books')
.get(async (req, res, next) => {
  const userId = req.params.id;
  const query = req.query;

  const library = await libraryService.getBooks(userId, query);
  
  return res.status(200).send({ books: library });
});


router.route('/books/:bookId/status')
  .post(async (req, res, next) => {
    const { bookId } = req.params;  
    const{ status, user } = req.body;    

    const response = await libraryService.updateStatus(user, bookId, status);
    return res.status(204).send({});
  });
  