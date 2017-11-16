// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: { type : String, unique: true },
  name: String,  
},{ _id: false });

const User = mongoose.model('User', UserSchema);

module.exports = User;
