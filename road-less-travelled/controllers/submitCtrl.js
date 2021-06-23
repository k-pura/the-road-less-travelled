const Activity = require('../models/activitiesMod');

async function create(req,res) {
   let incomingData = req.body
   await Activity.create({
       type: submit.type,
       name: submit.name,
       location: submit.location,
       description: submit.description,
       difficulty: submit.difficulty,
       cost: submit.cost,
       parking: submit.parking,
       tips: submit.tips,
       rating: submit. rating,
       map: submit.map,
       comments: submit.comments,
   })
}

function newForm(req,res) {
    res.render("submit.ejs")
}

function show(req, res) {
    Activity.findById(req.params.id)
    .populate('cast').exec(function(err, movie) {
      // Performer.find({}).where('_id').nin(movie.cast)
      Performer.find({_id: {$nin: movie.cast}})
      .exec(function(err, performers) {
        console.log(performers);
        res.render('movies/show', {
          title: 'Movie Detail', movie, performers
        });
      });
    });
  }

function index(req,res) {
    res.render('submit.ejs', {submits: Activity.getAll()})
}

module.exports = {
    index: index,
    show: show,
    newForm: newForm,
    create: create,
}