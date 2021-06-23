var express = require('express');
var router = express.Router();

const submitCtrl = require('../controllers/submitCtrl.js');


router.post('/post', submitCtrl.formData)
router.get('/', submitCtrl.activityForm)




module.exports = router;