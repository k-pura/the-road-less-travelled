const Activity = require('../models/activityMod');

async function formData(req,res) {
   let incomingData = req.body
   console.log(incomingData)
   await Activity.create(req.body)
    res.redirect('/home')
} 

function activityForm(req,res) { 
    res.render("submit.ejs")
}


module.exports = {
    activityForm: activityForm,
    formData: formData,
}