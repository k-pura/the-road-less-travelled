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


// Activity.create({type: "Outdoor Activity", name: "Amethyst Mine Panorama", location: "Thunder Bay, Ontario", description: "A unique pick-your-own amethyst experience where you are able to dig for your own amethysts. You pay by the pound upon exit. There is also a self-guided tour available.", difficulty: "Moderate", cost: "From free to affordable", parking: "On-site.", tips: "Get there early for a less crowded experience.", rating: 8, website: "amethystmine.com"}, function(err, activity){console.log(activity)})
