var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('user.ejs');
})

router.get('/favorites', function(req, res, next) {
    res.render('favorites.ejs');
})


module.exports = router;