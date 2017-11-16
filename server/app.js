

var express = require('express'),
  router = express.Router(),  
  cors = require('cors'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

var app = express();

app.use(cors());
app.use('/', router);
// const routes = require('./api/routes');
// routes.forEach((route) => route(router));

module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

