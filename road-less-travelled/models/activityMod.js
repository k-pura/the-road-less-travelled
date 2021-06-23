const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var activitySchema = new Schema({
  type: String,
  name: String,
  location: String,
  website: String,
  description: String,
  difficulty: String,
  cost: String,
  parking: String,
  tips: String,
  rating: Number,
  map: String,
  comments: [String],
}, {
  timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema)