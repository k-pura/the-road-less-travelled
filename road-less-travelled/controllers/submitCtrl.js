const Activity = require('../models/activityMod');

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

function show(req,res) {

}

function index(req,res) {
    res.render('submit.ejs', {submits: Activity.getAll()})
}

module.exports = {
    index: index,
    // show: show,
    // newForm: newForm,
    // create: create,
}