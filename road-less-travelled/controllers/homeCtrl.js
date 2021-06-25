const Activity = require('../models/activityMod');


function outdoors(req, res) {
    Activity.find({type: 'Outdoor Activity'}, function(err, activities) {
    res.render('activity', {activities})
    })
}

function food(req, res) {
    Activity.find({type: 'Food'}, function(err, activities) {
        res.render('activity', {activities})
        })
    }

function drinks(req, res) {
    Activity.find({type: 'Drinks'}, function(err, activities) {
        res.render('activity', {activities})
        })
    }

function stays(req, res) {
    Activity.find({type: 'Stays'}, function(err, activities) {
        res.render('activity', {activities})
        })
    }
function entertainment(req, res) {
    Activity.find({type: 'Entertainment'}, function(err, activities) {
        res.render('activity', {activities})
        })
    }

function index(req, res) {
    Activity.find({}, function(err, activity) {
        res.render('home', {activity})
    });
}


module.exports = {
   index:index,
   outdoors:outdoors,
   food:food,
   entertainment:entertainment,
   drinks:drinks,
   stays:stays,
}