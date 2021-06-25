const User = require('../models/userMod');

async function formData(req,res) {
    let incomingData = req.body
    User.findById(req.user._id,async function(err, profile) {
        profile.name = req.body.name
        profile.email = req.body.email
        profile.info = req.body.info
        await profile.save()
    })
    res.redirect('/profile')
} 
 
//    let incomingData = req.body
//    console.log(incomingData)
//    await Activity.create(req.body)
//     res.redirect('/home')

function editForm(req,res) { 
    console.log(req.user) 
    res.render("edit.ejs", {profile:req.user})
}

function show(req, res) {
    User.find({}, function(err, user) {
        res.render('profile', {user})
    });
}


module.exports = {
    show:show,
    formData:formData,
    editForm:editForm,
}