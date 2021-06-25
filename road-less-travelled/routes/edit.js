var express = require('express');
var router = express.Router();

const editCtrl = require('../controllers/editCtrl.js');


router.post('/post', editCtrl.formData)
router.get('/', editCtrl.editForm)




module.exports = router;