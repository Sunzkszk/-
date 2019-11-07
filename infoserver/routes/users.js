var express = require('express');
var usersController = require('../controllers/users.js');
var router = express.Router();

var multer = require('multer');
var upload = multer({ dest : 'public/uploads/'});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',usersController.register );

router.post('/login',usersController.login );

router.get('/logout',usersController.logout );

router.get('/getUser',usersController.getUser );

router.post('/findPassword',usersController.findPassword );

router.get('/verifyImg',usersController.verifyImg );

router.post('/uploadUserHead',upload.single('file'), usersController.uploadUserHead );

router.get('/getTeacher',usersController.getTeacher );

router.post('/relationChange',usersController.relationChange );

router.post('/infoChange',usersController.infoChange );

router.post('/find',usersController.find );

router.post('/hassendEmail',usersController.hassendEmail );

router.post('/infoChange',usersController.infoChange );

module.exports = router;
