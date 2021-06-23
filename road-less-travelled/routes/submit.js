var express = require('express');
var router = express.Router();

const submitCtrl = require('../controllers/submitCtrl.js');

// router.get('/new', submitCtrl.newForm)
// router.post('/post', submitCtrl.create)


router.get('/:submit', submitCtrl.index);
// router.get('/', submitCtrl.show )



module.exports = router;