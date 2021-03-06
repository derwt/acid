const mongoose = require('mongoose');
const Promise =  require('bluebird');
const URL = 'mongodb://localhost:27017/avantiCD';

//Set up default mongoose connection
var mongoDB = URL;
mongoose.connect(mongoDB, {
  useMongoClient: true
});

// Get Mongoose to use the global promise library
mongoose.Promise = Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
  connection: db,
  url: URL
}
