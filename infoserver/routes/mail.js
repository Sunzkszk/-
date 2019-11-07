var express = require('express');
var mailController = require('../controllers/mail.js');
var router = express.Router();

var MailModel = require('../models/mail.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sendEmail',mailController.sendEmail);

router.post('/findEmail',mailController.findEmail);

router.post('/deleteEmail',mailController.deleteEmail);
module.exports = router;