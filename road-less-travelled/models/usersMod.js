const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  info: String,
  comments: String,
  favorites: [mongoose.Schema.Types.ObjectId],
  
}, {
  timestamps: true
});

module.exports = mongoose.model('User', usersSchema)

// Photo
// name
// Info
// Comments
// Saved Items
// Ratings
// Submissions