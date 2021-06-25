var express = require('express');
var router = express.Router();

const homeCtrl = require('../controllers/homeCtrl.js');

router.get('/', homeCtrl.index);

router.get('/activity/outdoors', homeCtrl.outdoors)

router.get('/activity/food', homeCtrl.food)

router.get('/activity/drinks', homeCtrl.drinks)

router.get('/activity/entertainment', homeCtrl.entertainment)

router.get('/activity/stays', homeCtrl.stays)

router.get('/activity/detail', function(req, res, next) {
    res.render('detail.ejs');
})

module.exports = router;
