const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var activitySchema = new mongoose.Schema({
  type: String,
  name: String,
  location: String,
  description: String,
  difficulty: String,
  cost: String,
  parking: String,
  tips: String,
  rating: Number,
  map: String,
  comments: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema)