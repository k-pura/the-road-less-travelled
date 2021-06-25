var express = require('express');
var router = express.Router();

const profileCtrl = require('../controllers/profileCtrl.js');

router.post('/edit/:id/post', profileCtrl.formData)

router.get('/edit', profileCtrl.editForm)

router.get('/', profileCtrl.show)

// router.get('/favorites', function(req, res, next) {
//     res.render('favorites.ejs');
// })


module.exports = router;